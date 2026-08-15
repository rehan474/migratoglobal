import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { sendTemplateEmail } from "@/lib/email-templates/send-email";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(50).optional().default(""),
  visaType: z.string().trim().min(1, "Visa type is required").max(100),
  country: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const parseResult = contactSchema.safeParse(body);
        if (!parseResult.success) {
          return Response.json(
            { error: "Validation failed", issues: parseResult.error.issues },
            { status: 400 },
          );
        }

        const data = parseResult.data;

        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

          const { data: inserted, error: dbError } = await supabaseAdmin
            .from("inquiries")
            .insert({
              name: data.name,
              email: data.email,
              phone: data.phone,
              visa_type: data.visaType,
              country: data.country,
              message: data.message,
            })
            .select("id")
            .single();

          if (dbError || !inserted) {
            console.error("Failed to save inquiry:", dbError);
            return Response.json({ error: "Failed to save inquiry" }, { status: 500 });
          }

          try {
            await sendTemplateEmail("inquiry-notification", "info@migratoglobals.com", {
              templateData: {
                name: data.name,
                email: data.email,
                phone: data.phone || "—",
                visaType: data.visaType,
                country: data.country || "—",
                message: data.message || "—",
                submittedAt: new Date().toISOString(),
              },
              replyTo: data.email,
              idempotencyKey: `inquiry-${inserted.id}`,
            });

            await supabaseAdmin.from("inquiries").update({ email_sent: true }).eq("id", inserted.id);
          } catch (emailError) {
            console.error("Email notification failed:", emailError);
          }

          return Response.json({ success: true });
        } catch (error) {
          console.error("Contact form error:", error);
          return Response.json({ error: "Failed to process inquiry" }, { status: 500 });
        }
      },
    },
  },
});

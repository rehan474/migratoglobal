import { Resend } from "resend";
import { render } from "@react-email/render";

import { TEMPLATES, type TemplateName } from "./registry";

interface SendTemplateEmailOptions {
  templateData?: Record<string, unknown>;
  idempotencyKey?: string;
  replyTo?: string;
}

const SENDER_DOMAIN = process.env["SENDER_DOMAIN"] ?? "notify.migratoglobals.com";
const FROM_EMAIL = `notifications@${SENDER_DOMAIN}`;

export async function sendTemplateEmail(
  templateName: TemplateName,
  to: string,
  options: SendTemplateEmailOptions = {},
) {
  const template = TEMPLATES[templateName];
  if (!template) {
    throw new Error(`Unknown email template: ${templateName}`);
  }

  const resendApiKey = process.env["RESEND_API_KEY"];
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(resendApiKey);

  const Component = template.component;
  const element = <Component {...(options.templateData ?? {})} />;
  const html = await render(element);
  const text = await render(element, { plainText: true });

  const { data, error } = await resend.emails.send({
    to,
    from: FROM_EMAIL,
    subject: template.subject,
    html,
    text,
    ...(options.replyTo ? { replyTo: options.replyTo } : {}),
    ...(options.idempotencyKey ? { headers: { "Idempotency-Key": options.idempotencyKey } } : {}),
  });

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`);
  }

  return { sent: true, messageId: data?.id };
}
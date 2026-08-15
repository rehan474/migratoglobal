import { sendLovableEmail, EmailAPIError } from "@lovable.dev/email-js";
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

  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  if (!lovableApiKey) {
    throw new Error("LOVABLE_API_KEY is not configured");
  }

  const Component = template.component;
  const element = <Component {...(options.templateData ?? {})} />;
  const html = await render(element);
  const text = await render(element, { plainText: true });

  const payload: Parameters<typeof sendLovableEmail>[0] = {
    to,
    from: FROM_EMAIL,
    sender_domain: SENDER_DOMAIN,
    subject: template.subject,
    html,
    text,
  };

  if (options.idempotencyKey) {
    payload.idempotency_key = options.idempotencyKey;
  }

  if (options.replyTo) {
    payload.reply_to = options.replyTo;
  }

  const result = await sendLovableEmail(payload, { apiKey: lovableApiKey });

  if (!result.success) {
    throw new EmailAPIError(
      result.status ? Number(result.status) : 500,
      result.status ?? "send_failed",
      null,
      result.status ?? null,
    );
  }

  return { sent: true, messageId: result.message_id };
}

import type { ComponentType } from "react";
import { template as inquiryNotification } from "./inquiry-notification";

export interface TemplateEntry {
  component: ComponentType<Record<string, unknown>>;
  subject: string;
  displayName?: string;
  previewData?: Record<string, unknown>;
  to?: string;
}

export type TemplateName = "inquiry-notification";

export const TEMPLATES: Record<TemplateName, TemplateEntry> = {
  "inquiry-notification": inquiryNotification,
};

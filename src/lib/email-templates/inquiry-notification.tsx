import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface InquiryNotificationProps {
  name?: string;
  email?: string;
  phone?: string;
  visaType?: string;
  country?: string;
  message?: string;
  submittedAt?: string;
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Arial, sans-serif",
};

const container = {
  padding: "24px 28px",
  maxWidth: "600px",
};

const heading = {
  color: "#0f172a",
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: 1.3,
  margin: "0 0 18px",
};

const label = {
  color: "#64748b",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.025em",
  margin: "16px 0 4px",
};

const value = {
  color: "#0f172a",
  fontSize: "15px",
  lineHeight: 1.5,
  margin: "0 0 12px",
};

const messageBox = {
  backgroundColor: "#f8fafc",
  borderRadius: "8px",
  padding: "14px 16px",
  color: "#0f172a",
  fontSize: "15px",
  lineHeight: 1.6,
  margin: "4px 0 0",
};

const footer = {
  color: "#64748b",
  fontSize: "13px",
  lineHeight: 1.5,
  margin: "24px 0 0",
};

export function InquiryNotificationEmail({
  name = "—",
  email = "—",
  phone = "—",
  visaType = "—",
  country = "—",
  message = "—",
  submittedAt = new Date().toISOString(),
}: InquiryNotificationProps) {
  const formattedDate = new Date(submittedAt).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New website inquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New website inquiry</Heading>

          <Text style={value}>
            A visitor submitted the free eligibility assessment form on the Migrato Dream Jobs website.
          </Text>

          <Text style={label}>Name</Text>
          <Text style={value}>{name}</Text>

          <Text style={label}>Email</Text>
          <Text style={value}>{email}</Text>

          <Text style={label}>Phone / WhatsApp</Text>
          <Text style={value}>{phone}</Text>

          <Text style={label}>Visa type</Text>
          <Text style={value}>{visaType}</Text>

          <Text style={label}>Preferred country</Text>
          <Text style={value}>{country}</Text>

          <Text style={label}>Background / Message</Text>
          <Text style={messageBox}>{message}</Text>

          <Text style={label}>Submitted at</Text>
          <Text style={value}>{formattedDate}</Text>

          <Hr style={{ borderColor: "#e2e8f0", margin: "24px 0 0" }} />
          <Text style={footer}>
            This inquiry was sent from the Migrato Dream Jobs website. Reply directly to the sender using the email
            address above.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: InquiryNotificationEmail,
  subject: "New website inquiry — Migrato Dream Jobs",
  displayName: "Website Inquiry Notification",
  previewData: {
    name: "Ahmed Al-Otaibi",
    email: "ahmed@example.com",
    phone: "+966 55 123 4567",
    visaType: "Work visa & work permit",
    country: "Germany",
    message: "I have 5 years of experience as a welder and want to apply for a work visa.",
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry;

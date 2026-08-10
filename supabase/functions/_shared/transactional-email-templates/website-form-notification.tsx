import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Field {
  label?: string
  value?: string
}

interface Props {
  formLabel?: string
  formType?: string
  visitorEmail?: string
  company?: string
  sourcePage?: string
  submittedAt?: string
  message?: string
  fields?: Field[]
}

const FORM_LABELS: Record<string, string> = {
  security_assessment: 'Security Assessment Request',
  general_inquiry: 'General Inquiry',
  partner_request: 'Partner Request',
}

const Email = ({
  formLabel,
  formType = 'general_inquiry',
  visitorEmail,
  company,
  sourcePage,
  submittedAt,
  message,
  fields = [],
}: Props) => {
  const title = formLabel || FORM_LABELS[formType] || 'Website Form Submission'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>{`${title}${company ? ` — ${company}` : ''}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>Crabtree Solutions — Website Notification</Text>
          <Heading style={heading}>{title}</Heading>

          <Section style={callout}>
            <Text style={calloutLabel}>Reply directly to this visitor</Text>
            <Text style={calloutValue}>{visitorEmail || 'Not provided'}</Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row label="Form type" value={formType} />
            <Row label="Company" value={company} />
            <Row label="Source page" value={sourcePage} />
            <Row label="Submitted at" value={submittedAt} />
            {fields.map((f, i) => (
              <Row key={i} label={f.label} value={f.value} />
            ))}
          </Section>

          {message ? (
            <Section style={messageBox}>
              <Text style={rowLabel}>Message</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          ) : null}

          <Hr style={hr} />
          <Text style={footer}>
            Automated notification from the Crabtree Solutions website.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const Row = ({ label, value }: { label?: string; value?: string }) =>
  value ? (
    <Section style={rowWrap}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
  ) : null

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) => {
    const type = typeof data?.formType === 'string' ? data.formType : ''
    const label =
      (typeof data?.formLabel === 'string' && data.formLabel) ||
      FORM_LABELS[type] ||
      'Website Form Submission'
    const company = typeof data?.company === 'string' && data.company ? ` — ${data.company}` : ''
    return `[Website] ${label}${company}`
  },
  displayName: 'Website form notification',
  previewData: {
    formType: 'security_assessment',
    visitorEmail: 'visitor@example.com',
    company: 'Example Corp',
    sourcePage: 'https://www.crabtreesolutions.us/',
    submittedAt: '2026-08-10 16:00 UTC',
    message: 'We would like a security assessment for our 40-person office.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '24px', maxWidth: '600px' }
const eyebrow = {
  fontSize: '12px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: '#64748b',
  margin: '0 0 4px',
}
const heading = { fontSize: '22px', color: '#0f172a', margin: '0 0 16px' }
const callout = {
  backgroundColor: '#eff6ff',
  border: '1px solid #bfdbfe',
  borderRadius: '8px',
  padding: '14px 16px',
}
const calloutLabel = { fontSize: '12px', color: '#1e40af', margin: '0 0 4px' }
const calloutValue = { fontSize: '16px', fontWeight: 'bold', color: '#1e3a8a', margin: '0' }
const hr = { borderColor: '#e2e8f0', margin: '20px 0' }
const rowWrap = { marginBottom: '10px' }
const rowLabel = { fontSize: '12px', color: '#64748b', margin: '0 0 2px' }
const rowValue = { fontSize: '14px', color: '#0f172a', margin: '0' }
const messageBox = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  padding: '14px 16px',
  marginTop: '8px',
}
const messageText = { fontSize: '14px', color: '#0f172a', margin: '0', whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '12px', color: '#94a3b8', margin: '0' }

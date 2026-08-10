import type * as React from 'npm:react@18.3.1'
import { template as websiteFormNotification } from './website-form-notification.tsx'

export interface TemplateEntry {
  // deno-lint-ignore no-explicit-any
  component: React.ComponentType<any>
  // deno-lint-ignore no-explicit-any
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  // deno-lint-ignore no-explicit-any
  previewData?: Record<string, any>
  to?: string
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'website-form-notification': websiteFormNotification,
}

'use client'

import template from './form.json'
import { Form } from '@luna/react/client'

export function Content() {
  return (
    <div>
      <Form form={template.form} />
    </div>
  )
}

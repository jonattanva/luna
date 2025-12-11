'use client'

import config from '@/luna.config'
import { Button } from '@/components/ui/button'
import { Form } from '@luna/react/client'
import type { Sections, Source } from '@luna/react/client'

export function Content(props: {
  action?: (formData: FormData) => Promise<void> | void
  readOnly?: boolean
  sections: Sections
  source?: Source
  value?: Record<string, unknown>
}) {
  return (
    <div className="h-full w-full">
      <Form
        {...props}
        action={props.action}
        config={config}
        readOnly={props.readOnly}
      >
        {!props.readOnly && <Button type="submit">Submit</Button>}
      </Form>
    </div>
  )
}

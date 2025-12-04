'use client'

import define from '@/luna.config'
import form from '@/forms/issue/basic.json'
import { Form } from '@luna/react/client'

export function Content() {
  return (
    <div className="h-full w-full">
      <Form {...form} config={define} />
    </div>
  )
}

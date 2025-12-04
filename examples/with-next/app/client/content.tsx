'use client'

import config from '@/luna.config'
import form from '@/forms/payment/basic.json'
import { Button } from '@/components/ui/button'
import { Form } from '@luna/react/client'
import { createPayment } from './action'

export function Content() {
  return (
    <div className="h-full w-full">
      <Form {...form} config={config} formAction={createPayment}>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

'use client'

import define from '@/components/define'
import form from '../form.json'
import { Button } from '@/components/ui/button'
import { Form } from '@luna/react/client'
import { createPayment } from './action'

export function Content() {
  return (
    <div className="h-full w-full">
      <Form {...form} config={define} formAction={createPayment}>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

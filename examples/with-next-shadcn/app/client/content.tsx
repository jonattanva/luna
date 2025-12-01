'use client'

import define from '@/components/define'
import form from '../form.json'
import { Form } from '@luna/react/client'
import { Button } from '@/components/ui/button'

export function Content() {
  return (
    <div className="h-full w-full">
      <Form {...form} config={define}>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

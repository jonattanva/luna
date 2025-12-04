import define from '@/luna.config'
import form from '@/forms/user/basic.json'
import { Form } from '@luna/react/server'

export function Content() {
  return (
    <div className="h-full w-full">
      <Form {...form} config={define} />
    </div>
  )
}

import define from '@/components/define'
import form from '../form.json'
import { Form } from '@luna/react/server'

export function Content() {
  return (
    <div className="h-full w-full">
      <Form {...form} config={define} />
    </div>
  )
}

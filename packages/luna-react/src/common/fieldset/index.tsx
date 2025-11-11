import { Group } from '../group'
import { Legend } from './legend'

export function FieldSet(
  props: Readonly<{
    children?: React.ReactNode
    description?: string
    title?: string
  }>
) {
  if (!props.title && !props.description) {
    return <Group>{props.children}</Group>
  }

  return (
    <fieldset data-slot="set" className="flex flex-col gap-6">
      <Legend title={props.title} description={props.description} />
      <Group>{props.children}</Group>
    </fieldset>
  )
}

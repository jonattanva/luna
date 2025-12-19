import { Group } from './group'
import { Legend } from './legend'

export function FieldSet(
  props: Readonly<{
    children?: React.ReactNode
    compact?: boolean
    description?: string
    title?: string
  }>
) {
  if (!props.title && !props.description) {
    return <Group compact={props.compact}>{props.children}</Group>
  }

  return (
    <fieldset data-slot="field-set" className="flex flex-col gap-6">
      <Legend title={props.title} description={props.description} />
      <Group compact={props.compact}>{props.children}</Group>
    </fieldset>
  )
}

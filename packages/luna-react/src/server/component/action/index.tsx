import { parse } from '@/src/adapter'
import { getComponent } from '@/src/adapter/registry'
import type { Field as FieldType } from '@/src/type'

export function Action(props: Readonly<{ field: FieldType }>) {
  const Component = getComponent(props.field.type)
  if (!Component) {
    return null
  }
  return <Component {...parse(props)} />
}

import { Form as Component } from '@/src/component/form'
import { Input } from './input'
import type { Sections, Config, Source } from '@/src/type'

export function Form(
  props: Readonly<{
    children?: React.ReactNode
    config: Config
    readOnly?: boolean
    sections: Sections
    source?: Source
    value?: Record<string, unknown>
  }>
) {
  return (
    <Component
      control={props.children}
      readOnly={props.readOnly}
      sections={props.sections}
    >
      {(internal) => (
        <Input
          {...internal}
          config={props.config}
          source={props.source}
          value={props.value}
        />
      )}
    </Component>
  )
}

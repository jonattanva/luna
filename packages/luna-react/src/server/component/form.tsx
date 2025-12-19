import { Form as Component } from '../../component/form'
import { Input } from './input'
import { Slot } from '../../component/slot/slot'
import type { Sections, Config, Source } from '../../type'

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
      config={props.config}
      control={props.children}
      readOnly={props.readOnly}
      sections={props.sections}
    >
      {({ disabled, fields }) => (
        <Slot disabled={disabled} fields={fields}>
          {(internal) => (
            <Input
              {...internal}
              config={props.config}
              source={props.source}
              value={props.value}
            />
          )}
        </Slot>
      )}
    </Component>
  )
}

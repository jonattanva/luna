import { Form as Body } from '../../component/form'
import { Input } from './input'
import { Slot } from './slot'
import { useFormAction } from '../hook/useFormAction'
import { useSchema } from '../hook/useSchema'
import type { Sections, Config, Source } from '../../type'

export function Form(
  props: Readonly<{
    action?: (formData: FormData) => Promise<void> | void
    children?: React.ReactNode
    config: Config
    readOnly?: boolean
    sections: Sections
    source?: Source
    value?: Record<string, unknown>
  }>
) {
  const [schema, onMount, onUnmount] = useSchema()

  const [action] = useFormAction(schema, props.action)

  return (
    <Body
      action={action}
      config={props.config}
      control={props.children}
      noValidate
      readOnly={props.readOnly}
      sections={props.sections}
    >
      {({ disabled, fields }) => (
        <Slot disabled={disabled} fields={fields}>
          {(internal) => (
            <Input
              {...internal}
              config={props.config}
              onMount={onMount}
              onUnmount={onUnmount}
              source={props.source}
              value={props.value}
            />
          )}
        </Slot>
      )}
    </Body>
  )
}

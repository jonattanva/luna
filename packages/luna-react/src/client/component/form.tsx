import { Form as Body } from '@/src/component/form'
import { Input } from './input'
import { useSchema } from '../hook/useSchema'
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
  const [, onMount, onUnmount] = useSchema()

  return (
    <Body
      control={props.children}
      readOnly={props.readOnly}
      sections={props.sections}
      noValidate
    >
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
    </Body>
  )
}

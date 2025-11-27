import type {
  AriaAttributes,
  CommonProps,
  DataAttributes,
  Field,
} from '@/src/type'

export function Input(
  props: Readonly<{
    ariaAttributes?: AriaAttributes
    commonProps: CommonProps
    dataAttributes?: DataAttributes
    field: Field
  }>
) {
  console.log('Input props:', props)
  return <div>client input</div>
}

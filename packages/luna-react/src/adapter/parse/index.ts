import type {
  InputBase,
  InputButton,
  InputElement,
  InputNumber,
  InputText,
  InputTextArea,
} from '@/src/type'

function getData(props: Readonly<InputBase>) {
  const attrs: InputElement = {}
  if (props.advanced?.data) {
    for (const [key, value] of Object.entries(props.advanced.data)) {
      attrs[`data-${key}`] = value
    }
  }
  return attrs
}

function toBase(props: Readonly<InputBase>): InputElement {
  return {
    id: props.name,
    name: props.name,
    required: props.required,
    ...getData(props),
  }
}

export function toText(props: Readonly<InputText>) {
  return {
    ...toBase(props),
    autoComplete: props.advanced?.autocomplete,
    maxLength: props.advanced?.length?.max,
    minLength: props.advanced?.length?.min,
    type: 'text',
  }
}

export function toTextArea(props: Readonly<InputTextArea>) {
  return {
    ...toBase(props),
    maxLength: props.advanced?.length?.max,
    minLength: props.advanced?.length?.min,
  }
}

export function toNumber(props: Readonly<InputNumber>) {
  return {
    ...toBase(props),
    max: props.advanced?.length?.max,
    min: props.advanced?.length?.min,
    type: 'number',
  }
}

export function toButton(props: Readonly<InputButton>) {
  return {
    ...getData(props),
    children: props.label,
    type: 'button',
    variant: props.advanced?.variant ?? 'default',
  }
}

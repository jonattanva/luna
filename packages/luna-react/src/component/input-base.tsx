import { INPUT, INPUT_TEXT } from '../constant'
import { getAriaAttributes } from '../util/aria-attributes'
import { getDataAttributes } from '../util/data-attributes'
import {
  isInput,
  isNumber,
  isText,
  isTextArea,
  type Children,
  type Field,
} from '../type'

export function InputBase(
  props: Readonly<{
    children: Children
    field: Field
  }>
) {
  const ariaAttributes = getAriaAttributes(props.field)
  const dataAttributes = getDataAttributes(props.field)

  const commonProps = {
    disabled: props.field.readonly,
    id: props.field.name,
    name: props.field.name,
    placeholder: props.field.placeholder,
    required: props.field.required,
  }

  if (isInput(props.field) || isTextArea(props.field)) {
    const autoComplete = props.field.advanced?.autocomplete
    if (autoComplete) {
      Object.assign(commonProps, { autoComplete })
    }
  }

  if (isInput(props.field)) {
    const type = extract(props.field.type)
    Object.assign(commonProps, { type })

    const copy = {
      ...props.field,
      type,
    }

    if (isText(copy) || isTextArea(copy)) {
      const length = props.field.advanced?.length
      if (length) {
        if (length.max !== undefined) {
          Object.assign(commonProps, { maxLength: length.max })
        }

        if (length.min !== undefined) {
          Object.assign(commonProps, { minLength: length.min })
        }
      }
    }

    if (isNumber(copy)) {
      const length = props.field.advanced?.length
      if (length) {
        if (length.max !== undefined) {
          Object.assign(commonProps, { max: length.max })
        }

        if (length.min !== undefined) {
          Object.assign(commonProps, { min: length.min })
        }
      }
    }
  }

  return props.children({
    ariaAttributes,
    commonProps,
    dataAttributes,
    field: props.field,
  })
}

function extract(value: string = INPUT_TEXT): string {
  const result = value.match(/[^/]+$/)
  if (result) {
    const [type] = result
    if (type !== INPUT) {
      return type.trim().toLowerCase()
    }
  }
  return INPUT_TEXT
}

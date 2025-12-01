import { getAriaAttributes } from '../util/aria-attributes'
import { getDataAttributes } from '../util/data-attributes'

import {
  ARIA_ERROR_MESSAGE,
  ARIA_INVALID,
  INPUT,
  TYPE_EMAIL,
  TYPE_PASSWORD,
  TYPE_TEXT,
} from '../constant'

import {
  getConvert,
  getCurrentYear,
  getOptionMonth,
  getOptionYear,
} from '../util/date'

import {
  isInput,
  isNumber,
  isSelect,
  isSelectMonth,
  isSelectYear,
  isTextArea,
  type Children,
  type CommonProps,
  type Field,
  type Input,
  type Select,
} from '../type'

const now = getCurrentYear()

export function InputBase(
  props: Readonly<{
    children: Children
    defaultValue?: string | number
    errors?: string[]
    field: Field
    htmlValidation?: boolean
  }>
) {
  const { htmlValidation = true } = props

  const ariaAttributes = getAriaAttributes(props.field)
  if (props.errors && props.errors.length > 0) {
    ariaAttributes[ARIA_INVALID] = 'true'
    ariaAttributes[ARIA_ERROR_MESSAGE] = `${props.field.name}-error`
  }

  const dataAttributes = getDataAttributes(props.field)

  const commonProps = {
    disabled: props.field.readonly,
    id: props.field.name,
    name: props.field.name,
    placeholder: props.field.placeholder,
  }

  if (htmlValidation) {
    Object.assign(commonProps, {
      required: props.field.required,
    })
  }

  if (isInput(props.field)) {
    defineInput(props.field, commonProps)
  }

  if (isSelect(props.field)) {
    defineOption(props.field, commonProps)
  }

  if (isTextArea(props.field)) {
    defineAutoComplete(props.field, commonProps)
    defineMinMaxLength(props.field, commonProps)
  }

  return props.children({
    ariaAttributes,
    commonProps,
    dataAttributes,
    defaultValue: props.defaultValue,
    field: props.field,
  })
}

function defineInput(input: Input, common: CommonProps) {
  defineAutoComplete(input, common)

  const type = extract(input.type)
  Object.assign(common, { type })

  const copy = {
    ...input,
    type,
  }

  if (isText(copy)) {
    defineMinMaxLength(copy, common)
  }

  if (isNumber(copy)) {
    defineMinMax(copy, common)
  }
}

function defineAutoComplete(input: Input, common: CommonProps) {
  const autoComplete = input.advanced?.autocomplete
  if (autoComplete) {
    Object.assign(common, { autoComplete })
  }
}

function defineMinMaxLength(input: Input, common: CommonProps) {
  const length = input.advanced?.length
  if (length) {
    if (length.min !== undefined) {
      Object.assign(common, { minLength: length.min })
    }

    if (length.max !== undefined) {
      Object.assign(common, { maxLength: length.max })
    }
  }
}

function defineMinMax(input: Input, common: CommonProps) {
  const length = input.advanced?.length
  if (length) {
    if (length.min !== undefined) {
      Object.assign(common, { min: length.min })
    }

    if (length.max !== undefined) {
      Object.assign(common, { max: length.max })
    }
  }
}

function defineOption(select: Select, common: CommonProps) {
  if (isSelectMonth(select)) {
    Object.assign(common, {
      options: getOptionMonth(select.placeholder),
    })
  } else if (isSelectYear(select)) {
    const min = select.advanced?.length?.min ?? now
    const max = select.advanced?.length?.max ?? now + 5

    Object.assign(common, {
      options: getOptionYear(
        select.placeholder,
        getConvert(min, now),
        getConvert(max, now)
      ),
    })
  }
}

function extract(value: string = TYPE_TEXT): string {
  const result = value.match(/[^/]+$/)
  if (result) {
    const [type] = result
    if (type !== INPUT) {
      return type.trim().toLowerCase()
    }
  }
  return TYPE_TEXT
}

function isText(field: Field): field is Input {
  return (
    field.type === TYPE_TEXT ||
    field.type === TYPE_EMAIL ||
    field.type === TYPE_PASSWORD
  )
}

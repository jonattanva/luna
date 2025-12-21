import {
  getConvert,
  getCurrentYear,
  getMonth,
  getYear,
  isSelect,
  isSelectMonth,
  isSelectYear,
  type Field,
  type Select,
} from '@luna-form/core'

const now = getCurrentYear()

export function buildOptionSelect(field: Field) {
  if (isSelect(field)) {
    return defineOption(field)
  }
}

function defineOption(select: Select) {
  if (isSelectMonth(select)) {
    return getMonth()
  }

  if (isSelectYear(select)) {
    const min = select.advanced?.length?.min ?? now
    const max = select.advanced?.length?.max ?? now + 5

    return getYear(getConvert(min, now), getConvert(max, now))
  }
}

import { isSelect, isSelectMonth, isSelectYear } from '@/src/input'
import { getConvert, getCurrentYear, getMonth, getYear } from '@/src/util/date'
import type { Field, Select } from '@/src/type'

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

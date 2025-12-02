import { isSelect, isSelectMonth, isSelectYear } from '@/src/input'
import {
  getConvert,
  getCurrentYear,
  getOptionMonth,
  getOptionYear,
} from '@/src/util/date'
import type { Field, Select } from '@/src/type'

const now = getCurrentYear()

export function buildOptionSelect(field: Field) {
  if (isSelect(field)) {
    return defineOption(field)
  }
}

function defineOption(select: Select) {
  if (isSelectMonth(select)) {
    return getOptionMonth(select.placeholder)
  }

  if (isSelectYear(select)) {
    const min = select.advanced?.length?.min ?? now
    const max = select.advanced?.length?.max ?? now + 5

    return getOptionYear(
      select.placeholder,
      getConvert(min, now),
      getConvert(max, now)
    )
  }
}

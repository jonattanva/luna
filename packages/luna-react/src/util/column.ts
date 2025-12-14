const cols: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
}

const span: Record<number, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
}

export function getColumn(value?: number, defaultCols = 2) {
  return cols[value && value in cols ? value : defaultCols]
}

export function getSpan(value?: number) {
  if (value && value in span) {
    return span[value]
  }
}

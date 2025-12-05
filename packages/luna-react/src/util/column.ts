const cols: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
}

export function getColumn(value?: number, defaultCols = 2) {
  return cols[value && value in cols ? value : defaultCols]
}

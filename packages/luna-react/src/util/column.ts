const cols: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
}

export function getColumn(value?: number, defaultCols = 2) {
  return cols[value && value in cols ? value : defaultCols]
}

const cols: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
}

export function getColumn(value?: number, maxValue: number = 2) {
  return cols[value && value in cols ? value : maxValue]
}

export function getMonth() {
  return Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString().padStart(2, '0'),
    label: new Date(0, i).toLocaleString('default', {
      month: 'long',
    }),
  }))
}

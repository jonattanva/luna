export function getYear(
  min: number,
  max: number
): Array<{ value: string; label: string }> {
  if (max >= min) {
    return Array.from({ length: max - min + 1 }, (_, i) => {
      const year = min + i
      return {
        value: year.toString(),
        label: year.toString(),
      }
    })
  }
  return []
}

// Cannot access current time from a Client Component without a fallback UI defined
// https://nextjs.org/docs/messages/next-prerender-current-time-client
export function getConvert(value: string | number, current?: number): number {
  if (typeof value === 'number') {
    return value
  }

  const now = current ?? getCurrentYear()
  const trimmed = value.trim().toLowerCase()

  if (trimmed.startsWith('current')) {
    const parts = trimmed.split('+')
    if (parts.length === 2) {
      const offset = parseInt(parts[1], 10)
      if (!isNaN(offset)) {
        return now + offset
      }
    }
    return now
  }

  const parsed = parseInt(trimmed, 10)
  if (!isNaN(parsed)) {
    return parsed
  }

  return now
}

export function getCurrentYear() {
  return new Date().getFullYear()
}

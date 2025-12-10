export async function GET() {
  const data = await cities()
  return Response.json({
    timestamp: Date.now(),
    body: data,
  })
}

async function cities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 1, label: 'New York' },
        { value: 2, label: 'Los Angeles' },
        { value: 3, label: 'Chicago' },
        { value: 4, label: 'Houston' },
        { value: 5, label: 'Phoenix' },
      ])
    }, 1000)
  })
}

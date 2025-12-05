export async function GET() {
  const data = await countries()
  return Response.json({
    timestamp: Date.now(),
    body: data,
  })
}

async function countries() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: 'Brazil', value: 5 },
        { label: 'Canada', value: 3 },
        { label: 'Colombia', value: 1 },
        { label: 'Mexico', value: 4 },
        { label: 'United States', value: 2 },
      ])
    }, 1000)
  })
}

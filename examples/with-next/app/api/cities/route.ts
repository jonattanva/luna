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
        { id: 1, name: 'New York' },
        { id: 2, name: 'Los Angeles' },
        { id: 3, name: 'Chicago' },
        { id: 4, name: 'Houston' },
        { id: 5, name: 'Phoenix' },
      ])
    }, 1000)
  })
}

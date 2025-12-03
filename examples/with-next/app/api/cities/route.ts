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
        { label: 'Barranquilla', value: 4 },
        { label: 'Bogotá', value: 2 },
        { label: 'Cali', value: 3 },
        { label: 'Cartagena', value: 5 },
        { label: 'Medellín', value: 1 },
      ])
    }, 1000)
  })
}

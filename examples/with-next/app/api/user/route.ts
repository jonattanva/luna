export async function GET() {
  const data = await user()
  return Response.json({
    timestamp: Date.now(),
    body: data,
  })
}

async function user() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        'first-name': 'John',
        'middle-name': 'Michael',
        'last-name': 'Doe',
        birthdate: '1990-01-15',
        'national-id': '123456789',
        gender: {
          value: 'male',
          label: 'Male',
        },
        'marital-status': {
          value: 'single',
          label: 'Single',
        },
        occupation: null,
        email: 'john.doe@example.com',
        phone: '+1 555 123 4567',
        'address-line-1': '123 Main St',
        'address-line-2': 'Apt 4B',
        city: 'Springfield',
        state: 'IL',
        'postal-code': '62704',
        country: {
          value: 'US',
          label: 'United States',
        },
      })
    }, 500)
  })
}

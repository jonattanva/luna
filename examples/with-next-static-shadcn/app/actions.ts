'use server'

export async function createUser(initialState: unknown, formData: FormData) {
  console.log('Creating user with state:', initialState)
  console.log('Form data received:', Array.from(formData.entries()))
}

import { Content } from './content'
import form from '@/forms/payment.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client - Payment form - Luna React',
}

export default function Page() {
  async function createPayment(formData: FormData) {
    'use server'

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Payment created', Object.fromEntries(formData))
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-stone-950">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black">
        <div className="w-full max-w-md">
          <Content {...form} action={createPayment} />
        </div>
      </main>
    </div>
  )
}

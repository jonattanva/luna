import define from '@/luna.config'
import form from '@/forms/user.json'
import { Form, Fallback } from '@luna/react/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Server - Detail form - Luna React',
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-stone-950">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black">
        <div className="w-full max-w-md">
          <Fallback config={define} sections={form.sections}>
            <Content />
          </Fallback>
        </div>
      </main>
    </div>
  )
}

async function Content() {
  const data = await getUser()

  return (
    <div className="h-full w-full">
      <Form {...form} config={define} readOnly value={data} />
    </div>
  )
}

async function getUser() {
  const data = await fetch('http://localhost:3001/api/user')
  const response = await data.json()

  return response.body
}

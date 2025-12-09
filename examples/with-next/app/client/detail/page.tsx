import config from '@/luna.config'
import form from '@/forms/user.json'
import { Content } from '../content'
import { Fallback } from '@luna/react/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client - Detail form - Luna React',
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-stone-950">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black">
        <div className="w-full max-w-md">
          <Fallback config={config} sections={form.sections}>
            <Body />
          </Fallback>
        </div>
      </main>
    </div>
  )
}

async function Body() {
  const data = await getUser()

  return (
    <div className="h-full w-full">
      <Content {...form} value={data} readOnly />
    </div>
  )
}

async function getUser() {
  const data = await fetch('http://localhost:3001/api/user')
  const response = await data.json()

  return response.body
}

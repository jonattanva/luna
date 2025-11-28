import { Metadata } from 'next'
import { Content } from './content'
import { ModeToggle } from '../theme'

export const metadata: Metadata = {
  title: 'Server - Luna React',
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black">
        <div className="w-full max-w-md">
          <Content />
        </div>
      </main>
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>
    </div>
  )
}

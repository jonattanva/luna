import { Metadata } from 'next'
import { ModeToggle } from './theme'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luna React',
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="text-4xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            Welcome to Luna React!
          </Link>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            This is a starter template for building React applications with Luna
          </p>

          <ul className="mt-8 list-disc">
            <li>
              <Link
                href="/client"
                className="text-violet-800 hover:underline dark:text-violet-500"
              >
                Client components
              </Link>
            </li>
            <li>
              <Link
                href="/server"
                className="text-violet-800 hover:underline dark:text-violet-500"
              >
                Server components
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>
    </div>
  )
}

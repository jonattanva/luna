import { Metadata } from 'next'
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
            Practical examples of how to generate and manage forms with Luna:
            schema definition, validations, data handling, and submit actions
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="flex items-center gap-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="inline-flex items-center rounded-md bg-violet-100 px-2 py-1 text-xs font-medium text-violet-800 ring-1 ring-violet-200/60 transition-colors ring-inset hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:ring-violet-800/50 dark:hover:bg-violet-900/50">
                  Client component - vanilla
                </span>
              </h2>
              <ul className="mt-2 list-disc pl-5">
                <li>
                  <Link
                    href="/client/vanilla"
                    className="text-violet-700 underline-offset-4 transition-colors hover:text-violet-800 hover:underline focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:outline-none dark:text-violet-400 dark:hover:text-violet-300 dark:focus-visible:ring-violet-700"
                  >
                    Payment form
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="inline-flex items-center rounded-md bg-violet-100 px-2 py-1 text-xs font-medium text-violet-800 ring-1 ring-violet-200/60 transition-colors ring-inset hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:ring-violet-800/50 dark:hover:bg-violet-900/50">
                  Client component - shadcn
                </span>
              </h2>
              <ul className="mt-2 list-disc pl-5">
                <li>
                  <Link
                    href="/client"
                    className="text-violet-700 underline-offset-4 transition-colors hover:text-violet-800 hover:underline focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:outline-none dark:text-violet-400 dark:hover:text-violet-300 dark:focus-visible:ring-violet-700"
                  >
                    Payment form
                  </Link>
                </li>
                <li>
                  <Link
                    href="/client/detail"
                    className="text-violet-700 underline-offset-4 transition-colors hover:text-violet-800 hover:underline focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:outline-none dark:text-violet-400 dark:hover:text-violet-300 dark:focus-visible:ring-violet-700"
                  >
                    Detail page
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="inline-flex items-center rounded-md bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200/60 transition-colors ring-inset hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800/50 dark:hover:bg-emerald-900/50">
                  Server component - shadcn
                </span>
              </h2>
              <ul className="mt-2 list-disc pl-5">
                <li>
                  <Link
                    href="/server"
                    className="text-emerald-700 underline-offset-4 transition-colors hover:text-emerald-800 hover:underline focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:outline-none dark:text-emerald-400 dark:hover:text-emerald-300 dark:focus-visible:ring-emerald-700"
                  >
                    Payment form
                  </Link>
                </li>
                <li>
                  <Link
                    href="/server/detail"
                    className="text-emerald-700 underline-offset-4 transition-colors hover:text-emerald-800 hover:underline focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:outline-none dark:text-emerald-400 dark:hover:text-emerald-300 dark:focus-visible:ring-emerald-700"
                  >
                    Detail page
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

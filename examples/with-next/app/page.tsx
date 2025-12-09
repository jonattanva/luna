import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luna React',
}

const options = [
  {
    href: '/client/detail',
    title: 'User Information',
    description:
      'A comprehensive form displaying basic user information including personal details, contact information, and address.',
    type: 'Client component',
    badges: ['shadcn/ui'],
  },
  {
    href: '/client',
    title: 'Payment Form',
    description:
      'A detailed payment form capturing credit card information, billing address, and payment options.',
    type: 'Client component',
    badges: ['shadcn/ui'],
  },
  {
    href: '/server/detail',
    title: 'User Information',
    description:
      'A comprehensive form displaying basic user information including personal details, contact information, and address.',
    type: 'Server component',
    badges: ['shadcn/ui'],
  },
]

const badgeTheme: Record<string, string> = {
  'Server component':
    'bg-purple-100 text-purple-800 ring-purple-200/60 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:ring-purple-800/50 dark:hover:bg-purple-900/50',
  'Client component':
    'bg-green-100 text-green-800 ring-green-200/60 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:ring-green-800/50 dark:hover:bg-green-900/50',
}

const generalTheme: Record<string, string> = {
  'Server component':
    'border-purple-400 hover:border-purple-200 dark:border-purple-600 dark:hover:border-purple-800',
  'Client component':
    'border-green-400 hover:border-green-200 dark:border-green-600 dark:hover:border-green-800',
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-stone-950">
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
            {options.map((option) => (
              <Link
                className={cn(
                  'group block rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-900',
                  generalTheme[option.type]
                )}
                href={option.href}
                key={option.href}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {option.title}
                    </h2>
                  </div>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {option.description}
                </p>
                <div className="mt-4 flex items-center">
                  <span
                    className={cn(
                      'mr-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                      badgeTheme[option.type]
                    )}
                  >
                    {option.type}
                  </span>
                  {option.badges.map((badge) => (
                    <span
                      key={badge}
                      className={cn(
                        'mr-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                        badgeTheme[option.type]
                      )}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline dark:text-blue-400">
                  Explore example &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

import '@/components/registry'

import { Button } from '@/components/ui/button'
import { Form } from '@luna/react/server'
import { FormSelector } from './form-selector'
import { Suspense } from 'react'

async function getForm(props: {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}) {
  try {
    const searchParams = await props.searchParams
    const formID = searchParams?.form

    if (!formID) {
      throw new Error('Form ID is required')
    }

    const form = await import(`@/form/${formID}.json`)
    return form.default
  } catch {
    return null
  }
}

async function Content(props: {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}) {
  const template = await getForm(props)

  if (!template) {
    return (
      <div className="flex items-center justify-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-zinc-100 p-4 dark:bg-zinc-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-zinc-400 dark:text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Form not found
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Please select a form from the navigation list to get started
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Form form={template.form}>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

async function Navigation(props: {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}) {
  const searchParams = await props.searchParams
  const formID = searchParams?.form ?? ''

  return <FormSelector defaultValue={formID} />
}

export default function Page(props: {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black">
        <div className="w-full max-w-md">
          <Suspense>
            <Content searchParams={props.searchParams} />
          </Suspense>
        </div>
      </main>
      <Suspense>
        <Navigation searchParams={props.searchParams} />
      </Suspense>
    </div>
  )
}

'use client';

import '@/components/registry'

import basic from '@/form/basic.json'
import { Form } from '@luna/react/server'
import { createUser } from './actions'
import { useActionState } from 'react'

export default function Page() {

  const [, formAction, pending] = useActionState(createUser, null)

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <div className='w-full max-w-md'>
          <Form action={formAction} form={basic.form} control={basic.control} />
        </div>
      </main>
    </div>
  )
}

import basic from '@/form/basic.json'
import { Form } from '@luna/react/server'

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <Form form={basic.form} />
      </main>
    </div>
  )
}

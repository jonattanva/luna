'use client'

import config from '@/luna.config'
import { Form } from 'react-luna-form'
import { codeAtom } from '@/lib/store'
import { convertCodeToForm } from '@/lib/convert-code'
import { useAtomValue } from 'jotai'
import { Layout } from 'lucide-react'

export function FormPreview() {
  const code = useAtomValue(codeAtom)
  const form = convertCodeToForm(code)

  const isEmpty = !code || Object.keys(form).length === 0

  if (isEmpty) {
    return (
      <div className="flex h-full flex-1 flex-col items-center justify-center p-8 text-center">
        <div className="bg-muted/50 mb-4 flex size-16 items-center justify-center rounded-2xl">
          <Layout className="text-muted-foreground size-8" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">No form generated yet</h3>
        <p className="text-muted-foreground max-w-xs text-sm">
          Use the AI Assistant on the left to describe the form you want to
          build.
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-1 flex-col items-stretch">
      <div className="flex min-h-full items-center justify-center">
        <div className="flex min-h-full w-full max-w-3xl flex-col items-center justify-between">
          <div className="w-full max-w-md pt-12">
            <Form {...form} config={config} />
          </div>
        </div>
      </div>
    </div>
  )
}

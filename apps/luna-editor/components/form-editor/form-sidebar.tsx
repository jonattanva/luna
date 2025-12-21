'use client'

import { Panel } from '../form-ai/panel'
import { Sparkles } from 'lucide-react'

export function FormSidebar() {
  return (
    <div className="hidden h-full max-w-lg flex-1 overflow-x-auto border-r lg:flex">
      <div className="relative flex h-full w-full flex-col items-stretch">
        <div className="flex flex-1 flex-col overflow-hidden outline-none">
          <div className="flex shrink-0 items-center justify-between border-b px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 flex size-6 items-center justify-center rounded-md">
                <Sparkles className="text-primary size-3.5" />
              </div>
              <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                AI Assistant
              </span>
            </div>
          </div>
          <Panel />
        </div>
      </div>
    </div>
  )
}

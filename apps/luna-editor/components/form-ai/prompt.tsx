'use client'

import { ArrowUpIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from '../ui/input-group'
import { Provider } from './provider'

export function Prompt() {
  return (
    <div className="relative flex flex-col items-center gap-3 p-8 pt-0">
      <form className="w-full rounded-md border bg-black transition">
        <InputGroup className="border-none shadow-none dark:bg-transparent">
          <InputGroupTextarea
            placeholder="Describe your form with natural language..."
            className="min-h-25 resize-none"
          />
          <InputGroupAddon align="block-end">
            <Provider />
            <Separator orientation="vertical" className="h-4!" />
            <InputGroupButton
              className="cursor-pointer rounded-md"
              size="icon-sm"
              variant="default"
            >
              <ArrowUpIcon />
              <span className="sr-only">Send</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </form>
      <p className="text-muted-foreground text-center text-xs">
        AI can make mistakes. Check important info.
      </p>
    </div>
  )
}

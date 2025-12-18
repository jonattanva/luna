'use client'

import { Button } from '../button'
import { CopyIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import { codeAtom } from '@/lib/store'
import { useAtomValue } from 'jotai'
import { useState } from 'react'

export function CopyToClipboard() {
  const code = useAtomValue(codeAtom)
  const [copied, setCopied] = useState(false)

  const handleCopied = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopy = async () => {
    try {
      handleCopied()

      await navigator.clipboard.writeText(code)
    } catch (error) {
      console.error('Failed to copy text: ', error)
    }
  }

  return (
    <Tooltip open={copied} delayDuration={2000}>
      <TooltipTrigger asChild>
        <Button size="icon-sm" variant="ghost" onClick={handleCopy}>
          <CopyIcon />
          <span className="sr-only">Copy to clipboard</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Copied!</TooltipContent>
    </Tooltip>
  )
}

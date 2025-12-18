'use client'

import { Button } from '../button'
import { XIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'

export function Close(
  props: Readonly<{
    onClick?: () => void
  }>
) {
  return (
    <Tooltip delayDuration={2000}>
      <TooltipTrigger asChild>
        <Button size="icon-sm" variant="ghost" onClick={props.onClick}>
          <XIcon />
          <span className="sr-only">Close</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Close!</TooltipContent>
    </Tooltip>
  )
}

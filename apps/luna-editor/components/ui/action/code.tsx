import { CodeXmlIcon } from 'lucide-react'
import { Button } from '../button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'

export function Code(
  props: Readonly<{
    onClick?: () => void
  }>
) {
  return (
    <Tooltip delayDuration={2000}>
      <TooltipTrigger asChild>
        <Button size="icon-sm" variant="ghost" onClick={props.onClick}>
          <CodeXmlIcon />
          <span className="sr-only">View code</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>View code</TooltipContent>
    </Tooltip>
  )
}

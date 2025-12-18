import { Code } from './action/code'
import { IAChat } from './ia-chat'
import { Sparkles } from 'lucide-react'

export function IAPanel(
  props: Readonly<{
    goToCode: () => void
  }>
) {
  return (
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
        <div className="flex gap-3">
          <Code onClick={props.goToCode} />
        </div>
      </div>
      <IAChat />
    </div>
  )
}

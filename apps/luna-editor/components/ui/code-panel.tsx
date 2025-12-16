import { CodeEditor } from './code-editor'
import { CopyToClipboard } from './action/copy'

export function CodePanel() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden outline-none">
      <div className="bg-muted/30 flex shrink-0 items-center justify-end border-b px-3 py-2">
        <CopyToClipboard />
      </div>
      <CodeEditor />
    </div>
  )
}

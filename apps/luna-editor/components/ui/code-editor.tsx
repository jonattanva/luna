'use client'

import MonacoEditor, { type OnMount } from '@monaco-editor/react'
import { lunaDarkTheme } from '@/lib/monaco-theme'
import { useTheme } from 'next-themes'
import { codeAtom } from '@/lib/code-store'
import { useAtom } from 'jotai'

export function CodeEditor() {
  const { theme } = useTheme()

  const [value, setValue] = useAtom(codeAtom)

  const handleEditorMount: OnMount = (_, monaco) => {
    monaco.editor.defineTheme('luna-dark', lunaDarkTheme)
    monaco.editor.setTheme(theme === 'dark' ? 'luna-dark' : 'light')
  }

  const handleValueChange = (newValue: string | undefined) => {
    setValue(newValue ?? '')
  }

  return (
    <div className="flex-1 overflow-hidden">
      <MonacoEditor
        height="100%"
        language="json"
        onChange={handleValueChange}
        onMount={handleEditorMount}
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        options={{
          autoClosingBrackets: 'always',
          autoClosingQuotes: 'always',
          automaticLayout: true,
          fontSize: 14,
          formatOnPaste: true,
          formatOnType: true,
          lineNumbers: 'on',
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          tabSize: 2,
          quickSuggestions: {
            comments: false,
            other: true,
            strings: true,
          },
        }}
        value={value}
      />
    </div>
  )
}

'use client'

import MonacoEditor, { type Monaco, type OnMount } from '@monaco-editor/react'
import schema from '@/public/schema.json'
import { codeAtom } from '@/lib/store'
import { lunaDarkTheme } from '@/lib/monaco-theme'
import { useAtom } from 'jotai'
import { useRef } from 'react'
import { useTheme } from 'next-themes'

export function CodeEditor(
  props: Readonly<{
    timeout?: number
  }>
) {
  const { resolvedTheme } = useTheme()
  const [value, setValue] = useAtom(codeAtom)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleLocalSchema = (monaco: Monaco) => {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: 'https://luna-form-editor.vercel.app/schema.json',
          fileMatch: ['*'],
          schema: schema,
        },
      ],
    })
  }

  const handleEditorMount: OnMount = (_, monaco) => {
    monaco.editor.defineTheme('luna-dark', lunaDarkTheme)
    monaco.editor.setTheme(resolvedTheme === 'dark' ? 'luna-dark' : 'light')

    handleLocalSchema(monaco)
  }

  const handleValueChange = (newValue: string | undefined) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setValue(newValue ?? '')
    }, props.timeout ?? 500)
  }

  return (
    <div className="flex-1 overflow-hidden">
      <MonacoEditor
        height="100%"
        language="json"
        onChange={handleValueChange}
        onMount={handleEditorMount}
        theme={resolvedTheme === 'dark' ? 'luna-dark' : 'light'}
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
            strings: false,
          },
          suggest: {
            snippetsPreventQuickSuggestions: false,
            showSnippets: false,
            showWords: false,
          },
        }}
        value={value}
      />
    </div>
  )
}

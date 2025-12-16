export const lunaDarkTheme = {
  base: 'vs-dark' as const,
  inherit: true,
  rules: [
    // Default foreground
    { token: '', foreground: 'ededed' },

    // JSON-specific tokens
    { token: 'boolean.json', foreground: '1bff8d' },
    { token: 'keyword.json', foreground: 'ff1bff' },
    { token: 'number.json', foreground: '1bff8d' },
    { token: 'string.key.json', foreground: 'ff1bff' },
    { token: 'string.value.json', foreground: '1bff8d' },
  ],
  colors: {
    'editor.background': '#000000',
    'editor.foreground': '#ededed',
    'editor.inactiveSelectionBackground': '#1A1A1A',
    'editor.lineHighlightBackground': '#0A0A0A',
    'editor.selectionBackground': '#590059',
    'editorBracketMatch.background': '#0A0A0A',
    'editorBracketMatch.border': '#444444',
    'editorCursor.foreground': '#FFFFFF',
    'editorIndentGuide.activeBackground': '#333333',
    'editorIndentGuide.background': '#1A1A1A',
    'editorLineNumber.activeForeground': '#888888',
    'editorLineNumber.foreground': '#444444',
    'editorWhitespace.foreground': '#333333',
  },
}

'use client'

import { CodePanel } from './code-panel'
import { IAPanel } from './ia-panel'
import { useState } from 'react'

export function Panel() {
  const [viewCode, setViewCode] = useState(false)

  const handleGoToCode = () => {
    setViewCode(true)
  }

  const handleCloseCode = () => {
    setViewCode(false)
  }

  if (!viewCode) {
    return <IAPanel goToCode={handleGoToCode} />
  }

  return <CodePanel onClose={handleCloseCode} />
}

'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './dialog'
import config from '@/luna.config'
import form from './form/provider.json'
import { Button } from './button'
import { Form } from 'react-luna-form'
import { InputGroupButton } from './input-group'
import { TriangleAlert } from 'lucide-react'
import { iaProviderAtom } from '@/lib/store'
import { useAtom } from 'jotai'
import { useState } from 'react'

export function IAProvider() {
  const [provider] = useAtom(iaProviderAtom)
  const [showDialog, setShowDialog] = useState(false)

  const handleOpenIAProvider = () => {
    setShowDialog(true)
  }

  const handleFormSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setShowDialog(false)
  }

  return (
    <>
      <InputGroupButton
        className="data-[provider=on]:text-foreground hover:bg-accent/50 data-[provider=off]:text-amber-500"
        data-provider={provider ? 'on' : 'off'}
        onClick={handleOpenIAProvider}
        size="sm"
        variant="ghost"
      >
        <TriangleAlert /> Add IA provider
      </InputGroupButton>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>AI Provider Configuration</DialogTitle>
            <DialogDescription>
              Enter your API key to enable AI-powered features. For your
              security, this key will be stored locally in your browser.
            </DialogDescription>
          </DialogHeader>
          <Form
            {...form}
            action={handleFormSubmit}
            config={{ ...config, style: { compact: true } }}
          >
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}

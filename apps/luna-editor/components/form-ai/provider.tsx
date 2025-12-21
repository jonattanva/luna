import config from '@/luna.config'
import form from '@/forms/provider.json'
import { Button } from '../ui/button'
import { Form } from 'react-luna-form'
import { aiProviderAtom } from '@/lib/store'
import { useAtom } from 'jotai'
import { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { InputGroupButton } from '../ui/input-group'
import { ProviderStatus } from './provider-status'

export function Provider() {
  const [openDialog, setOpenDialog] = useState(false)
  const [provider, setProvider] = useAtom(aiProviderAtom)

  const handleOpenIAProvider = () => {
    setOpenDialog(true)
  }

  const handleFormSubmit = (formData: FormData) => {
    const apiKey = formData.get('key')
    const provider = formData.get('provider')

    setOpenDialog(false)
    setProvider({
      key: `${apiKey}`,
      provider: `${provider}`,
    })
  }

  return (
    <>
      <InputGroupButton
        className="data-[provider=on]:text-foreground hover:bg-accent/50 data-[provider=off]:text-amber-500"
        data-provider={provider === undefined || provider ? 'on' : 'off'}
        onClick={handleOpenIAProvider}
        size="sm"
        variant="ghost"
      >
        {provider !== undefined && <ProviderStatus provider={provider} />}
      </InputGroupButton>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:w-106.25">
          <DialogHeader>
            <DialogTitle>AI Provider configuration</DialogTitle>
            <DialogDescription>
              Enter your API key to enable AI-powered features. For your
              security, this key will be stored locally in your browser.
            </DialogDescription>
          </DialogHeader>
          <Form
            {...form}
            action={handleFormSubmit}
            config={{
              ...config,
              style: { compact: true },
              validation: { blur: false },
            }}
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

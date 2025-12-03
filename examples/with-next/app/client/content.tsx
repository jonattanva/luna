'use client'

import define from '@/components/define'
import form from '../form.json'
import { Button } from '@/components/ui/button'
import { Form } from '@luna/react/client'
import { createPayment } from './action'
import { useTranslations } from 'next-intl'

export function Content() {
  const t = useTranslations('global')
  return (
    <div className="h-full w-full">
      <Form {...form} config={define} formAction={createPayment}>
        <Button type="submit">{t('submit')}</Button>
      </Form>
    </div>
  )
}

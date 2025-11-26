'use client'

import { Select } from '@/components/ui/select'
import { useRouter } from 'next/navigation'

export function FormSelector(props: { defaultValue?: string | string[] }) {
  const router = useRouter()

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    router.push('?form=' + event.target.value)
  }

  return (
    <div className="absolute top-4 right-4 z-50">
      <Select
        defaultValue={props.defaultValue}
        options={[
          { value: '', label: 'Select a form' },
          { value: 'Payment Method', label: 'Payment Method' },
          { value: 'Event Registration', label: 'Event Registration' },
          { value: 'Task Assignment', label: 'Task Assignment' },
        ]}
        onChange={onChange}
      />
    </div>
  )
}

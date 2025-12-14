import { DATA_INVALID } from '@/src/util/constant'
import { InputBase } from './input/input-base'
import { Label } from './label'
import { getSpan } from '../util/column'
import { twMerge } from 'tailwind-merge'
import type { Children, Field } from '@/src/type'

export type FieldProps = Readonly<{
  children: Children
  disabled?: boolean
  errors?: Record<string, string[]>
  field: Field
  withinColumn?: boolean
}>

export function Field(props: FieldProps) {
  const errors = props.field.name ? props.errors?.[props.field.name] : undefined

  return (
    <div
      {...(errors && { [DATA_INVALID]: 'true' })}
      data-slot="field"
      className={twMerge(
        'flex w-full flex-col gap-3 *:w-full data-[invalid=true]:text-red-500',
        getSpan(props.field.advanced?.cols)
      )}
    >
      {props.field.name && props.field.label && (
        <Label name={props.field.name} required={props.field.required}>
          {props.field.label}
        </Label>
      )}
      <InputBase
        disabled={props.disabled}
        errors={errors}
        field={props.field}
        withinColumn={props.withinColumn}
      >
        {props.children}
      </InputBase>
    </div>
  )
}

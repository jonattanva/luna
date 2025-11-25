import { Action } from '@/src/common/action'
import { FieldSet } from '@/src/common/fieldset'
import { Fragment } from 'react'
import { Group } from '@/src/common/group'
import { Separator } from '@/src/common/separator'
import { Slot } from '@/src/server/component/slot'
import { prepare } from '@/src/util/prepare'
import { useFormAction } from '@/src/hook/useFormAction'
import { useSchema } from '@/src/hook/useSchema'
import type { Forms } from '@/src/type'

export function Form(
  props: Readonly<{
    children?: React.ReactNode
    form: Forms
    formAction?: (data: Record<string, unknown>) => void
    value?: Record<string, unknown>
  }>
) {
  const forms = prepare(props.form)

  const [schema, onMount] = useSchema()
  const [state, formAction] = useFormAction(schema, props.formAction)

  const value = state?.data ?? props.value

  return (
    <div className="h-full w-full">
      <form action={formAction}>
        <Group>
          {forms.map((form, index) => (
            <Fragment key={index}>
              <FieldSet description={form.description} title={form.title}>
                <Slot
                  errors={state?.errors}
                  fields={form.fields}
                  onMount={onMount}
                  value={value}
                />
              </FieldSet>
              {form.separator && <Separator />}
            </Fragment>
          ))}
          <Action>{props.children}</Action>
        </Group>
      </form>
    </div>
  )
}

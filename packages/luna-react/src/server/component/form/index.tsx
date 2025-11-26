import { Action } from '@/src/common/action'
import { FieldSet } from '@/src/common/fieldset'
import { Fragment } from 'react'
import { Group } from '@/src/common/group'
import { Separator } from '@/src/common/separator'
import { Slot } from '@/src/server/component/slot'
import { prepare } from '@/src/util/prepare'
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

  return (
    <div className="h-full w-full">
      <form>
        <Group>
          {forms.map((form, index) => (
            <Fragment key={index}>
              <FieldSet description={form.description} title={form.title}>
                <Slot fields={form.fields} />
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

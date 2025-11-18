import { Field } from '@/src/common/field'
import { FieldSet } from '@/src/common/fieldset'
import { Fragment } from 'react'
import { Group } from '@/src/common/group'
import { HORIZONTAL } from '@/src/util/constant'
import { Separator } from '@/src/common/separator'
import { Slot } from '@/src/server/component/slot'
import { prepare } from '@/src/util/prepare'
import type { Forms } from '@/src/type'

export function Form(
  props: Readonly<{
    action: (formData: FormData) => void
    children?: React.ReactNode
    form: Forms
  }>
) {
  const forms = prepare(props.form)

  return (
    <div className="h-full w-full">
      <form action={props.action}>
        <Group>
          {forms.map((form, index) => (
            <Fragment key={index}>
              <FieldSet description={form.description} title={form.title}>
                <Slot fields={form.fields} />
              </FieldSet>
              {form.separator && <Separator />}
            </Fragment>
          ))}
          <Field orientation={HORIZONTAL}>{props.children}</Field>
        </Group>
      </form>
    </div>
  )
}

import { Control } from '../control'
import { FieldSet } from '@/src/common/fieldset'
import { Fragment } from 'react'
import { Group } from '@/src/common/group'
import { Separator } from '@/src/common/separator'
import { Slot } from '@/src/server/component/slot'
import { prepare } from '@/src/util/prepare'
import type { Controls, Forms } from '@/src/type'

export function Form(
  props: Readonly<{
    action: (formData: FormData) => void
    control?: Controls
    form: Forms
  }>
) {
  const forms = prepare(props.form)

  return (
    <div className="w-full max-w-md">
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
          <Control control={props.control} />
        </Group>
      </form>
    </div>
  )
}

import { FieldSet } from '../../../common/fieldset'
import { Fragment } from 'react'
import { Group } from '../../../common/group'
import { Separator } from '../../../common/separator'
import { Slot } from '../slot'
import { prepare } from '../../../util/prepare'
import type { Forms } from '../../../type'

export function Form(
  props: Readonly<{
    form: Forms
  }>
) {
  const forms = prepare(props.form)

  return (
    <div className="w-full max-w-md">
      <form>
        <Group>
          {forms.map((form, index) => (
            <Fragment key={index}>
              <FieldSet title={form.title} description={form.description}>
                <Slot fields={form.fields} />
              </FieldSet>
              {form.separator && <Separator />}
            </Fragment>
          ))}
        </Group>
      </form>
    </div>
  )
}

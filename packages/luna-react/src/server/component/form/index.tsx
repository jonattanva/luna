import { FieldSet } from '../../../common/fieldset'
import { Fragment } from 'react'
import { Group } from '../../../common/group'
import { Separator } from '../../../common/separator'
import type { Forms } from '../../type'

export function Form(
  props: Readonly<{
    form: Forms
  }>
) {
  const forms = props.form
    .filter((form) => form.hidden !== true)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <form>
      <Group>
        {forms.map((form, index) => (
          <Fragment key={index}>
            <FieldSet description={form.description} title={form.title} />
            {form.separator && <Separator />}
          </Fragment>
        ))}
      </Group>
    </form>
  )
}

import { FieldSet } from '../../../common/fieldset'
import { Group } from '../../../common/group'
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
          <FieldSet
            description={form.description}
            key={index}
            title={form.title}
          />
        ))}
      </Group>
    </form>
  )
}

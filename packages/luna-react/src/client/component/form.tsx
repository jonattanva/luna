import { Control } from '@/src/component/control'
import { FieldSet } from '@/src/component/field-set'
import { Fragment } from 'react'
import { Group } from '@/src/component/group'
import { Input } from './input'
import { Separator } from '@/src/component/separator'
import { Slot } from '@/src/component/slot'
import { prepare } from '@/src/util/prepare'
import { useFormAction } from '../hook/useFormAction'
import { useSchema } from '../hook/useSchema'
import type { Forms, Config, LunaForm, Source } from '@/src/type'

export function Form(
  props: Readonly<{
    children?: React.ReactNode
    config: Config
    form: Forms
    formAction?: (form: LunaForm) => Promise<void> | void // FIXME: Improve handling of formAction
    source?: Source
    value?: Record<string, unknown>
  }>
) {
  const [schema, onMount, onUnmount] = useSchema()
  const [state, formAction] = useFormAction(schema, props.formAction) // FIXME: Improve handling of formAction

  const forms = prepare(props.form)
  const value = state?.data ?? props.value

  return (
    <div className="h-full w-full">
      <form action={formAction} noValidate>
        <Group>
          {forms.map((form, index) => (
            <Fragment key={index}>
              <FieldSet description={form.description} title={form.title}>
                <Slot errors={state?.errors} fields={form.fields} value={value}>
                  {(internal) => (
                    <Input
                      {...internal}
                      config={props.config}
                      onMount={onMount}
                      onUnmount={onUnmount}
                      source={props.source}
                    />
                  )}
                </Slot>
              </FieldSet>
              {form.separator && <Separator />}
            </Fragment>
          ))}
          {props.children && <Control>{props.children}</Control>}
        </Group>
      </form>
    </div>
  )
}

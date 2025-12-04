import { Control } from '@/src/component/control'
import { FieldSet } from '@/src/component/field-set'
import { Fragment } from 'react'
import { Group } from '@/src/component/group'
import { Input } from './input'
import { Separator } from '@/src/component/separator'
import { Slot } from '@/src/component/slot'
import { prepare } from '@/src/util/prepare'
import { useSchema } from '../hook/useSchema'
import type { Forms, Config, Source } from '@/src/type'

export function Form(
  props: Readonly<{
    children?: React.ReactNode
    config: Config
    disabled?: boolean
    form: Forms
    source?: Source
    value?: Record<string, unknown>
  }>
) {
  const [, onMount, onUnmount] = useSchema()

  const forms = prepare(props.form)

  return (
    <div className="h-full w-full">
      <form noValidate>
        <Group>
          {forms.map((form, index) => (
            <Fragment key={index}>
              <FieldSet description={form.description} title={form.title}>
                <Slot fields={form.fields} disabled={props.disabled}>
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

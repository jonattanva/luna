import { Control } from '@/src/component/control'
import { FieldSet } from '@/src/component/field-set'
import { Fragment } from 'react'
import { Group } from '@/src/component/group'
import { Input } from './input'
import { Separator } from '@/src/component/separator'
import { Slot } from '@/src/component/slot'
import { prepare } from '@/src/util/prepare'
import { useSchema } from '../hook/useSchema'
import type { Forms, LunaConfig } from '@/src/type'

export function Form(
  props: Readonly<{
    children?: React.ReactNode
    config: LunaConfig
    form: Forms
    value?: Record<string, unknown>
  }>
) {
  const forms = prepare(props.form)

  const [, onMount, onUnmount] = useSchema()

  return (
    <div className="h-full w-full">
      <form>
        <Group>
          {forms.map((form, index) => (
            <Fragment key={index}>
              <FieldSet description={form.description} title={form.title}>
                <Slot fields={form.fields}>
                  {(internal) => (
                    <Input
                      {...internal}
                      config={props.config}
                      onMount={onMount}
                      onUnmount={onUnmount}
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

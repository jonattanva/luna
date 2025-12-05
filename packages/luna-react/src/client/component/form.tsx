import { Control } from '@/src/component/control'
import { FieldSet } from '@/src/component/field-set'
import { Fragment } from 'react'
import { Group } from '@/src/component/group'
import { Input } from './input'
import { Separator } from '@/src/component/separator'
import { Slot } from '@/src/component/slot'
import { prepare } from '@/src/util/prepare'
import { useSchema } from '../hook/useSchema'
import type { Sections, Config, Source } from '@/src/type'

export function Form(
  props: Readonly<{
    children?: React.ReactNode
    config: Config
    readOnly?: boolean
    sections: Sections
    source?: Source
    value?: Record<string, unknown>
  }>
) {
  const [, onMount, onUnmount] = useSchema()

  const sections = prepare(props.sections)

  return (
    <div className="h-full w-full">
      <form noValidate>
        <Group>
          {sections.map((section, index) => (
            <Fragment key={index}>
              <FieldSet description={section.description} title={section.title}>
                <Slot
                  disabled={props.readOnly}
                  fields={section.fields}
                  value={props.value}
                >
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
              {section.separator && <Separator />}
            </Fragment>
          ))}
          {props.children && <Control>{props.children}</Control>}
        </Group>
      </form>
    </div>
  )
}

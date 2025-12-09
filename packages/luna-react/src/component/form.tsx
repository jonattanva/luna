import { Control } from './control'
import { FieldSet } from './field-set'
import { Fragment } from 'react'
import { Group } from './group'
import { Separator } from './separator'
import { Slot } from './slot'
import { prepare } from '../util/prepare'
import type { Children, Sections } from '../type'

export function Form(
  props: Readonly<{
    children: Children
    control?: React.ReactNode
    noValidate?: boolean
    readOnly?: boolean
    sections: Sections
  }>
) {
  const sections = prepare(props.sections)

  return (
    <div className="h-full w-full">
      <form noValidate={props.noValidate}>
        <Group>
          {sections.map((section, index) => (
            <Fragment key={index}>
              <FieldSet description={section.description} title={section.title}>
                <Slot disabled={props.readOnly} fields={section.fields}>
                  {props.children}
                </Slot>
              </FieldSet>
              {section.separator && <Separator />}
            </Fragment>
          ))}
          {props.control && <Control>{props.control}</Control>}
        </Group>
      </form>
    </div>
  )
}

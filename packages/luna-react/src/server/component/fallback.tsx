import { Suspense } from 'react'
import { Form } from './form'
import type { Config } from '../../type'
import type { Sections } from '@luna-form/core'

export function Fallback(
  props: Readonly<{
    children: React.ReactNode
    config: Config
    sections: Sections
  }>
) {
  return (
    <Suspense
      fallback={
        <Form config={props.config} sections={props.sections} readOnly />
      }
    >
      {props.children}
    </Suspense>
  )
}

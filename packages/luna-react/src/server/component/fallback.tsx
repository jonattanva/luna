import { Suspense } from 'react'
import { Form } from './form'
import type { Config, Sections } from '../../type'

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

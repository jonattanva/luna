import { fetcher, type DataSource, type Environment } from '@luna-form/core'
import type { Config, InputConfig } from '../type'

export function defineConfig<T extends React.ElementType>(
  options: Readonly<{
    env?: Environment
    fetcher?: <T>(dataSource: DataSource) => Promise<T>
    inputs: Array<InputConfig<T>>
    style?: {
      compact?: boolean
    }
    validation?: {
      blur?: boolean
      change?: boolean
      submit?: boolean
    }
  }>
): Config {
  const config = {
    env: options.env,
    fetcher,
    inputs: {},
    style: options.style,
  } as Config

  config.validation = options.validation ?? {
    blur: true,
    change: true,
    submit: true,
  }

  options.inputs.forEach(({ types, input }) => {
    const type = Array.isArray(types) ? types : [types]
    type.forEach((t) => {
      config.inputs[t] = input
    })
  })

  return config
}

export function defineInput<T extends React.ElementType>(
  input: React.ComponentProps<T>
): InputConfig<T> {
  return {
    types: [
      'input',
      'input/email',
      'input/number',
      'input/password',
      'input/tel',
      'input/text',
    ],
    input,
  }
}

export function defineTextArea<T extends React.ElementType>(
  input: React.ComponentProps<T>
): InputConfig<T> {
  return {
    types: ['textarea'],
    input,
  }
}

export function defineSelect<T extends React.ElementType>(
  input: React.ComponentProps<T>
): InputConfig<T> {
  return {
    types: ['select', 'select/year', 'select/month'],
    input,
  }
}

export function defineCustomInput<T extends React.ElementType>(
  types: string | string[],
  input: React.ComponentProps<T>
): InputConfig<T> {
  return {
    types,
    input,
  }
}

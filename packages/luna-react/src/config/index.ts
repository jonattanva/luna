import { fetcher } from './fetcher'
import type { Config, DataSource, Environment, InputConfig } from '../type'

export function defineConfig<T extends React.ElementType>(
  options: Readonly<{
    env?: Environment
    fetcher?: <T>(dataSource: DataSource) => Promise<T>
    inputs: Array<InputConfig<T>>
    style?: {
      compact?: boolean
    }
  }>
): Config {
  const config = {
    env: options.env,
    fetcher,
    inputs: {},
    style: options.style,
  } as Config

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

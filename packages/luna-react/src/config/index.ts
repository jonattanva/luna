import { fetcher } from './fetcher'
import type { DataSource, Environment } from '../type'

export type Config = {
  env?: Environment
  inputs: {
    [key: string]: React.ComponentType<React.HTMLAttributes<HTMLElement>>
  }
  fetcher: <T>(dataSource: DataSource) => Promise<T>
}

export type InputConfig<TProps = React.HTMLAttributes<HTMLElement>> = {
  types: string | string[]
  input: React.ComponentType<TProps>
}

export function defineConfig(
  options: Readonly<{
    env?: Environment
    fetcher?: <T>(dataSource: DataSource) => Promise<T>
    inputs: Array<InputConfig>
  }>
): Config {
  const config = {
    env: options.env,
    fetcher,
    inputs: {},
  } as Config

  options.inputs.forEach(({ types, input }) => {
    const type = Array.isArray(types) ? types : [types]
    type.forEach((t) => {
      config.inputs[t] = input
    })
  })

  return config
}

export function defineInput(
  input: React.ComponentType<React.HTMLAttributes<HTMLInputElement>>
): InputConfig {
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

export function defineTextArea(
  input: React.ComponentType<React.HTMLAttributes<HTMLTextAreaElement>>
): InputConfig {
  return {
    types: ['textarea'],
    input,
  }
}

export function defineSelect(
  input: React.ComponentType<React.HTMLAttributes<HTMLSelectElement>>
): InputConfig {
  return {
    types: ['select', 'select/year', 'select/month'],
    input,
  }
}

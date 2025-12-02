import type { Config, Environment, InputConfig } from '../type'

export function defineConfig(
  options: Readonly<{
    env?: Environment
    inputs: Array<InputConfig>
  }>
): Config {
  const config = {
    env: options.env,
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
      'input/text',
      'input/number',
      'input/password',
      'input/email',
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

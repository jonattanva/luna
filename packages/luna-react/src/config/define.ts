import type { LunaConfig, LunaInputConfig } from '../type'

export function defineConfig(
  options: Readonly<{
    inputs: Array<LunaInputConfig>
  }>
): LunaConfig {
  const config = {
    inputs: {},
  } as LunaConfig

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
): LunaInputConfig {
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
): LunaInputConfig {
  return {
    types: ['textarea'],
    input,
  }
}

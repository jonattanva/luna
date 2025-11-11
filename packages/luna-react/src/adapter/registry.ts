const registry = new Map()

export function setInputComponent(
  component: React.ComponentType,
  types: string[]
) {
  for (const type of types) {
    registry.set(type, component)
  }
}

export function getComponent(type: string) {
  return registry.get(type)
}

import { Gemini3Flash, WithoutProvider } from './model-icon'

export function ProviderStatus(props: {
  provider: {
    provider: string
    key: string
  } | null
}) {
  if (props.provider) {
    if (props.provider.provider === 'google') {
      return <Gemini3Flash />
    }
  }
  return <WithoutProvider />
}

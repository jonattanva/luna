import { Google, WithoutProvider } from './icon'

export function ProviderStatus(props: {
  provider: {
    provider: string
    key: string
  } | null
}) {
  if (props.provider) {
    if (props.provider.provider === 'google') {
      return <Google />
    }
  }
  return <WithoutProvider />
}

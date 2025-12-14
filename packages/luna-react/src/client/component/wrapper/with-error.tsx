import { inputErrorAtom } from '../../lib/error-store'
import { useAtomValue } from 'jotai'

export function withErrors<P extends { errors?: Record<string, string[]> }>(
  Component: React.ComponentType<P>
) {
  const WithErrors = (props: Readonly<Omit<P, 'errors'>>) => {
    const errors = useAtomValue(inputErrorAtom)
    return <Component {...(props as P)} errors={errors} />
  }
  return WithErrors
}

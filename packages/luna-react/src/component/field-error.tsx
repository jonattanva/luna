export function FieldError(
  props: Readonly<{
    errors: string[]
  }>
) {
  return (
    <ul className="text-sm text-red-600 dark:text-red-500">
      {props.errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )
}

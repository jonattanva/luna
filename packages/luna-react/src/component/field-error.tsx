export function FieldError(
  props: Readonly<{
    errors?: string[]
  }>
) {
  if (!props.errors || props.errors.length === 0) {
    return null
  }

  return (
    <ul className="text-sm text-red-600 dark:text-red-500">
      {props.errors?.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )
}

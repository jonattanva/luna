export function Label(
  props: Readonly<{
    children?: React.ReactNode
    name: string
    required?: boolean
  }>
) {
  return (
    <label
      className="flex w-fit items-center gap-2 text-sm leading-snug font-medium text-gray-900 select-none dark:text-gray-300"
      htmlFor={props.name}
    >
      {props.children}
      {!props.required && (
        <span className="text-sm text-gray-600 dark:text-gray-400">
          (Optional)
        </span>
      )}
    </label>
  )
}

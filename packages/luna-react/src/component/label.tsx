export function Label(
  props: Readonly<{
    children?: React.ReactNode
    name: string
    required?: boolean
  }>
) {
  return (
    <label
      data-slot="field-label"
      className="flex w-fit items-center gap-2 text-sm leading-snug font-medium select-none"
      htmlFor={props.name}
    >
      {props.children}
      {!props.required && (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          (Optional)
        </span>
      )}
    </label>
  )
}

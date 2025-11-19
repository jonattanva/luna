export function Action(
  props: Readonly<{
    children?: React.ReactNode
  }>
) {
  return (
    <div data-slot="action" className="flex w-full flex-row gap-4">
      {props.children}
    </div>
  )
}

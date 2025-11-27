export function Control(
  props: Readonly<{
    children?: React.ReactNode
  }>
) {
  return (
    <div data-slot="field-control" className="flex w-full flex-row gap-4">
      {props.children}
    </div>
  )
}

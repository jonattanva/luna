export function Control(
  props: Readonly<{
    children?: React.ReactNode
  }>
) {
  return (
    <div data-slot="field-control" className="w-full">
      {props.children}
    </div>
  )
}

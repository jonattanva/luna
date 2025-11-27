export function Group(
  props: Readonly<{
    children?: React.ReactNode
  }>
) {
  return (
    <div data-slot="field-group" className="flex w-full flex-col gap-8">
      {props.children}
    </div>
  )
}

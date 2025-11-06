export function Group(
  props: Readonly<{
    children?: React.ReactNode
  }>
) {
  return (
    <div className="@container/form-group flex w-full flex-col gap-8">
      {props.children}
    </div>
  )
}

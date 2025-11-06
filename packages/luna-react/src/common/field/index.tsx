export function Field(
  props: Readonly<{
    children?: React.ReactNode
  }>
) {
  return <div className="flex w-full flex-col gap-4">{props.children}</div>
}

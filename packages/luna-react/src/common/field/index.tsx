export function Field(
  props: Readonly<{
    children?: React.ReactNode
    error?: boolean
  }>
) {
  return (
    <div
      {...(props.error && { 'data-invalid': true })}
      data-slot="field"
      className="flex w-full flex-col gap-4 data-[invalid=true]:text-red-500 [&>*]:w-full"
    >
      {props.children}
    </div>
  )
}

export function Field(
  props: Readonly<{
    children?: React.ReactNode
    orientation?: 'vertical' | 'horizontal'
  }>
) {
  const orientation = props.orientation || 'vertical'

  return (
    <div
      data-slot="field"
      data-orientation={orientation}
      className="flex w-full gap-4 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col"
    >
      {props.children}
    </div>
  )
}

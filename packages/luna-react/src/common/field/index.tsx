export function Field(
  props: Readonly<{
    children?: React.ReactNode
    orientation?: 'vertical' | 'horizontal'
  }>
) {
  const orientation = props.orientation || 'horizontal'

  return (
    <div
      data-slot="field"
      data-orientation={orientation}
      className="flex w-full gap-4 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row"
    >
      {props.children}
    </div>
  )
}

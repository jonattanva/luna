export function Column(
  props: Readonly<{
    children?: React.ReactNode
    cols?: number
  }>
) {
  return (
    <div className={`grid grid-cols-${props.cols ?? 1} gap-4`}>
      {props.children}
    </div>
  )
}

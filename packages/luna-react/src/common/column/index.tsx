import { getColumn } from '../../util/column'

export function Column(
  props: Readonly<{
    children?: React.ReactNode
    cols?: number
  }>
) {
  const cols = getColumn(props.cols)

  return <div className={`grid ${cols} gap-4`}>{props.children}</div>
}

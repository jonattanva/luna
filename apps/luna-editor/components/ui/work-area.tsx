import { Panel } from './panel'
import { Preview } from './preview'
import { Sidebar } from './layout/sidebar'

export function WorkArea() {
  return (
    <>
      <Sidebar>
        <Panel />
      </Sidebar>
      <Preview />
    </>
  )
}

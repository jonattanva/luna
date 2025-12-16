import { CodePanel } from './code-panel'
import { Preview } from './preview'
import { Sidebar } from './layout/sidebar'

export function WorkArea() {
  return (
    <>
      <Sidebar>
        <CodePanel />
      </Sidebar>
      <Preview />
    </>
  )
}

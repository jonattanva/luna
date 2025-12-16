import { Body } from '@/components/ui/layout/body'
import { Header } from '@/components/ui/layout/header'
import { WorkArea } from '@/components/ui/work-area'

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <Header />
      <Body>
        <WorkArea />
      </Body>
    </div>
  )
}

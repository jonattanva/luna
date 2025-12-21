import { FormPreview } from '@/components/form-editor/form-preview'
import { FormSidebar } from '@/components/form-editor/form-sidebar'

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="text-foreground flex gap-2 border-b p-2">
        <div className="flex w-full flex-row justify-between px-2">Luna</div>
      </div>
      <main className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <div className="h-full min-h-0 w-full min-w-0">
          <div className="flex h-full w-full flex-row">
            <FormSidebar />
            <FormPreview />
          </div>
        </div>
      </main>
    </div>
  )
}

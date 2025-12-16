export function Sidebar(props: Readonly<{ children?: React.ReactNode }>) {
  return (
    <div className="h-full max-w-lg flex-1 overflow-x-auto border-r">
      <div className="relative flex h-full flex-col items-stretch">
        {props.children}
      </div>
    </div>
  )
}

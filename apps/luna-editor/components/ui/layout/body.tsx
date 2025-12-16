export function Body(props: Readonly<{ children?: React.ReactNode }>) {
  return (
    <main className="flex min-h-0 flex-1 flex-col lg:flex-row">
      <div className="h-full min-h-0 w-full min-w-0">
        <div className="flex h-full w-full flex-row">{props.children}</div>
      </div>
    </main>
  )
}

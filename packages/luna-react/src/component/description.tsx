export function Description(props: Readonly<{ children: string }>) {
  return (
    <p className="text-sm leading-normal font-normal text-slate-600 dark:text-slate-400">
      {props.children}
    </p>
  )
}

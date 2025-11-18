import { NativeSelect, NativeSelectOption } from "./native-select";

export function Select({ className, ...props }: React.ComponentProps<"select"> & { options: Array<{ value: string; label: string }> }) {
    return (
    <NativeSelect className={className} disabled={props.disabled} id={props.id} name={props.name} required={props.required} value={props.value} onChange={props.onChange}>
      {props.options.map((option) => (
        <NativeSelectOption key={option.value} value={option.value}>
          {option.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  )
}
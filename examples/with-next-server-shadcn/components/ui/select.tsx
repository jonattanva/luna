import { NativeSelect, NativeSelectOption } from "./native-select";

export function Select({ className, ...props }: React.ComponentProps<"select"> & { options: Array<{ value: string; label: string }> }) {

  console.log(props.defaultValue, props.options)

  return (
    <NativeSelect className={className} disabled={props.disabled} id={props.id} name={props.name} required={props.required} onChange={props.onChange} defaultValue={props.defaultValue} data-invalid>
      {props.options.map((option) => (
        <NativeSelectOption key={option.value} value={option.value}>
          {option.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  )
}
export function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    return <input type={type} data-slot="input" {...props} />
}
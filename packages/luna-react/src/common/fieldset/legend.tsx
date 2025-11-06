export function Legend(
  props: Readonly<{
    title?: string
    description?: string
  }>
) {
  return (
    <>
      <legend className="mb-3 font-medium text-gray-800 dark:text-gray-200">
        {props.title}
      </legend>
      <p className="-mt-2 text-sm leading-normal font-normal text-gray-600 dark:text-gray-400">
        {props.description}
      </p>
    </>
  )
}

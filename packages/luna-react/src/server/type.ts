export type Orderable = {
  order?: number
}

export type Hiddenable = {
  hidden?: boolean
}

export type Form = {
  title?: string
  description?: string
  separator?: boolean
} & Orderable &
  Hiddenable

export type Forms = readonly Form[]

export interface ButtonAttribute {
  label: string

  description: string | undefined

  icon: string | undefined

  type: 'default' | 'ghost'

  primary: boolean
}

export interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

export interface FormData {
  name: string
  request: string
  email: string
}

export interface RequestPage {
  name: string
  surname: string
  email: string
  phone_number: string
}

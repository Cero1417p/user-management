export interface IUserFormData {
  name: string
  lastName: string
  email: string
  role: string
  password: string
  confirmPassword: string
  photo: string
  dni: string
  status: 'on' | undefined
}

export interface IUserValidationFormData {
  name: string
  lastName: string
  email: string
  role: string
  password?: string
  confirmPassword?: string
  photo: string
  dni: string
  status: boolean
}

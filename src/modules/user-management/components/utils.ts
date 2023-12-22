import { Dispatch, SetStateAction } from 'react'
import { IUser, IUserValidationFormData } from '@/modules/user-management/types'

export const defaultUser: IUser = {
  id: '',
  dni: '',
  password: '',
  email: '',
  name: '',
  role: '',
  lastName: '',
  status: true,
  photo: '',
}

export const validationFields = (
  name: string,
  value: string,
  hasErrors: Partial<IUserValidationFormData>,
  setHasErrors: Dispatch<SetStateAction<Partial<IUserValidationFormData>>>,
  userFormData: IUserValidationFormData,
) => {
  if (name === 'name') {
    setHasErrors({
      ...hasErrors,
      name: value.length === 0 ? 'Ingrese su nombre' : '',
    })
  }

  if (name === 'lastName') {
    setHasErrors({
      ...hasErrors,
      lastName: value.length === 0 ? 'Ingrese sus apellidos' : '',
    })
  }

  if (name === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setHasErrors({
      ...hasErrors,
      email: !emailRegex.test(value) ? 'El correo electrónico no tiene un formato válido' : '',
    })
  }
  if (name === 'password') {
    setHasErrors({
      ...hasErrors,
      password: value.length < 6 ? 'La contraseña debe tener al menos 6 caracteres' : '',
    })
  }

  if (name === 'confirmPassword') {
    setHasErrors({
      ...hasErrors,
      confirmPassword: value !== userFormData.password ? 'Las contraseñas no coinciden' : '',
    })
  }

  if (name === 'dni') {
    setHasErrors({
      ...hasErrors,
      dni: value.length < 8 ? 'El DNI debe tener 8 caracteres' : '',
    })
  }

  if (name === 'role') {
    setHasErrors({
      ...hasErrors,
      role: value.length === 0 ? 'Seleccione un rol' : '',
    })
  }
}

import { defer, LoaderFunctionArgs } from 'react-router-dom'
import { ErrorTypes } from '@/modules/user-management/types'
import { getUser } from '@/modules/user-management/api'
import { defaultUser } from '@/modules/user-management/components/utils'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const userId = params.userId

  if (userId === 'new') return defer({ user: defaultUser, isUserNew: true })

  const responseUser = getUser(userId || '')
  if (!responseUser) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
      message: 'Usuario no encontrado',
    } as ErrorTypes)
  } else {
    return defer({ user: responseUser, isUserNew: false })
  }
}

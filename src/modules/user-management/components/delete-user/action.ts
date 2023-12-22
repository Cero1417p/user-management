import { ActionFunctionArgs, redirect } from 'react-router-dom'
import { deleteUser } from '@/modules/user-management/api'

export async function action({ params }: ActionFunctionArgs) {
  await deleteUser(params.userId!)
  return redirect('/users')
}

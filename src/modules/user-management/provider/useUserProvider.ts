import { useContext } from 'react'
import { UserContext } from '@/modules/user-management/provider/UserProvider'

export const useUserListContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserList debe ser usado dentro de un UserListProvider')
  }
  return context
}

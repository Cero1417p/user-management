import { createContext, FC, ReactNode, useState } from 'react'
import datajs from './userMocks.json'
import { IUser } from '@/modules/user-management/types/UserTypes'
import { useNavigate } from 'react-router-dom'

type UserContextType = {
  getUsers: () => IUser[]
  getUserById: (userId: string) => IUser | undefined
  createUser: (newUser: IUser) => void
  deleteUserById: (userId: string) => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserListProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const [userList, setUserList] = useState<IUser[]>(datajs)

  const getUsers = (): IUser[] => {
    return userList
  }

  const getUserById = (userId: string) => {
    return userList.find((user) => user.id === userId)
  }

  const createUser = (user: IUser) => {
    setUserList((prevState) => {
      return [...prevState, user]
    })
    navigate('/users')
  }

  const deleteUserById = (userId: string) => {
    setUserList(userList.filter((user) => user.id !== userId))
  }

  return (
    <UserContext.Provider value={{ getUsers, getUserById, createUser, deleteUserById }}>
      {children}
    </UserContext.Provider>
  )
}

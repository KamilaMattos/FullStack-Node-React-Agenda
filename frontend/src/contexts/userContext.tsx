import { useState, useEffect, ReactNode, createContext } from "react"
import { api } from "../api"

interface IUserContextProps {
  children: ReactNode
}

export interface IUsers {
  id?: string
  name: string
  email: string
  fone: string
  createdAt?: string
}
export interface IUpdateUsers {
  id?: string
  name?: string
  email?: string
  fone?: string
  createdAt?: string
}

export interface IContact {
  id: string
  name: string
  email: string
  fone: string
  userId: string
}

interface IUserDetail extends IUsers {
  contact: IContact[]
}

interface IUserContextData {
  usersList: IUsers[]
  userDetail: (user_id: string) => void
  user: IUserDetail
  registerUser: (data: IUsers) => void
  editUser: (data: IUpdateUsers, user_id: string) => void
  deleteUser: (user_id: string) => void
}

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
)

export const UserProvider = ({ children }: IUserContextProps) => {
  const [usersList, setUsersList] = useState<IUsers[]>([] as IUsers[])
  const [user, setUser] = useState<IUserDetail>({} as IUserDetail)

  const listUsers = async () => {
    await api
      .get("/users")
      .then((res) => setUsersList(res.data))
      .catch((err) => console.log(err))
    return usersList
  }

  useEffect(() => {
    listUsers()
  }, [user])

  const userDetail = async (user_id: string) => {
    await api
      .get(`/users/${user_id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
  }

  const registerUser = async (data: IUsers) => {
    await api
      .post("/users", data)
      .then((res) => listUsers())
      .catch((err) => console.log(err))
  }

  const editUser = async (data: IUpdateUsers, user_id: string) => {
    await api
      .patch(`/users/${user_id}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const deleteUser = async (user_id: string) => {
    console.log(user_id)
    await api
      .delete(`/users/${user_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <UserContext.Provider
      value={{
        usersList,
        userDetail,
        user,
        registerUser,
        editUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

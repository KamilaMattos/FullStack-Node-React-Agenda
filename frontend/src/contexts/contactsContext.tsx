import { createContext, ReactNode } from "react"
import { api } from "../api"

interface IContactProviderProps {
  children: ReactNode
}

interface ICreateContact {
  fullName: string
  email: string
  phone: string
  clientId: string
}

interface IEditContact {
  name?: string
  email?: string
  fone?: string
  userId?: string
}

interface IContactContextData {
  registerContact: (data: ICreateContact) => void
  editContact: (data: IEditContact, contact_id: string) => void
  deleteContact: (contact_id: string) => void
}

export const ContactContext = createContext<IContactContextData>(
  {} as IContactContextData
)

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const registerContact = async (data: ICreateContact) => {
    await api.post("/contacts", data).then((res) => console.log(res))
  }

  const editContact = async (data: IEditContact, contact_id: string) => {
    await api.patch(`/contacts/${contact_id}`, data).then((res) => {
      console.log(res)
    })
  }

  const deleteContact = async (contact_id: string) => {
    await api.delete(`/contacts/${contact_id}`).then((res) => console.log(res))
  }
  return (
    <ContactContext.Provider
      value={{ registerContact, editContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export interface IUserRequest {
  name: string
  email: string
  fone: string
  createdAt?: string
}

export interface IUserUpdate {
  name?: string
  email?: string
  fone?: string
}

export interface IUser {
  id?: string
  name: string
  email: string
  fone: string
  createdAt: string
}

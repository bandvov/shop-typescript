import { Document } from "mongoose"

export interface IUser extends Document {
  firstName: string
  lastName: string
  email: boolean
  password: string
  orders: string[]
  previousOrders: string[]
  avatar: string
  active: boolean
  createdAt: string
  updatedAt: string
  confirmed: boolean
}
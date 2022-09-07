export interface IEquipment {
    id: string
    name: string
}

export interface IEquipmentType {
  id: string
  name: string
}

export interface IUser {
    id: string
    role: string
    contact: string
    login: string
    name: string
}

export interface IShop {
  id: string
  name: string
  addres: string
  contact: string
  userId: string
  technikId: string
  salesId: string
}
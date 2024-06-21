import { Account } from './account'

export class Client {
  id: string
  name: string
  email: string
  phone: string
  birthday: Date
  accounts?: Account[]
  createdAt: Date = new Date()

  constructor(data: Client) {
    Object.assign(this, data)
  }

  static registerNewClient({ birthday, email, name, phone }: RegisterClientDto): Client {
    return new Client({
      id: 'asdasd2332erw',
      name,
      email,
      phone,
      birthday,
      createdAt: new Date()
    })
  }

}
export interface RegisterClientDto {
  name: string
  email: string
  phone: string
  birthday: Date
}

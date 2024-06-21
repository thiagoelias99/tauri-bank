import { Transaction } from './transaction'

export class Account {
  id: string
  balance: number
  transactions?: Transaction[]
  createdAt: Date = new Date()

  constructor(data: Account) {
    Object.assign(this, data)
  }
}

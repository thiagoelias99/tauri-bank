export class Transaction {
  id: string
  type: TransactionType
  sourceAccount: string
  destinationAccount: string
  amount: number
  createdAt: Date

  constructor(data: Transaction) {
    Object.assign(this, data)
  }
}

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  TRANSFER = 'TRANSFER',
  LOAN = 'LOAN'
}

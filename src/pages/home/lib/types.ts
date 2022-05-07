import type { TransactionType } from 'src/core/models/transaction'

export interface TransactionProps extends TransactionType.AllTranspiledTypes {}

export interface GroupedTransactionsProps {
  heading: string
  items: TransactionProps[]
}

export type TranspiledDownTransaction = {
  date: string
  time: string
  type: string
  more: string[]
  cost: number
}

import type { TransactionType } from 'src/core/models/transaction'

export interface SortTransactionsArgs {
  transaction: TransactionType.AllTypes[]
  sortBy: 'time' | 'id'
  sortType: 'ASC' | 'DESC'
}

export interface ReadAllArgs extends Pick<Partial<SortTransactionsArgs>, 'sortBy' | 'sortType'> {
  pick?: number
  page?: number
  type?: TransactionType.typesWithAll
  courier?: string
}

export interface ReadAllResult {
  // items: GroupedTransactions
  items: TransactionType.AllTranspiledTypes[]
  total: number
  page: number
  picked: number
  nextPage: number
  prevPage: number
  hasMore: boolean
  length: number
}

export type GroupedTransactions = {
  [date: string]: TransactionType.AllTranspiledTypes[]
}

export type FilterTransactionsArgs = {
  transactions: TransactionType.AllTranspiledTypes[]
  type: TransactionType.typesWithAll
}

export type FilterTransactionsByCourierNameArgs = {
  transactions: TransactionType.AllTranspiledTypes[]
  courier: string
}

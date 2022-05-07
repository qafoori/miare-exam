import * as Lib from './lib'
import data from 'src/assets/data.json'
import { Arr } from 'src/core/helpers'
import type { TransactionType } from 'src/core/models/transaction'

export class TransactionService {
  private db: TransactionType.AllTranspiledTypes[] = []

  constructor() {
    const flatted = <TransactionType.AllTranspiledTypes[]>Object.keys(data)
      .map(key => {
        return data[<TransactionType.types>key].map(item => {
          return {
            ...item,
            type: key,
            // @ts-ignore
            time: item.request_datetime || item.datetime || item.created_at,
          }
        })
      })
      .flat()

    this.db = flatted
  }

  private sortTransactions({ transaction, sortBy, sortType }: Lib.T.SortTransactionsArgs): TransactionType.AllTranspiledTypes[] {
    return Arr.sortArrOfObj(transaction, sortBy, sortType)
  }

  private filterTransactionsByType({ transactions, type }: Lib.T.FilterTransactionsArgs): TransactionType.AllTranspiledTypes[] {
    if (type === 'all') {
      return transactions
    } else {
      return transactions.filter(transaction => transaction.type === type)
    }
  }

  private filterTransactionsByCourierName({
    transactions,
    courier,
  }: Lib.T.FilterTransactionsByCourierNameArgs): TransactionType.AllTranspiledTypes[] {
    return transactions.filter(transaction => transaction.driver?.includes(courier))
  }

  async readAll({ sortBy = 'time', sortType = 'ASC', page = 1, pick = 15, type = 'all', courier }: Lib.T.ReadAllArgs): Promise<Lib.T.ReadAllResult> {
    const filteredByType = this.filterTransactionsByType({ transactions: this.db, type })

    // prettier-ignore
    const filteredByCourier = type === 'trip_financials' && courier 
      ? this.filterTransactionsByCourierName({ transactions: filteredByType, courier }) 
      : filteredByType

    const sorted = this.sortTransactions({ sortBy, sortType, transaction: filteredByCourier })
    const paginated = Arr.paginate(sorted, page, pick)

    await new Promise(r => setTimeout(r, 1000))

    return {
      items: paginated,
      page,
      nextPage: page + 1,
      prevPage: page - 1,
      picked: pick,
      total: sorted.length,
      hasMore: sorted.length >= page * pick,
      length: paginated.length * page,
    }
  }
}

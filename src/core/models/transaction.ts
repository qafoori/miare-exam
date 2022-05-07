export const TRANSACTION_TYPE = ['trip_financials', 'payments', 'misc_expenses', 'concurrency_costs'] as const

export namespace TransactionType {
  export type types = typeof TRANSACTION_TYPE[number]

  export type typesWithAll = typeof TRANSACTION_TYPE[number] | 'all'

  interface BaseType {
    id: number
  }

  export interface TripFinancials extends BaseType {
    request_datetime: string
    driver: string
    final_price: number
    source_title: string
    hub: {
      id: number
      title: string
    }
  }

  export interface Payments extends BaseType {
    datetime: string
    amount: number
    description?: string
  }

  export interface MiscExpenses extends BaseType {
    title: string
    created_at: string
    amount: number
  }

  export interface ConcurrencyCosts extends BaseType {
    created_at: string
    amount: number
    start_date: string
    end_date: string
  }

  // prettier-ignore
  export interface AllTypes extends 
    Partial<TripFinancials>, 
    Partial<Payments>, 
    Partial<MiscExpenses>, 
    Partial<ConcurrencyCosts> 
  {}

  export interface AllTranspiledTypes extends Omit<AllTypes, 'request_datetime' | 'datetime' | 'created_at'> {
    type: types
    time: string
  }
}

export type Transaction<T extends TransactionType.AllTypes = any> = {
  [key in TransactionType.types]: T extends any ? TransactionType.AllTypes[] : T[]
}

import { actionTypes } from 'src/core/constants'
import { StoreAction, SagaAction } from 'src/core/types/store.type'
import { TransactionType } from 'src/core/models/transaction'
import { ReadAllArgs, ReadAllResult } from 'src/services/transactions.service/lib/types'
import { Pagination } from 'src/core/types/pagination.type'

export const setTransactionType: StoreAction<TransactionType.typesWithAll> = payload => ({
  type: actionTypes.TRANSACTIONS_SELECTED_FILTER,
  payload,
})

export const setTransactionCourier: StoreAction<string> = payload => ({
  type: actionTypes.TRANSACTIONS_COURIER,
  payload,
})

export const setTransactionsPagination: StoreAction<Pagination> = payload => ({
  type: actionTypes.TRANSACTIONS_PAGINATION,
  payload,
})

export const setReadAll: SagaAction<ReadAllArgs, ReadAllResult, any> = {
  request: payload => ({
    type: actionTypes.READ_ALL_TRANSACTIONS.REQUEST,
    payload,
  }),

  success: payload => ({
    type: actionTypes.READ_ALL_TRANSACTIONS.SUCCESS,
    payload,
  }),

  failure: payload => ({
    type: actionTypes.READ_ALL_TRANSACTIONS.FAILURE,
    payload,
  }),

  clean: payload => ({
    type: actionTypes.READ_ALL_TRANSACTIONS.CLEAN,
    payload,
  }),
}

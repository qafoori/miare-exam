import { actionTypes } from 'src/core/constants'
import type { StoreAction, SagaAction } from 'src/core/types/store.type'
import type { TransactionType } from 'src/core/models/transaction'
import type { ReadAllArgs, ReadAllResult } from 'src/services/transactions.service/lib/types'
import type { Pagination } from 'src/core/types/pagination.type'

/**
 *
 *
 * sets the value of selected transaction type in the dropdown
 * @param payload any type of transactions plus "all"
 */
export const setTransactionType: StoreAction<TransactionType.typesWithAll> = payload => ({
  type: actionTypes.TRANSACTIONS_SELECTED_FILTER,
  payload,
})

/**
 *
 *
 * sets the value of needed courier name
 * @param payload string as it's query
 */
export const setTransactionCourier: StoreAction<string> = payload => ({
  type: actionTypes.TRANSACTIONS_COURIER,
  payload,
})

/**
 *
 *
 * sets the value of infinite scroll pagination
 * @param payload { Pagination }
 */
export const setTransactionsPagination: StoreAction<Pagination> = payload => ({
  type: actionTypes.TRANSACTIONS_PAGINATION,
  payload,
})

/**
 *
 *
 * sets the value of fetched transactions using redux-saga
 */
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

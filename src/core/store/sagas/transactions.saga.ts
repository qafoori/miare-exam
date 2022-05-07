import { call, takeLatest, put } from 'redux-saga/effects'
import { actionTypes } from 'src/core/constants'
import { transactionsActions } from '../actions'
import { TransactionService } from 'src/services'

const { setReadAll } = transactionsActions

/**
 *
 * all watchers of transactions sagas, will be added inside this function
 */
export function* transactionsWatcher() {
  yield takeLatest(actionTypes.READ_ALL_TRANSACTIONS.REQUEST, readAllWorker)
}

/**
 *
 * calls readAll api from the simulated web-service
 */
const readAllCaller = (data: ReturnType<typeof setReadAll.request>) => {
  const service = new TransactionService()
  return service.readAll(data.payload)
}
function* readAllWorker(action: ReturnType<typeof setReadAll.request>): object {
  try {
    const response = yield call(readAllCaller, action)
    yield put(setReadAll.success(response))
  } catch (err: any) {
    yield put(setReadAll.failure(err))
  }
}

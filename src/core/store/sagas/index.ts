import { all } from 'redux-saga/effects'
import { transactionsWatcher } from './transactions.saga'

export function* rootSaga() {
  yield all([transactionsWatcher()])
}

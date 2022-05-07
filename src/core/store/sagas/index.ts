import { all } from 'redux-saga/effects'
import { transactionsWatcher } from './transactions.saga'

/**
 *
 * combines all sagas inside "src/core/store/sagas" folder
 */
export function* rootSaga() {
  yield all([transactionsWatcher()])
}

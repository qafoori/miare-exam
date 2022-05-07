import { combineReducers } from 'redux'
import { transactionsReducer } from './transactions.reducer'

/**
 *
 * combines all redux reducers inside "src/core/store/reducers" folder
 */
export const rootReducers = combineReducers({
  transactionsReducer,
})

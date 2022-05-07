import { combineReducers } from 'redux'
import { transactionsReducer } from './transactions.reducer'

export const rootReducers = combineReducers({
  transactionsReducer,
})

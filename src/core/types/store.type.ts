import { rootReducers } from '../store/reducers'

/**
 *
 * type of simple redux state
 */
export type StoreAction<ReturnType = any> = (payload: ReturnType) => {
  type: string
  payload: ReturnType
}

/**
 *
 * type of redux states that are dealing with saga
 */
export type SagaAction<REQ, SUC, FAI> = {
  request: StoreAction<REQ>
  success: StoreAction<SUC>
  failure: StoreAction<FAI>
  clean: StoreAction
}

/**
 *
 * type of any reducer function
 */
export type StoreReducer<InitialStates> = (states: InitialStates, payload: ReturnType<StoreAction<any>>) => InitialStates

/**
 *
 * type if all applied reducers
 */
export type RootState = ReturnType<typeof rootReducers>

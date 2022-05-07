import { rootReducers } from '../store/reducers'

export type StoreAction<ReturnType = any> = (payload: ReturnType) => {
  type: string
  payload: ReturnType
}

export type SagaAction<REQ, SUC, FAI> = {
  request: StoreAction<REQ>
  success: StoreAction<SUC>
  failure: StoreAction<FAI>
  clean: StoreAction
}

export type StoreReducer<InitialStates> = (states: InitialStates, payload: ReturnType<StoreAction<any>>) => InitialStates

export type RootState = ReturnType<typeof rootReducers>

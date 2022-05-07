import { actionTypes } from 'src/core/constants'
import { StoreAction } from '@/core/types/store.type'
import { TransactionType } from '@/core/models/transaction'
import { ReadAllResult } from '@/services/transactions.service/lib/types'
import { Pagination } from 'src/core/types/pagination.type'

const initialState = {
  transactionType: <TransactionType.typesWithAll>'all',
  courier: '',
  readAll: {
    res: <ReadAllResult | null>null,
    lod: false,
    err: null,
  },
  pagination: <Pagination>{
    hasMore: false,
    page: 1,
    total: 0,
  },
}

export const transactionsReducer = (states = initialState, { type, payload }: ReturnType<StoreAction<any>>): typeof initialState => {
  switch (type) {
    case actionTypes.TRANSACTIONS_SELECTED_FILTER: {
      return {
        ...states,
        transactionType: payload,
      }
    }

    case actionTypes.TRANSACTIONS_COURIER: {
      return {
        ...states,
        courier: payload,
      }
    }

    case actionTypes.TRANSACTIONS_PAGINATION: {
      return {
        ...states,
        pagination: payload,
      }
    }

    case actionTypes.READ_ALL_TRANSACTIONS.REQUEST: {
      return {
        ...states,
        readAll: { res: states.readAll.res, lod: true, err: null },
      }
    }

    case actionTypes.READ_ALL_TRANSACTIONS.SUCCESS: {
      const newPayload = <ReadAllResult>payload
      return {
        ...states,
        readAll: { res: { ...payload, items: [...(states.readAll.res?.items || []), ...newPayload.items] }, lod: false, err: null },
        // readAll: { res: payload, lod: false, err: null },
      }
    }

    case actionTypes.READ_ALL_TRANSACTIONS.FAILURE: {
      return {
        ...states,
        readAll: { res: states.readAll.res, lod: false, err: payload },
      }
    }

    case actionTypes.READ_ALL_TRANSACTIONS.CLEAN: {
      return {
        ...states,
        readAll: { res: null, lod: false, err: null },
      }
    }

    default: {
      return states
    }
  }
}

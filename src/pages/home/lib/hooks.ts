import persianDate from 'persian-date'
import * as Lib from '.'
import { useDispatch, useSelector } from 'react-redux'
import { transactionsActions } from 'src/core/store/actions'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import type { SelectOption } from '@/core/components/select/lib/types'
import type { TransactionType } from '@/core/models/transaction'
import type { RootState } from '@/core/types/store.type'
import type { GroupedTransactions } from 'src/services/transactions.service/lib/types'

const { setTransactionType, setReadAll, setTransactionCourier, setTransactionsPagination } = transactionsActions
const scrollToTop = () => window.scrollTo(0, 0)

/**
 *
 *
 *
 * helps to dispatch query string of courier name inside the Heading component
 */
export const useHeading = () => {
  const dispatch = useDispatch()

  const courierChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setReadAll.clean(0))
    dispatch(setTransactionCourier(evt.target.value))
  }

  return { courierChangeHandler }
}

/**
 *
 *
 *
 * helps to dispatch transaction type inside SelectBox component
 */
export const useSelectBox = () => {
  const dispatch = useDispatch()

  // all transactions type (select box options)
  const options: SelectOption<TransactionType.typesWithAll>[] = [
    { key: 'all', value: 'همه تراکنش‌ها' },
    { key: 'concurrency_costs', value: 'هزینه خرید ظرفیت' },
    { key: 'misc_expenses', value: 'هزینه متفرقه' },
    { key: 'payments', value: 'هزینه شارژ حساب' },
    { key: 'trip_financials', value: 'هزینه سفر' },
  ]

  // triggers when you change dropdown value
  const onSelectChange = (type: TransactionType.typesWithAll) => {
    dispatch(setReadAll.clean(0))
    scrollToTop()
    setTimeout(() => {
      dispatch(setTransactionType(type))
    }, 10)
  }

  return { options, onSelectChange }
}

/**
 *
 *
 * -- fetchs default dataset on first page load + when courier and transaction type changes
 * -- fetchs new dataset when scroll achieves to the end of the page
 * -- groups new dataset when they come into the redux state
 * -- recommends the functionality of:
 *        grouping transactions,
 *        fetching dateset,
 *        going the next page of infinite scrolls,
 *        making a heading title of one specific group
 */
export const useTransactions = () => {
  const { readAll, transactionType, courier, pagination } = useSelector((_: RootState) => _.transactionsReducer)
  const dispatch = useDispatch()
  const [grouped, setGrouped] = useState<GroupedTransactions | undefined>(undefined)

  // groups transactions
  const groupTransactions = (transactions?: TransactionType.AllTranspiledTypes[]) => {
    if (transactions) {
      const grouped: GroupedTransactions = {}

      for (const transaction of transactions) {
        const date = transaction.time.split('T')[0]
        const group = grouped[date]

        if (group) {
          group.push(transaction)
        } else {
          grouped[date] = [transaction]
        }
      }
      return grouped
    }
  }

  // fetchs dateset
  const fetchData = () => {
    dispatch(
      setReadAll.request({
        page: readAll.res?.nextPage || 1,
        courier,
        type: transactionType,
      }),
    )
  }

  // goes to the next page of infinite scrolls
  const goNextPage = () => {
    dispatch(
      setTransactionsPagination({
        hasMore: readAll.res?.hasMore || false,
        page: (readAll.res?.page || 1) + 1,
        total: readAll.res?.total || 0,
      }),
    )
  }

  // makes a heading title of one specific group
  const getGroupHeading = (date: string): string => {
    const jalali = new persianDate(new Date(date)).toCalendar('persian')
    const month = jalali.format('MMMM')
    const day = jalali.format('D')
    const weekDay = jalali.format('dddd')
    const year = jalali.format('YYYY')
    return `${weekDay} ${day} ${month} ${year}`
  }

  useEffect(fetchData, [pagination.page, transactionType, courier])
  useEffect(() => setGrouped(groupTransactions(readAll.res?.items)), [readAll])
  return { grouped, goNextPage, getGroupHeading }
}

/**
 *
 *
 *
 * helps to transpile down transactions information into something that the Transaction component can understand them
 */
export const useTransaction = (transpiledTransactions: TransactionType.AllTranspiledTypes) => {
  const { time, amount, final_price, type, title } = transpiledTransactions

  // transpiles down transactions information
  const transpileDown = (): Lib.T.TranspiledDownTransaction => {
    const jalali = new persianDate(new Date(time)).toCalendar('persian')
    const fullDate = jalali.format('YYYY/MM/DD')
    const fullTime = jalali.format('HH:mm')

    return {
      cost: amount || final_price || 0,
      date: fullDate,
      time: fullTime,
      more: translateMore(transpiledTransactions),
      type: translateType(type, title),
    }
  }

  // translates type of transactions
  const translateType = (type: TransactionType.types, title?: string): string => {
    switch (type) {
      case 'concurrency_costs': {
        return 'خرید ظرفیت همزمان'
      }
      case 'misc_expenses': {
        return title || 'متفرقه'
      }
      case 'payments': {
        return 'شارژ حساب'
      }
      case 'trip_financials': {
        return 'هزینه سفر'
      }
    }
  }

  // translates more information about transactions
  const translateMore = (transaction: TransactionType.AllTranspiledTypes): string[] => {
    switch (transaction.type) {
      case 'concurrency_costs': {
        const fromDate = new persianDate(new Date(transaction.start_date!)).toCalendar('persian').format('YYYY/MM/DD')
        const toDate = new persianDate(new Date(transaction.end_date!)).toCalendar('persian').format('YYYY/MM/DD')
        return [`خرید ظرفیت از تاریخ: ${fromDate} تا ${toDate}`]
      }
      case 'trip_financials': {
        return [`کوریر: ${transaction.driver}`, `شعبه: ${transaction.hub?.title}`]
      }
      case 'payments':
      case 'misc_expenses': {
        return []
      }
    }
  }

  const transpiledDownItems = useMemo<Lib.T.TranspiledDownTransaction>(transpileDown, [transpiledTransactions])
  return transpiledDownItems
}

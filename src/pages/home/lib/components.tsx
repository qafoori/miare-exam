import { FC } from 'react'
import * as Lib from '.'
import { Select, Dividers, Loader } from 'src/core/components'
import type { TransactionType } from '@/core/models/transaction'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/core/types/store.type'
import { Input } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { transactionsActions } from 'src/core/store/actions'

const { setTransactionCourier, setTransactionsPagination } = transactionsActions

export const Heading: FC<Lib.T.HeadingProps> = () => {
  const { transactionType, courier } = useSelector((_: RootState) => _.transactionsReducer)
  const { courierChangeHandler } = Lib.H.useHeading()

  return (
    <Lib.S.HeadingContainer className="container">
      <h1>تمام تراکنش‌ها</h1>

      <div>
        <SelectBox />
        {transactionType === 'trip_financials' && <Input placeholder="جستجوی نام کوریر" value={courier} onChange={courierChangeHandler} />}
      </div>
    </Lib.S.HeadingContainer>
  )
}

export const Transactions: FC<Lib.T.TransactionsProps> = ({}) => {
  const { readAll } = useSelector((_: RootState) => _.transactionsReducer)
  const { goNextPage, grouped, getGroupHeading } = Lib.H.useTransactions()

  return (
    <Lib.S.TransactionsContainer>
      {readAll.res && (
        <InfiniteScroll dataLength={readAll.res.length} next={goNextPage} hasMore={readAll.res.hasMore} loader={<Loader />}>
          {grouped &&
            Object.keys(grouped).map((date, index) => {
              return <GroupedTransactions heading={getGroupHeading(date)} items={grouped[date]} key={index} />
            })}
        </InfiniteScroll>
      )}
    </Lib.S.TransactionsContainer>
  )
}

const SelectBox: FC<Lib.T.SelectBoxProps> = () => {
  const { options, onSelectChange } = Lib.H.useSelectBox()
  return <Select<TransactionType.typesWithAll> defaultValue="all" onChange={onSelectChange} options={options} style={{ width: '150px' }} />
}

const Transaction: FC<Lib.T.TransactionProps> = props => {
  const transpiledDownItems = Lib.H.useTransaction(props)
  const { cost, date, more, time, type } = transpiledDownItems

  return (
    <Lib.S.InfoContainer className={`${cost < 0 ? 'negative' : 'positive'}`}>
      <div>
        <span>
          {time}، {date}
        </span>
        <span>{type}</span>

        {more.length > 0 && (
          <ul>
            {more.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <p>{cost}</p>
    </Lib.S.InfoContainer>
  )
}

const GroupedTransactions: FC<Lib.T.GroupedTransactionsProps> = ({ heading, items }) => {
  return (
    <Dividers header={heading} top="52px">
      {items.map((item, index) => (
        <Transaction key={index} {...item} />
      ))}
    </Dividers>
  )
}

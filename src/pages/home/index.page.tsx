import { FC } from 'react'
import * as Lib from './lib'

export const HomePage: FC = () => {
  return (
    <Lib.S.HomePageContainer className="container">
      <Lib.C.Heading />
      <Lib.C.Transactions />
    </Lib.S.HomePageContainer>
  )
}

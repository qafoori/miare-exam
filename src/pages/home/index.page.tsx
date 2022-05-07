import type { FC } from 'react'
import * as Lib from './lib'

/**
 *
 *
 * first (home) page of the application
 */
export const HomePage: FC = () => {
  return (
    <Lib.S.HomePageContainer className="container">
      <Lib.C.Heading />
      <Lib.C.Transactions />
    </Lib.S.HomePageContainer>
  )
}

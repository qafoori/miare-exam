import { FC } from 'react'
import * as Lib from './lib'
import '../../core/styles/index.scss'

export const HomePage: FC = () => {
  return (
    <Lib.S.HomePageContainer>
      <Lib.C.Heading></Lib.C.Heading>
    </Lib.S.HomePageContainer>
  )
}

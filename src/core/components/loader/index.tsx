import { FC } from 'react'
import * as Lib from './lib'
import { Spin } from 'antd'

export const Loader: FC<Lib.T.LoaderProps> = ({ spinner, ...rest }) => {
  return (
    <Lib.S.LoaderContainer {...rest}>
      <Spin {...spinner} size={spinner?.size || 'large'} />
    </Lib.S.LoaderContainer>
  )
}

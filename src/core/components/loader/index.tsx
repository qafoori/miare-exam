import * as Lib from './lib'
import { Spin } from 'antd'
import type { FC } from 'react'

/**
 *
 *
 * a loading animation component that manipulates the AntDesign Spin component
 *
 * @spinner AntDesign Spinner component props
 * @rest extended from html div element attributes
 */
export const Loader: FC<Lib.T.LoaderProps> = ({ spinner, ...rest }) => {
  return (
    <Lib.S.LoaderContainer {...rest}>
      <Spin {...spinner} size={spinner?.size || 'large'} />
    </Lib.S.LoaderContainer>
  )
}

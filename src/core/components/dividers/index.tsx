import type { FC } from 'react'
import * as Lib from './lib'

export const Dividers: FC<Lib.T.DividersProps> = ({ children, header, top = '0', ...rest }) => {
  return (
    <Lib.S.DividersContainer {...rest} top={top} className={`${rest.className ? rest.className : ''} dividersComponent`}>
      <div className="header">{header}</div>

      <div className="body">{children}</div>
    </Lib.S.DividersContainer>
  )
}

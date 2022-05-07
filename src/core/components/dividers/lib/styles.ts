import styled from 'styled-components'
import * as Lib from '.'

export const DividersContainer = styled.div<Pick<Lib.T.DividersProps, 'top'>>`
  > .header {
    width: 100%;
    /* position: sticky;
    top: ${({ top }) => top}; */
  }
`

import { SpinProps } from 'antd'
import { HTMLAttributes } from 'react'

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  spinner?: SpinProps
}

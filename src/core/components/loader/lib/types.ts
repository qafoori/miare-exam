import { SpinProps } from 'antd'
import type { HTMLAttributes } from 'react'

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  spinner?: SpinProps
}

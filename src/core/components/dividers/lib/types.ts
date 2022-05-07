import type { HTMLAttributes, ReactNode } from 'react'

export interface DividersProps extends HTMLAttributes<HTMLDivElement> {
  header: ReactNode
  top?: string
}

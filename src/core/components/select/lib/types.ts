import { SelectProps as AntSelectProps } from 'antd'

export interface SelectProps<K = string> extends Omit<AntSelectProps, 'options' | 'defaultValue'> {
  options: SelectOption<K>[]
  defaultValue: K
}

export type SelectOption<Key = string> = {
  key: Key
  value: SelectKey
  disabled?: boolean
}

export type SelectKey = string | number

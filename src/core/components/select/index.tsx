import { FC, PropsWithChildren } from 'react'
import * as Lib from './lib'
import { Select as AntSelect } from 'antd'

const { Option } = AntSelect

/**
 *
 *
 * a select component that manipulates the AntDesign Select component
 *
 * @options an array of select options { Lib.T.SelectOption<Key>[] }
 * @rest extended from AntDesign { SelectProps }
 */
export function Select<Key = string>({ options, ...rest }: PropsWithChildren<Lib.T.SelectProps<Key>>): JSX.Element {
  return (
    <AntSelect {...rest} className={`${rest.className ? rest.className : ''} selectComponent`}>
      {options.map(({ value, key, disabled }, index) => (
        <Option value={key} disabled={disabled} key={index}>
          {value}
        </Option>
      ))}
    </AntSelect>
  )
}

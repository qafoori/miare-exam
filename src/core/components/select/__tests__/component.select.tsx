import React from 'react'
import { render, screen } from '@testing-library/react'
import { Select } from '..'
import * as Lib from '../lib'

it('should render Divider component with specific texts inside', () => {
  const selectOptions: Lib.T.SelectOption[] = [
    { key: 'key1', value: 'value1' },
    { key: 'key2', value: 'value2' },
    { key: 'key3', value: 'value3' },
  ]

  render(<Select options={selectOptions} defaultValue={selectOptions[0].key} />)

  const selectElement = screen.getByText(selectOptions[0].value)
  expect(selectElement).toBeInTheDocument()
})

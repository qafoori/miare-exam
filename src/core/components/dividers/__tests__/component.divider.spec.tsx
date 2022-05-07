import React from 'react'
import { render, screen } from '@testing-library/react'
import { Dividers } from '..'

it('should render Divider component with specific texts inside', () => {
  const header = 'header'
  const bodyTestID = 'bodyID'

  render(
    <Dividers header={header}>
      <p data-testid={bodyTestID}>content of body</p>
    </Dividers>,
  )

  const headerElement = screen.getByText(header)
  const bodyElement = screen.getByTestId(bodyTestID)

  expect(headerElement).toBeInTheDocument()
  expect(bodyElement).toBeInTheDocument()
})

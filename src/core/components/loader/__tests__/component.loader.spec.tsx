import React from 'react'
import { render, screen } from '@testing-library/react'
import { Loader } from '..'

it('should render Divider component with specific texts inside', () => {
  const loaderComponentID = 'loaderComponent'

  render(<Loader data-testid={loaderComponentID} />)

  const loaderElement = screen.getByTestId(loaderComponentID)

  expect(loaderElement).toBeInTheDocument()
})

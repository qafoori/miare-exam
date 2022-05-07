import React from 'react'
import { render, screen } from '@testing-library/react'
import { MiareExam } from './App'

test('renders learn react link', () => {
  render(<MiareExam />)
  const linkElement = screen.getByText(/تمام تراکنش‌ها/i)
  expect(linkElement).toBeInTheDocument()
})

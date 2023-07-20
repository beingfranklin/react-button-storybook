import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('renders button with text', () => {
    render(<Button>Test Button</Button>)
    const buttonText = screen.getByText(/Test Button/i)
    expect(buttonText).toBeInTheDocument()
  })

  test('renders loading state', () => {
    render(<Button isLoading={true}>Test Button</Button>)
    const buttonText = screen.getByText(/Loading.../i)
    expect(buttonText).toBeInTheDocument()
  })

  test('is disabled when loading', () => {
    render(<Button isLoading={true}>Loading Button</Button>)
    const button = screen.getByRole('button', { name: /Loading.../i })
    expect(button).toBeDisabled()
  })

  test('is disabled when `disabled` prop is true', () => {
    render(<Button isDisabled={true}>Test Button</Button>)
    const button = screen.getByRole('button', { name: /Test Button/i })
    expect(button).toBeDisabled()
  })

})

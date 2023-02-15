import { Button } from '@/components/atoms'
import { render } from '@testing-library/react'
describe('', () => {
  it('renders', () => {
    const { container } = render(<Button />)
    expect(container).toMatchSnapshot()
  })
})

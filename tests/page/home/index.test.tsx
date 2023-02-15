import { CheckBox } from '@/components/atoms'
import { render } from '@testing-library/react'
describe('', () => {
  it('renders', () => {
    const { container } = render(<CheckBox />)
    expect(container).toMatchSnapshot()
  })
})

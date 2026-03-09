import { render } from '@testing-library/react'
import { KeyView } from '../../src/components/Key'
import KeyModel from '../../src/components/Key/key-model'

const makeKey = (overrides?: Partial<{ Code: string; Symbol: string; Width: string; Row: string }>) =>
  new KeyModel({ Code: 'KeyA', Symbol: 'A', Width: 'w-1', Row: 'r-1', ...overrides })

test('renders the key symbol', () => {
  const { getByText } = render(<KeyView keyModel={makeKey({ Symbol: 'Enter' })} />)
  expect(getByText('Enter')).toBeInTheDocument()
})

test('sets data-code attribute to the key code', () => {
  const { container } = render(<KeyView keyModel={makeKey({ Code: 'ShiftLeft', Symbol: 'Shift' })} />)
  expect(container.querySelector('[data-code="ShiftLeft"]')).toBeInTheDocument()
})

test('applies no state class when state is undefined', () => {
  const { container } = render(<KeyView keyModel={makeKey()} />)
  const keyDiv = container.firstChild as HTMLElement
  expect(keyDiv.className).not.toMatch(/pressed/)
  expect(keyDiv.className).not.toMatch(/tested/)
})

test('applies pressed class when state is "pressed"', () => {
  const { container } = render(<KeyView keyModel={makeKey()} state="pressed" />)
  const keyDiv = container.firstChild as HTMLElement
  expect(keyDiv.className).toMatch(/pressed/)
})

test('applies tested class when state is "tested"', () => {
  const { container } = render(<KeyView keyModel={makeKey()} state="tested" />)
  const keyDiv = container.firstChild as HTMLElement
  expect(keyDiv.className).toMatch(/tested/)
})

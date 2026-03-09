import { render } from '@testing-library/react'
import { Keyboard } from '../../src/components/Keyboard'
import KeyModel from '../../src/components/Key/key-model'

const makeKey = (code: string, symbol: string) =>
  new KeyModel({ Code: code, Symbol: symbol, Width: 'w-1', Row: 'r-1' })

test('renders a key element for each KeyModel', () => {
  const keys = [makeKey('KeyA', 'A'), makeKey('KeyB', 'B'), makeKey('KeyC', 'C')]
  const { getByText } = render(<Keyboard keys={keys} keyStates={new Map()} />)
  expect(getByText('A')).toBeInTheDocument()
  expect(getByText('B')).toBeInTheDocument()
  expect(getByText('C')).toBeInTheDocument()
})

test('passes the correct state to each key', () => {
  const keys = [makeKey('KeyA', 'A'), makeKey('KeyB', 'B')]
  const keyStates = new Map<KeyCode, KeyState>([['KeyA', 'pressed'], ['KeyB', 'tested']])
  const { container } = render(<Keyboard keys={keys} keyStates={keyStates} />)

  const keyA = container.querySelector('[data-code="KeyA"]') as HTMLElement
  const keyB = container.querySelector('[data-code="KeyB"]') as HTMLElement
  expect(keyA.className).toMatch(/pressed/)
  expect(keyB.className).toMatch(/tested/)
})

test('renders all 104 ANSI keys from KeyModel.getAllKeys()', () => {
  const keys = KeyModel.getAllKeys()
  const { container } = render(<Keyboard keys={keys} keyStates={new Map()} />)
  expect(container.querySelectorAll('[data-code]')).toHaveLength(104)
})

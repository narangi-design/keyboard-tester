import { renderHook, act } from '@testing-library/react'
import useKeyStates from '../../src/hooks/useKeyStates'

test('initial state is an empty Map', () => {
  const { result } = renderHook(() => useKeyStates())
  expect(result.current.size).toBe(0)
})

test('keydown marks the key as "pressed"', () => {
  const { result } = renderHook(() => useKeyStates())
  act(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyA', bubbles: true }))
  })
  expect(result.current.get('KeyA')).toBe('pressed')
})

test('keyup after keydown marks the key as "tested"', () => {
  const { result } = renderHook(() => useKeyStates())
  act(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', bubbles: true }))
    window.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space', bubbles: true }))
  })
  expect(result.current.get('Space')).toBe('tested')
})

test('multiple keys are tracked independently', () => {
  const { result } = renderHook(() => useKeyStates())
  act(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyA', bubbles: true }))
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyB', bubbles: true }))
    window.dispatchEvent(new KeyboardEvent('keyup', { code: 'KeyA', bubbles: true }))
  })
  expect(result.current.get('KeyA')).toBe('tested')
  expect(result.current.get('KeyB')).toBe('pressed')
})

test('event listeners are removed on unmount', () => {
  const { result, unmount } = renderHook(() => useKeyStates())
  unmount()
  act(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyZ', bubbles: true }))
  })
  expect(result.current.get('KeyZ')).toBeUndefined()
})

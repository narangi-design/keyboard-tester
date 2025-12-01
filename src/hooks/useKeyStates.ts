import { useState, useEffect } from 'react'

export default function useKeyStates() {

  const [keysState, setKeysState] = useState(() => new Map<KeyCode, KeyState>())

  const markKeyPressed = (keyCode: KeyCode) => {
    setKeysState(prev => {
      const next = new Map(prev)
      next.set(keyCode, 'pressed')
      return next
  })
  }

  const markKeyTested = (keyCode: KeyCode) => {
    setKeysState(prev => {
      const next = new Map(prev)
      next.set(keyCode, 'tested')
      return next
  })
  }

  useEffect(() => {
    const keyPressedEvent = (event: KeyboardEvent) => {
      event.preventDefault()
      markKeyPressed(event.code)
    }
    window.addEventListener('keydown', keyPressedEvent)

    const keyReleasedEvent = (event: KeyboardEvent) => {
      markKeyTested(event.code)
    }
    window.addEventListener('keyup', keyReleasedEvent)

    return() => {
      window.removeEventListener('keydown', keyPressedEvent)
      window.removeEventListener('keyup', keyReleasedEvent)
    }
  }, [])

  return keysState
}
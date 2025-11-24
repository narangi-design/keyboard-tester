import { useState, useEffect } from 'react'

export default function usePressedKeys() {
    const [pressedKeys, setPressedKeys] = useState(() => new Set<string>())

  const markKeyPressed = (key: string) => {
    setPressedKeys(prev => new Set(prev).add(key))
  }

  const markKeyUnpressed = (key: string) => {
    setPressedKeys(prev => {
      const next = new Set(prev)
      next.delete(key)
      return next
    })
  }

  useEffect(() => {
    const keyPressedEvent = (event: KeyboardEvent) => {
      markKeyPressed(event.code)
    }
    window.addEventListener('keydown', keyPressedEvent)

    const keyReleasedEvent = (event: KeyboardEvent) => {
      markKeyUnpressed(event.code)
    }
    //window.addEventListener('keyup', keyReleasedEvent)

    return() => {
      window.removeEventListener('keydown', keyPressedEvent)
      window.removeEventListener('keyup', keyReleasedEvent)
    }
  }, [])

  return pressedKeys
}
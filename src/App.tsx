import { useState, useEffect } from 'react'
import Keyboard from './components/Keyboard'
import { getKeySymbols } from './utils/key'
import './App.css'

function App() {
  const [keys, setKeys] = useState(() => getKeySymbols())
  const [pressedKeys, setPressedKeys] = useState(() => new Set())

  const markKeyPressed = (key: string) => {
    setPressedKeys(prev => new Set(prev).add(key));
  }

  const markKeyUnpressed = (key: string) => {
    setPressedKeys(prev => {
      const next = new Set(prev);
      next.delete(key);
      return next;
    });
  }

  useEffect(() => {
    const keyPressedEvent = (event: KeyboardEvent) => {
      const keyCode = event.code
      console.log(keyCode, ' is pressed')
      markKeyPressed(keyCode)
    }
    window.addEventListener('keydown', keyPressedEvent)

    const keyReleasedEvent = (event: KeyboardEvent) => {
      const keyCode = event.code
      console.log(keyCode, ' is released')
      markKeyUnpressed(keyCode)
    }
    window.addEventListener('keyup', keyReleasedEvent)

    return() => {
      window.removeEventListener('keydown', keyPressedEvent)
      window.removeEventListener('keyup', keyReleasedEvent)
    }
  }, [])

  return (
    <>
      <div className="app">
        <Keyboard keys={keys}></Keyboard>
      </div>
    </>
  )
}


export default App

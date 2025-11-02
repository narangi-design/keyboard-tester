import { useState, useEffect } from 'react'
import Keyboard from './components/Keyboard'
import { getKeys } from './utils/key'
import './App.css'

function App() {
  const [keys, setKeys] = useState([])

  useEffect(() => {
    const initialKeyboard = getKeys()
    setKeys(initialKeyboard)

    const keyPressedEvent = event => {
      const keyCode = event.code
      console.log(keyCode, ' is pressed')
      
    }
    window.addEventListener('keydown', keyPressedEvent)

    const keyReleasedEvent = event => {
      const keyCode = event.code
      console.log(keyCode, ' is released')
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

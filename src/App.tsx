import './App.css'
import Keyboard from './components/Keyboard'
import { Key } from './utils/key'
import usePressedKeys from './hooks/usePressedKeys'

function App() {
  const keys = Key.getAllKeys()
  const pressedKeys = usePressedKeys()  

  return (
    <>
      <div className="app">
        <Keyboard keys={keys} pressedKeys={pressedKeys}></Keyboard>
      </div>
    </>
  )
}

export default App
import { Keyboard } from './components/Keyboard'
import { KeyModel } from './components/Key'
import { MobileOverlay } from './components/MobileOverlay'
import useKeyStates from './hooks/useKeyStates'

function App() {
  const keys = KeyModel.getAllKeys()
  const keyStates = useKeyStates()

  return (
    <>
      <MobileOverlay />
      <div className='app'>
        <Keyboard keys={keys} keyStates={keyStates}></Keyboard>
      </div>
    </>
  )
}

export default App
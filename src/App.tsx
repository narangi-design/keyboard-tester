import { Keyboard } from './components/Keyboard'
import { KeyModel } from './components/Key'
import useKeyStates from './hooks/useKeyStates'

function App() {
  const keys = KeyModel.getAllKeys()
  const keyStates = useKeyStates()

  return (
    <>
      <div className='app'>
        <Keyboard keys={keys} keyStates={keyStates}></Keyboard>
      </div>
    </>
  )
}

export default App
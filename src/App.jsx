import { useState } from 'react'
import ColorSquare from './ColorSquare'
import InputColor from './InputColor'

function App() {
  const [color, setColor] = useState('')

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <ColorSquare color={color} />
      <InputColor setColor={setColor}/>
    </div>
  )
}

export default App

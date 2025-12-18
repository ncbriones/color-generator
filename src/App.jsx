import { useState } from 'react'
import ColorSquare from './components/ColorSquare'
import InputColor from './components/InputColor'

function App() {
  const [color, setColor] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [open, setOpen] = useState(false)

  const handleCopyDoubleClick = async () => {
    try {
      await navigator.clipboard.writeText(hexValue)
      setOpen(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <ColorSquare 
        color={color} 
        hexValue={hexValue} 
        handleCopyDoubleClick={handleCopyDoubleClick}
        open={open}
        setOpen={setOpen}
      />
      <InputColor 
        color={color} 
        setColor={setColor} 
        setHexValue={setHexValue} 
      />
    </div>
  )
}

export default App

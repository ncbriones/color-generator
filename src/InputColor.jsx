
const InputColor = ({ setColor }) => {
  return (
    <input 
      autoFocus
      className='border-2 px-4 py-2 rounded font-normal mt-2 shadow-2xs text-stone-900'
      type='text' 
      placeholder='Input color'
      onChange={(e) => setColor(e.target.value)}
    />
  )
}

export default InputColor
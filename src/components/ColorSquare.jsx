
const ColorSquare = ({ color }) => {
  return (
    <div style={{backgroundColor: color}} className='flex border-2 p-4 w-65 h-65 rounded justify-center items-center text-slate-950 shadow-md'>
      <p className='font-medium text-lg tracking-wide'>{(color) ? color : 'Empty Value'}</p>
    </div>
  )
}

export default ColorSquare
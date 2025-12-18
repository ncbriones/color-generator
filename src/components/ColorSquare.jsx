import { Tooltip, Snackbar, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close";

const ColorSquare = ({ 
  color, 
  hexValue, 
  handleCopyDoubleClick, 
  open, 
  setOpen
}) => {

  const handleCloseSnackBar = () => {
    setOpen(false)
  }

  return (
    <div style={{backgroundColor: color}} className='flex flex-col border-2 p-4 w-65 h-65 rounded justify-center items-center text-slate-950 shadow-md'>
      <p 
        style={{ color: color === 'black' || color === '#000000' ? 'white' : 'black' }} 
        className='font-medium text-lg tracking-wide'
      >
        {(color) ? color : 'Empty Value'}
      </p>
      <Tooltip 
        title='Double click to copy' 
        arrow
        slotProps={{
          tooltip: {
            sx: {
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
            },
            className: '!bg-black'
          },
          arrow: {
            className: '!text-black'
          }
        }}
      >
        <p 
          style={{color: color === 'black' ? 'white' : 'black'}} 
          className='font-medium text-base tracking-wide hover:underline' 
          onDoubleClick={handleCopyDoubleClick}
        >
          {hexValue ? hexValue : null}
        </p>
        <Snackbar 
          anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
          open={open}
          autoHideDuration={3000}
          onClose={(_, reason) => {
            if (reason === 'clickaway') return;
            setOpen(false)
          }}
          message='Copied to clipboard' 
          action={
            <IconButton
              size="small"
              aria-label="close"
              onClick={handleCloseSnackBar}
            >
              <CloseIcon 
                className="text-white hover:bg-white/20 hover:rounded-full hover:transition-colors" 
                fontSize="small" 
              />
            </IconButton>    
          }
        />
      </Tooltip>
    </div>
  )
}

export default ColorSquare
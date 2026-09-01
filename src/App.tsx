import { useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from '@mui/material'

interface ButtonItem {
  label: string
  targetUrl: string
  color: string
}

const buttons: ButtonItem[] = [
  { label: 'ボタン1', targetUrl: '#', color: '#4A90D9' },
  { label: 'ボタン2', targetUrl: '#', color: '#E67E22' },
  { label: 'ボタン3', targetUrl: '#', color: '#27AE60' },
  { label: 'ボタン4', targetUrl: '#', color: '#8E44AD' },
]

function App() {
  const [open, setOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState('')

  const handleClick = (label: string) => {
    setSelectedLabel(label)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 4,
      }}
    >
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {buttons.map((btn, index) => (
          <Grid size={{ xs: 6, sm: 5 }} key={index}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick(btn.label)}
              sx={{
                backgroundColor: btn.color,
                fontSize: { xs: '1.2rem', md: '1.6rem' },
                padding: { xs: '24px', md: '32px' },
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: btn.color + 'dd',
                },
              }}
            >
              {btn.label}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>{selectedLabel}</DialogTitle>
        <DialogContent>
          このボタンをクリックすると、別URLにジャンプします。
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default App

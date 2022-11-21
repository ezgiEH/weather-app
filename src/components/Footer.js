import React from 'react'
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';

function Footer() {
  return (
    <Box sx={{height: '30vh'}}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ezgi Hocaoğlu
      </Typography>
    </Box>
  )
}

export default Footer
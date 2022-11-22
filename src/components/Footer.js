import React from 'react'
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';

function Footer() {
  return (
    <Box sx={{height: '30vh'}}>
      <Typography sx={{ fontSize: 36 ,
        textAlign: 'center',
        marginTop: '10vh',
        fontWeight: 'bold',
        }} gutterBottom>
          <a href='https://www.linkedin.com/in/ezgihocaoglu/'>Ezgi Hocaoğlu</a>
      </Typography>
    </Box>
  )
}

export default Footer
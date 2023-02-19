import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='bg-green-700'>
          <h1 className='font-bold text-3xl text-white pl-3' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alienware Market
          </h1>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


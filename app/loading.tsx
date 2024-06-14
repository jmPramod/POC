'use client';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 100,
      }}
    >
      <CircularProgress />
    </Box>
  );
}

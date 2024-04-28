import React from 'react';
import { Grid, Typography } from "@mui/material";

import logo from '../assets/logo.png';

function Header() {
  return (
    <div style={{ display: 'flex', padding: 10 }}>
      <div style={{ flex: 1 }}>
        <img src={logo} width={'100px'} alt="" />
      </div>
      <Grid item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4,  }}>
        <Typography variant='h6' sx={{ color: '#000', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', textDecorationColor: '#FF4D00', textDecorationThickness: '5px',cursor:'pointer' } }}href="#section1">Home</Typography>
        <Typography variant='h6' sx={{ color: '#000', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', textDecorationColor: '#FF4D00', textDecorationThickness: '5px',cursor:'pointer' } }} href="#section4">About US</Typography>
        <Typography variant='h6' sx={{ color: '#000', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', textDecorationColor: '#FF4D00', textDecorationThickness: '5px',cursor:'pointer' } }} href="#section3">Services</Typography>
        <Typography variant='h6' sx={{ color: '#000', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', textDecorationColor: '#FF4D00', textDecorationThickness: '5px',cursor:'pointer' } }}href="#section5">Contact Us</Typography>
      </Grid>
    </div>
  );
}

export default Header;

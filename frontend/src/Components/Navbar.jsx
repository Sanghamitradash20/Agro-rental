import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../images/logo-removebg-preview.png";

export default () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'skyblue' }}>
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ 
              marginRight: isSmallScreen ? '5px' : '10px', 
              width: isSmallScreen ? '30px' : (isMediumScreen ? '40px' : (isLargeScreen ? '50px' : '60px')),
              height: isSmallScreen ? '30px' : (isMediumScreen ? '40px' : (isLargeScreen ? '50px' : '60px'))
            }} 
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: isSmallScreen ? '10px' : (isMediumScreen ? '16px' : '24px') }}> 
            AGRIRENTEL
          </Typography>
          <Stack direction="row" spacing={isSmallScreen ? 0 : 2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" sx={{ fontSize: isSmallScreen ? '10px' : (isMediumScreen ? '12px' : '14px'), padding: isSmallScreen ? '0.5px 0.5px' : '6px 10px' }}>Home</Button> 
            <Button color="inherit" sx={{ fontSize: isSmallScreen ? '10px' : (isMediumScreen ? '12px' : '14px'), padding: isSmallScreen ? '0.5px 0.5px' : '6px 10px' }}>About Us</Button> 
            <Button color="inherit" sx={{ fontSize: isSmallScreen ? '9px' : (isMediumScreen ? '12px' : '14px'), padding: isSmallScreen ? '0.5px 0.5px' : '6px 10px' }}>Contact US</Button> 
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

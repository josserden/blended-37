import * as React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <>
      <AppBar position="static" sx={{ paddingY: '15px' }}>
        <Container maxWidth="lg">
          <Box component="nav">
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? '#fffc00' : '#bdc3c7',
                };
              }}
              to={'/'}>
              <Button color="inherit">Home</Button>
            </NavLink>

            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? '#fffc00' : '#bdc3c7',
                };
              }}
              to={'/add'}>
              <Button color="inherit">Add Info</Button>
            </NavLink>
          </Box>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}

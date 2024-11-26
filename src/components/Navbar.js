import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';

const Navbar = () => {
  const { access_token } = getToken();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* Updated Navbar Colors */}
        <AppBar position="static" sx={{ backgroundColor: 'red' }}>
          <Toolbar>
            {/* Updated Typography Style */}
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 'bold', color: '#FFFFFF' }}
            >
              Online Ambulance Service
            </Typography>

            {/* Buttons with updated styles */}
            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#81C784' : '',
                color: isActive ? '#FFFFFF' : '#F1F8E9',
              })}
              sx={{ textTransform: 'none', mx: 1 }}
            >
              Home
            </Button>

            <Button
              component={NavLink}
              to="/contact"
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#81C784' : '',
                color: isActive ? '#FFFFFF' : '#F1F8E9',
              })}
              sx={{ textTransform: 'none', mx: 1 }}
            >
              Contact
            </Button>

            {access_token ? (
              <Button
                component={NavLink}
                to="/dashboard"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#81C784' : '',
                  color: isActive ? '#FFFFFF' : '#F1F8E9',
                })}
                sx={{ textTransform: 'none', mx: 1 }}
              >
                Dashboard
              </Button>
            ) : (
              <Button
                component={NavLink}
                to="/login"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#6A1B9A' : '',
                  color: isActive ? '#FFFFFF' : '#EDE7F6',
                })}
                sx={{ textTransform: 'none', mx: 1 }}
              >
                Login/Registration
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

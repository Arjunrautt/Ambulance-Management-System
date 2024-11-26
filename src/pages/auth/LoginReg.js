import React, { useState } from 'react';
import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import Pic1 from '../../images/pic1.png';
import Registration from './Registration';
import UserLogin from './UserLogin';
import { ShoppingBag } from '@mui/icons-material';

// Import the CSS file
import '../css/loginreg.css';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container className="neon-background">
        {/* Left Image Section */}
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Pic1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', sm: 'block' },
          }}
        ></Grid>

        {/* Right Card Section */}
        <Grid item lg={5} sm={7} xs={12}>
          <Card className="card-style">
            <Box sx={{ width: '100%', height: '100%' }}>
              {/* Tabs Section */}
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor='secondary'
                  indicatorColor='secondary'
                  className="tab-indicator"
                >
                  <Tab label='Login' className="tab-style" />
                  <Tab label='Registration' className="tab-style" />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
            <Box textAlign='center' sx={{ mt: 2 }}>
              <ShoppingBag sx={{ color: 'purple', fontSize: 100 }} />
              <Typography variant='h5' className="typography-style">
                Geek-Shop
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;

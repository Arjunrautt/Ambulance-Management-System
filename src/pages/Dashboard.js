import React from 'react';
import { Link } from 'react-router-dom';

import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
const Dashboard = () => {
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])

  return <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <Typography variant='h6'>{userData.name}</Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
    </Grid>
    <>
     <header>
        <div className=" top-nav">
            <div className="s-icons">
                <i className="fa fa-facebook" ></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-whatsapp"></i>
                <i className="fa fa-google"></i>
            </div>
            <div className="contact">
                Contact : 99999999999
            </div>
        </div>
        <nav className='l'>
                <div className="logo">
                    Ambulance
                </div>
        </nav>
        <div className="container">
            <div className="left">
            <h1>
            <span>We Provide .</span>
                  Efficient And Immediate <span>Ambulance Services</span></h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam dignissimos enim pariatur, 
                    ex praesentium aliquam officiis id ea, repudiandae dicta, iure animi fuga nostrum beatae tempora harum aspernatur. Ad!</h5>
                {/* <button className='btn1'>Emergency Booking</button> */}
                <Link to='/ambdetails'><button className="btn2">Emergency</button> </Link>
            </div>
            <div className="right">
                <div className="imgauto">

                </div>
            </div>
        </div>
        
    </header>
    </>
  </>;
};

export default Dashboard;

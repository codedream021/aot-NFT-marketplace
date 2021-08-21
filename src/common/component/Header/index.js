import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Profile from '../../../assets/profile_avatar.svg'
import './style.css'

const Header = () => {
  const path = window.location.pathname

  return (
    <div className="header">
      <Container maxWidth="lg">
        <div className="header-inner">
          <AppBar position="static">
            <Toolbar>
              <Link to="/">
                <Typography variant="h6" className="logo" >
                  Aot Logo
                </Typography>
              </Link>
              <div className="right-bar">
                <Button color="inherit">About AOT</Button>
                {path !== '/' ? 
                  <Button color="inherit">Login</Button>  
                  :
                  <Button color="inherit">Login / Sign Up</Button>
                }
                {path !== '/' &&
                  <img className="avatar" src={Profile} alt="profile"/>
                }
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </Container>
    </div>
  )
}

export default Header

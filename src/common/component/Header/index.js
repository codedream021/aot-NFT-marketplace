import React from 'react'
import './style.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Header = () => {
  return (
    <div className="header">
      <Container maxWidth="lg">
        <div className="header-inner">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className="logo" >
                Aot Logo
              </Typography>
              <div>
                <Button color="inherit">About AOT</Button>
                <Button color="inherit">Login / Sign Up</Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </Container>
    </div>
  )
}


export default Header
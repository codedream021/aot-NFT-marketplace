import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import Profile from '../../../assets/profile_avatar.svg'
import './style.css'

const Header = () => {
  const path = window.location.pathname

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const { mobileView, drawerOpen } = state;


  // const getDrawerChoices = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Link
  //         {...{
  //           component: RouterLink,
  //           to: href,
  //           color: "inherit",
  //           style: { textDecoration: "none" },
  //           key: label,
  //         }}
  //       >
  //         <MenuItem>{label}</MenuItem>
  //       </Link>
  //     );
  //   });
  // };


  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <Link to="/">
          <Typography variant="h6" className="logo" >
            Aot Logo
          </Typography>
        </Link>
        <IconButton
          {...{
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>
            <Button color="inherit">About AOT</Button>
            {path !== '/' ?
              <Button color="inherit">Login</Button>
              :
              <Button color="inherit">Login / Sign Up</Button>
            }
            {path !== '/' &&
              <img className="avatar" src={Profile} alt="profile" />
            }
          </div>
        </Drawer>
      </Toolbar>
    );
  };
  
  const displayDesktop = () => {
    return (
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
            <img className="avatar" src={Profile} alt="profile" />
          }
        </div>
      </Toolbar>
    );
  };

  return (
    <div className="header">
      <Container maxWidth="lg">
        <div className="header-inner">
          <AppBar position="static">
            {mobileView ? displayMobile() : displayDesktop()}
          </AppBar>
        </div>
      </Container>
    </div>
  )
}

export default Header

import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Container from '@material-ui/core/Container';
import './style.css'
const Layout = (props) => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg" className="container">
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout

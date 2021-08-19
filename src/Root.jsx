import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'


const Root = () => {
    return (
      <Router>
          <Routes />
      </Router>
    )
}

export default Root

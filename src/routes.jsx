import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import Home from './views/Home'
// import '../style/index.scss'

export default withRouter(() => {

  return (
    <Switch>
      <Route exact path="*" component={Main} />
    </Switch>
  )
})

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

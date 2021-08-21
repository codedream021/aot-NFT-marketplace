import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import Home from './views/Home'
import AdvanceSearch from './views/AdvanceSearch'
import AceResults from './views/AceResults'
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
      <Route exact path="/advance_search" component={AdvanceSearch} />
      <Route exact path="/ace_results" component={AceResults} />
    </Switch>
  )
}

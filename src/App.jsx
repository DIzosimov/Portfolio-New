import React from 'react';
import LandingPage from './components/LandingPage'
import { Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory({})

const App = () => {
  return (
    <Router history={history}>
      <>
        <Route exact path='/' component={LandingPage} />
      </>
    </Router>
  );
}

export default App;

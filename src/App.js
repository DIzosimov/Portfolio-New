import React from 'react'

import Loadable from 'react-loadable'
import { Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AOS from 'aos'
import 'aos/dist/aos.css';

import LazyLoading from './components/LazyLoading'

const history = createBrowserHistory({})

const asyncLanding = Loadable({
  loader: () => import('./components/LandingPage'),
  loading: LazyLoading
})

const asyncCv = Loadable({
  loader: () => import('./components/Cv'),
  loading: LazyLoading
})

const asyncAbout = Loadable({
  loader: () => import('./components/About'),
  loading: LazyLoading
})

const asyncProjects = Loadable({
  loader: () => import('./components/Projects'),
  loading: LazyLoading
})

const asyncContact = Loadable({
  loader: () => import('./components/Contact'),
  loading: LazyLoading
})

const App = () => {

  AOS.init({
    duration: 1000
  })

  return (
    <Router history={history}>
      <>
        <Route exact path='/' component={asyncLanding} />
        <Route exact path='/cv' component={asyncCv} />
        <Route exact path='/about' component={asyncAbout} />
        <Route exact path='/projects' component={asyncProjects} />
        <Route exact path='/contact' component={asyncContact} />
      </>
    </Router>
  );
}

export default App;

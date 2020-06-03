import React, { useState } from 'react'

import Loadable from 'react-loadable'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AOS from 'aos'
import 'aos/dist/aos.css';

import LazyLoading from './components/LazyLoading'
import SwitchWithSlide from './components/SwitchWithSlide'

const history = createBrowserHistory({})

const asyncLanding = Loadable({
  loader: () => import('./components/LandingPage'),
  loading: LazyLoading
})

const asyncBlog = Loadable({
  loader: () => import('./components/Blog'),
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
  const [animate] = useState(true)

  AOS.init({
    duration: 1000
  })

  const SwitchComponent = animate ? SwitchWithSlide : Switch

  return (
    <Router history={history}>
      <SwitchComponent>
        <Route exact path='/' component={asyncLanding} />
        <Route exact path='/blog' component={asyncBlog} />
        <Route exact path='/about' component={asyncAbout} />
        <Route exact path='/projects' component={asyncProjects} />
        <Route exact path='/contact' component={asyncContact} />
      </SwitchComponent>
    </Router>
  );
}

export default App;

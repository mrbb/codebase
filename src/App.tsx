import React, { lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
// import { useFetchProfile } from 'state/profile/hooks'
import { DatePickerPortal } from 'components/DatePicker'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import { ToastListener } from './contexts/ToastsContext'
import history from './routerHistory'
// Views included in the main bundle


// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page

const NotFound = lazy(() => import('./views/NotFound'))
const Info = lazy(() => import('./views/Info'))
// const Home = lazy(() => import('./views/Home'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  // useFetchProfile()


  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
  
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <NotFound />
            </Route>
            <Route exact path="/farms/auction">
              <Info />
            </Route>
            <Route exact path="/farms/auction">
              <Info />
            </Route>
           
            {/* Using this format because these components use routes injected props. We need to rework them with hooks */}
            <Route exact strict path="/swap" component={NotFound} />
            <Route exact path="/add" component={NotFound} />
            <Route exact path="/create" component={NotFound} />
  

            {/* Redirect */}
            <Route path="/nft">
              <Redirect to="/info" />
            </Route>

            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      <ToastListener />
      <DatePickerPortal />
    </Router>
  )
}

export default React.memo(App)

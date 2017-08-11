'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './js/App'

const renderApp = (NextApp) => {

  ReactDOM.render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app-root"]')
  )
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// start
renderApp(App)

// changes
if (module.hot) {
  module.hot.accept('./js/App', () => {
    const NextApp = require('./js/App').default
    renderApp(NextApp)
  })
}

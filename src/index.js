'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './js/App'

const renderApp = (NextApp) => {
  ReactDOM.render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app-root"]')
  )
}

// start
renderApp(App)

// changes
if (module.hot) {
  module.hot.accept('./js/App', () => {
    const NextApp = require('./js/App').default
    renderApp(NextApp)
  })
}

'use strict'

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TopBar from './components/TopBar'
import BoxLogs from './components/BoxLogs'

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <TopBar />
          <BoxLogs />
        </div>
      </MuiThemeProvider>
    )
  }
};

export default App

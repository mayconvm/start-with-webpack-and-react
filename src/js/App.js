'use strict'

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TopBar from './components/TopBar'
// import Title from './components/Title'

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <TopBar />
      </MuiThemeProvider>
    )
  }
};

export default App

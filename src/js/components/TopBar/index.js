'use strict'

import React from 'react'

import AppBar from 'material-ui/AppBar'
import OptionLog from './Option'

const listBtns = [
  <OptionLog label={'Error'} key={2} />,
  <OptionLog label={'Log'} key={1} />,
  <OptionLog label={'Debug'} key={3} />
]

const styles = {
  position: 'fixed'
}

class TopBar extends React.Component {
  render () {
    return (
      <AppBar
        title='Title'
        style={styles}
        children={<div> {listBtns} </div>}
      />
    )
  }
}

export default TopBar

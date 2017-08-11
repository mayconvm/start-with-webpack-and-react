'use strict'

import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import {BottomNavigationItem} from 'material-ui/BottomNavigation'

import AppBar from 'material-ui/AppBar'

const favoritesIcon = <FontIcon style={{margin: 0}} className='material-icons'>favorite</FontIcon>

const listBtns = [
  <BottomNavigationItem
    key={0}
    label='Favorites'
    icon={favoritesIcon}
    style={{margin: 0}}
  />,
  <BottomNavigationItem
    key={1}
    label='Favorites'
    icon={favoritesIcon}
    style={{margin: 0}}
  />
]

class TopBar extends React.Component {
  render () {
    return (
      <AppBar
        title='Title'
        children={listBtns}
      />
    )
  }
}

export default TopBar

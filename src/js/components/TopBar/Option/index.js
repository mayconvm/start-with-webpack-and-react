'use strict'

import React from 'react'

import Checkbox from 'material-ui/Checkbox'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'

const styles = {
  'block': {
    'maxWidth': 250,
  },
  'checkbox': {
    'marginBottom': 16
  }
}

class OptionLog extends React.Component {
  render () {
    return (
      <Checkbox
        checkedIcon={<Visibility />}
        uncheckedIcon={<VisibilityOff />}
        label={this.props.label}
        style={styles.checkbox}
      />
    )
  }
}

export default OptionLog

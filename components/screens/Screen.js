'use strict'
import React, {Component, View, Text} from 'react-native'
import {Button} from '../Button'
import {Styles} from '../../Styles'

export class Screen extends Component {
  renderActionContainer () {
    if (!this.props.mainAction) {
      return null
    } else {
      return (
        <View style={Styles.actionContainer}>
          <Button label={this.props.mainAction.label} action={() => {this.props.nav.push({name: this.props.mainAction.target})}} />
        </View>
      )
    }
  }

  render () {
    return (
      <View style={Styles.screenContainer}>
        <View style={Styles.contentContainer}>
          {this.props.children}
        </View>
        {this.renderActionContainer()}
      </View>
    )
  }
}

Screen.defaultProps = {
  mainAction: false
}

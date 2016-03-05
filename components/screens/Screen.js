'use strict'
import React, {Component, View, Text} from 'react-native'
import {Button} from '../Button'
import {Styles} from '../../Styles'

export class Screen extends Component {
  render () {
    return (
      <View style={Styles.screenContainer}>
        <View style={Styles.contentContainer}>
          {this.props.children}
        </View>
        <View style={Styles.actionContainer}>
          <Button label="MyButton" action={() => {this.props.nav.push({name: 'welcome'})}} />
        </View>
      </View>
    )
  }
}

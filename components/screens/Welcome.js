'use strict'
import React, {Component, View, Text} from 'react-native'
import {Styles} from '../../Styles'

export class WelcomeScreen extends Component {
  render () {
    return (
      <View style={Styles.screenContainer}>
        <Text style={Styles.headline}>
          Welcome home!
        </Text>
      </View>
    )
  }
}

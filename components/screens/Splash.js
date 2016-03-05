'use strict'
import React, {Component, View, Text} from 'react-native'
import {Button} from '../Button'
import {Styles} from '../../Styles'

export class SplashScreen extends Component {
  render () {
    return (
      <View>
        <Text style={Styles.headline}>
          Go Dutch is loading…
        </Text>
        <Text style={Styles.secondaryText}>More text</Text>
      </View>
    )
  }
}

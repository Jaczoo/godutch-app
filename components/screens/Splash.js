'use strict'
import React, {Component, View, Text} from 'react-native'
import {Styles} from '../../Styles'

export class SplashScreen extends Component {
  render () {
    return (
      <View style={Styles.screenContainer}>
        <Text style={Styles.headline} onPress={() => {this.props.nav.push({name: 'welcome'})}}>
          Go Dutch is loading…
        </Text>
        <Text style={Styles.secondaryText}>More text</Text>
      </View>
    )
  }
}

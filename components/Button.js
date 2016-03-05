'use strict'
import React, {Component, Text, TouchableHighlight, View} from 'react-native'
import {Styles} from '../Styles'

export class Button extends Component {
  render () {
    return (
      <View style={Styles.buttonWrapper}>
        <TouchableHighlight onPress={this.props.action}>
          <Text style={Styles.button}>
            {this.props.label}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

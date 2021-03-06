'use strict'
import React, {Component, View, Text} from 'react-native'
import {Styles} from '../../Styles'
import {Autosuggest} from '../Autosuggest'

export class WelcomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View>
        <Text style={Styles.headline}>
          Where do you want to go Dutch?
        </Text>
        <Text style={Styles.secondaryText}>
          Find a vacation rental to share with your friends
        </Text>
        <Autosuggest placeholder='Choose your destination' />
      </View>
    )
  }
}

const styles = {

}

'use strict'
import React, {Component, View, Text} from 'react-native'
import {Styles} from '../../Styles'
import {Datepicker} from '../Datepicker'

export class DatesScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View>
        <Text style={Styles.headline}>
          When do you want to go Dutch?
        </Text>
        <Text style={Styles.secondaryText}>
          Find a vacation rental to share with your friends
        </Text>
        <Datepicker />
      </View>
    )
  }
}

const styles = {

}

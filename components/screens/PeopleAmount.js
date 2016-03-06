'use strict'
import React, {Component, View, Text, Picker} from 'react-native'
import {Styles} from '../../Styles'

export class PeopleAmountScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: 3
    }
  }

  render () {
    return (
      <View>
        <Text style={Styles.headline}>
          How many do you want to go Dutch with?
        </Text>
        <Text style={Styles.secondaryText}>
          Choose before you search or decide on the fly
        </Text>
        <Picker
          style={{height: 300}}
          selectedValue={this.state.amount}
          onValueChange={(amount) => this.setState({amount: amount})}>
          <Picker.Item label="2+" value="2" />
          <Picker.Item label="3+" value="3" />
          <Picker.Item label="4+" value="4" />
          <Picker.Item label="5+" value="5" />
          <Picker.Item label="6+" value="6" />
          <Picker.Item label="7+" value="7" />
        </Picker>
      </View>
    )
  }
}

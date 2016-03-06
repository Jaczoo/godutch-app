'use strict'
import React, {Component, View, Text, Picker} from 'react-native'
import {Styles} from '../../Styles'

export class BudgetScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      budget: 100
    }
  }

  render () {
    return (
      <View>
        <Text style={Styles.headline}>
          What is your max per person budget?
        </Text>
        <Text style={Styles.secondaryText}>
          By setting this you wont't get results that exceed your budget
        </Text>
        <Picker
          selectedValue={this.state.budget}
          onValueChange={(budget) => this.setState({budget: budget})}>
          <Picker.Item label="20" value="20" />
          <Picker.Item label="50" value="50" />
          <Picker.Item label="75" value="75" />
          <Picker.Item label="100" value="100" />
          <Picker.Item label="125" value="125" />
          <Picker.Item label="150" value="150" />
        </Picker>
      </View>
    )
  }
}

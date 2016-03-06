'use strict'
import React, {Component, View, Text} from 'react-native'
import NewPicker from '../NewPicker'
import {Styles} from '../../Styles'

var options = [
  '20', '50', '75', '100', '125', '150'
]

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
        <Text style={Styles.pickerValue} onPress={()=>{this.refs.picker.show()}}>{this.state.budget}</Text>
        <NewPicker ref={'picker'} options={options}
          onSubmit={(option)=>{
            this.setState({budget: option})
          }}
          />
      </View>
    )
  }
}

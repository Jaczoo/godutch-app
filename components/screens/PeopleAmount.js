'use strict'
import React, {Component, View, Text} from 'react-native'
import NewPicker from '../NewPicker'
import {Input} from '../Input'
import {Styles} from '../../Styles'

const options = [
  '1', '2', '3', '4'
]

export class PeopleAmountScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: '3'
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
        <Text style={Styles.pickerValue} onPress={()=>{this.refs.picker.show()}}>{this.state.amount}</Text>
        <NewPicker ref={'picker'} options={options}
          onSubmit={(option)=>{
              this.setState({amount: option})
          }}
          />
      </View>
    )
  }
}

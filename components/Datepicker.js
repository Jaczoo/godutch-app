'use strict'
import React, {Component, View, DatePickerIOS} from 'react-native'
import {Styles, Colors} from '../Styles'

export class Datepicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: props.date
    }
  }

  onDateChange (date) {
    this.setState({date: date})
  }

  render () {
    return (
      <View>
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          onDateChange={this.onDateChange.bind(this)}
        />
      </View>
    )
  }
}

Datepicker.defaultProps = {
  date: new Date()
}

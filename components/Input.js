'use strict'
import React, {Component, View, TextInput} from 'react-native'
import {Styles, Colors} from '../Styles'

export class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <View style={Styles.textInputWrapper}>
        <TextInput
          style={Styles.textInput}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
          placeholder={this.props.placeholder}
          placeholderTextColor={Colors.input}
        />
      </View>
    )
  }
}

const styles = {

}

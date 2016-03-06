'use strict'
import React, {Component, View, TextInput, Select, Text} from 'react-native'
import {Styles, Colors} from '../Styles'
import {autosuggest} from './service/Api'

export class Autosuggest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      suggestions: []
    }
  }

  render () {
    var texts = this.state.suggestions.map((suggestion) => {
      return (
        <Text key={suggestion} style={Styles.botomBorder} onPress={() => {this.setLocation(suggestion)}}>
          {suggestion}
        </Text>
      )
    })
    return (
      <View style={Styles.textInputWrapper}>
        <TextInput
          style={Styles.textInput}
          onChangeText={(text) => {this.callAndSetState(text)}}
          value={this.state.text}
          placeholder={this.props.placeholder}
          placeholderTextColor={Colors.input}
        />
        <View style={Styles.autosuggestTextItem}>
          {texts}
        </View>
      </View>
    )
  }

  setLocation(loc) {
    this.setState({text:loc, suggestions: []})
  }

  callAndSetState(text) {
    console.log("call and set...")
    this.setState({text:text, suggestions: []})
    autosuggest(text).then((value) => {
      this.setState({suggestions: value })
    }).catch((error) => {console.log(error)})
  }


}

const styles = {

}

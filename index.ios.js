'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Styles} from './Styles'
import {Navigation} from './components/Navigation'

class godutch extends Component {
  render() {
    return (
      <View style={Styles.mainContainer}>
        <Navigation />
      </View>
    );
  }
}

AppRegistry.registerComponent('godutch', () => godutch);

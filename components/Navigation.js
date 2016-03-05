'use strict'
import React, {Component, Navigator, TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Screen, WelcomeScreen, SplashScreen} from './screens/'
import {Styles} from '../Styles'

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={Styles.navBarLeftButton}>
        <Icon name="rocket" size={30} color="#900" />
      </TouchableOpacity>
    );
  },
  RightButton: function(route, navigator, index, navState) {
    return null
  },
  Title: function(route, navigator, index, navState) {
    return null
  }
}

export class Navigation extends Component {
  render () {
    return (
      <Navigator
        initialRoute={{name: 'splash', id: 0}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar style={Styles.navBar} routeMapper={NavigationBarRouteMapper} />
        }
      />
    )
  }

  renderScene (route, nav) {
    switch (route.name) {
      case 'splash':
        return (
          <Screen nav={nav}>
            <SplashScreen nav={nav} />
          </Screen>
        )
      case 'welcome':
        return (
          <Screen nav={nav}>
            <WelcomeScreen nav={nav} />
          </Screen>
        )
      default:
        return (
          <Screen nav={nav}>
            <WelcomeScreen nav={nav} />
          </Screen>
        )
    }
  }
}

'use strict'
import React, {Component, Navigator, TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Screen, WelcomeScreen, SplashScreen, DatesScreen, DetailScreen} from './screens/'
import {Styles} from '../Styles'

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Icon name="angle-left" style={[Styles.toolbarIcon, Styles.navBarLeft]} />
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
        initialRoute={{name: 'welcome', id: 1}}
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
          <Screen nav={nav} mainAction={false}>
            <SplashScreen nav={nav} />
          </Screen>
        )
      case 'welcome':
        return (
          <Screen nav={nav} mainAction={{label: 'Next: Choose your dates', target: 'detail', active: false}}>
            <WelcomeScreen nav={nav} />
          </Screen>
        )
      case 'dates':
        return (
          <Screen nav={nav} mainAction={{label: 'Next: Choose your dates', target: 'detail', active: false}}>
            <DatesScreen nav={nav} />
          </Screen>
        )
      case 'detail':
        return (
          <Screen nav={nav} mainAction={{label: 'Blah', target: 'welcome', active: false}}>
            <DetailScreen nav={nav} />
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

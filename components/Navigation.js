'use strict'
import React, {Component, Navigator} from 'react-native'
import {WelcomeScreen, SplashScreen} from './screens/'

export class Navigation extends Component {
  render () {
    return (
      <Navigator
        initialRoute={{name: 'splash', id: 0}}
        renderScene={this.renderScene}
      />
    )
  }

  renderScene (route, nav) {
    switch (route.name) {
      case 'splash':
        return <SplashScreen nav={nav} />
      case 'welcome':
        return <WelcomeScreen nav={nav} />
      default:
        return <WelcomeScreen />
    }
  }
}

'use strict'
import {StyleSheet} from 'react-native'

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#414141',
  },
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 100
  },
  normalText: {
    color: '#ffffff',
    fontFamily: 'OpenSans'
  },
  headline: {
    color: '#f7f7f7',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'OpenSans'
  },
  secondaryText: {
    color: '#898989',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'OpenSans'
  }
})

'use strict'
import {StyleSheet} from 'react-native'

const brandColor = '#D70F64'
const backgroundColor = '#414141'
const white = '#ffffff'
const fontFamily = 'OpenSans'
const fontWeightRegular = '400'
const fontWeightSemibold = '600'

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  navBar: {
    height: 60,
    paddingTop: 20,
  },
  actionContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    flexDirection: 'row'
  },
  normalText: {
    color: white,
    fontFamily: fontFamily
  },
  headline: {
    marginTop: 100,
    color: '#f7f7f7',
    fontSize: 18,
    fontWeight: fontWeightRegular,
    fontFamily: fontFamily
  },
  secondaryText: {
    color: '#898989',
    fontSize: 12,
    fontWeight: fontWeightSemibold,
    fontFamily: fontFamily
  },
  buttonWrapper: {
    flex: 1,
    alignSelf: 'stretch',
  },
  button: {
    textAlign: 'center',
    padding: 10,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    color: white,
    fontSize: 14,
    fontFamily: fontFamily,
    backgroundColor: brandColor
  },
  navBarLeftButton: {

  }
})

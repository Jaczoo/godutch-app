'use strict'
import {StyleSheet} from 'react-native'

const brandColor = '#D70F64'
const backgroundColor = '#414141'
const white = '#ffffff'
const inputColor = '#cacaca'
const fontFamily = 'OpenSans'
const fontWeightRegular = '400'
const fontWeightSemibold = '600'

export const Colors = {
  input: inputColor
}

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
    paddingRight: 20,
  },
  navBarLeft: {
    marginLeft: 20
  },
  toolbarIcon: {
    color: brandColor,
    fontSize: 30,
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
    fontFamily: fontFamily,
    textAlign: 'center',
  },
  secondaryText: {
    color: '#898989',
    fontSize: 12,
    fontWeight: fontWeightSemibold,
    fontFamily: fontFamily,
    textAlign: 'center',
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
  textInputWrapper: {
    flex: 1,
    flexDirection: 'column',
    borderColor: inputColor,
    borderBottomWidth: 1,
    marginTop: 40,
  },
  textInput: {
    height: 30,
    flex: 1,
    width: 300,
    fontSize: 18,
    color: inputColor,
    textAlign: 'center',
  },
  propertyImage: {
    height: 300,
    width: 300,
  }
})

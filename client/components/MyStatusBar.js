import React from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default class MyStatusBar extends React.Component {
  render() {
    const { backgroundColor } = this.props
    return (
      <View style={[style.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...this.props} />
      </View>
    )
  }
}

const style = new StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
})

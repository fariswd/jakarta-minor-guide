import React from 'react';
import Expo from 'expo';
import { ActivityIndicator } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { StyleProvider } from 'native-base'
import HomeScreen from './screen/Home'
import ProfileScreen from './screen/Profile'

const Screen = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

console.disableYellowBox = true;
if (typeof console !== 'undefined' && !__DEV__) {
  console.log = () => {};
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentWillMount = async () => {
    try {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
      });
      this.setState({ loading: false })
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />
    } else {
      return <Screen />
    }
  }
}

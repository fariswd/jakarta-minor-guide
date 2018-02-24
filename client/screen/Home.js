import React from 'react'
import { View, Button, Text } from 'react-native'

export default class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Heloo Home.js</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      </View>
    )
  }
}

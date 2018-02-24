import React from 'react'
import { Text } from 'react-native'

export default class Profile extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const { state } = this.props.navigation
    console.log('------', state)
  }
  render() {
    return (
      <Text>This is Profile</Text>
    )
  }
}

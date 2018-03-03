import React from 'react'
import { Text } from 'react-native'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    const { navigation: {
      state: {
        params: {
          name
        },
      },
    }, } = props

    this.state = {
      name
    }
  }

  render() {
    const { name } = this.state
    console.log(name)
    return (
      <Text>This is Profile { name }</Text>
    )
  }
}

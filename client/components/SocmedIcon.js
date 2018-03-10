import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import {
  Text
} from 'native-base'
import { socmedIconHelper } from '../helpers/socmed'

const toLogoPath = '../assets/logo-socmed/youtube.png'

export default class SocmedIcon extends React.Component {
  touchHandle() {
    console.log()
  }

  render() {
    const {
      type: {
        type,
        url
      }
    } = this.props
    const path = socmedIconHelper(type)
    return (
      <View>
        <TouchableOpacity >
          <Image source={path}
            style={{
              height: 45,
              width: 45,
              padding: 5,
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

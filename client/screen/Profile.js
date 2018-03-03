import React from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native'

const { height, width } = Dimensions.get('screen')

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  }

  constructor(props) {
    super(props)
    const { navigation: {
      state: {
        params: {
          name,
          logoUrl,
          description,
          fromCountry,
          region,
          captain,
          leader,
          manager,
          socialMedia,
          sponsor,
          totalEarning,
        },
      },
    }, } = this.props

    this.state = {
      name,
      logoUrl,
      description,
      fromCountry,
      region,
      captain,
      leader,
      manager,
      socialMedia,
      sponsor,
      totalEarning,
    }
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.title)
  }

  render() {
    const {
      name,
      logoUrl,
      description,
      fromCountry,
      region,
      captain,
      leader,
      manager,
      socialMedia,
      sponsor,
      totalEarning, } = this.state
    return (
      <ScrollView>
        <Image
          source= {{uri: logoUrl}}
          style={{resizeMode: 'contain', width: (height/4)+20, height: (height/4)-50}}
        />
        <Text>{ name } { fromCountry }</Text>
        <Text>Region: { region }</Text>
        <Text>Captain: { captain }</Text>
        <Text>Manager: { manager }</Text>
        <Text>Leader: { leader }</Text>
        <Text>Socmed: </Text>
        {socialMedia.map((socmed, i) => <Text key={i}>{ socmed.type }</Text>)}
        <Text>Sponsor: </Text>
        {sponsor.map((s, i) => <Text key={i}>{ s }</Text>)}
        <Text>Total Earning: { totalEarning }</Text>
      </ScrollView>
    )
  }
}

import React from 'react'
import axios from 'axios'
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native'
import { config } from '../constant/config'
const { height, width } = Dimensions.get('screen')

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  }

  constructor(props) {
    super(props)
    this.loading = false
    const { navigation: {
      state: {
        params: {
          _id,
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
      _id,
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

  getMembers() {
    const { apiUrl } = config
    this.loading = true
    axios.get(apiUrl + 'v1/team/' + this.state._id)
    .then(({ data: { response }, }) => {
      this.loading = false
      console.log(response)
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    console.log('CurrentScreen: ', this.props.navigation.state.params.title)
    this.getMembers()
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

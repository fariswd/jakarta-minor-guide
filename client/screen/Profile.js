import React from 'react'
import axios from 'axios'
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
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
    this.state = {
      members: [],
    }
  }

  componentDidMount() {
    console.log('CurrentScreen: ', this.props.navigation.state.params.title)
    if(this.props.navigation.state.params.title == 'Team Profile') {
      this.getMembers()
    }
  }

  handleToMemberProfile(member) {
    const { navigate } = this.props.navigation
    member.title = 'Member Profile'
    member.team = this.props.navigation.state.params.name
    navigate('Profile', member)
  }

  getMembers() {
    const { navigation: {
      state: {
        params: {
          _id,
        },
      },
    }, } = this.props
    const { apiUrl } = config
    this.loading = true
    axios.get(apiUrl + 'v1/team/' + _id)
    .then(({ data: { response }, }) => {
      this.loading = false
      this.setState({
        members: response
      })
    })
    .catch(err => console.log(err))
  }

  renderTeam() {
    const { navigation: {
      state: {
        params: {
          _id,
          name,
          title,
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
    const { members } = this.state
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
        <Text>Member: </Text>
        {(this.loading)
          ? <ActivityIndicator size="large" />
          : members.map((m, i) => {
            return (
            <TouchableOpacity key={i} onPress={() => this.handleToMemberProfile(m)}>
              <Text>{ m.name }</Text>
            </TouchableOpacity>
          )})
        }
        <Text>Total Earning: { totalEarning }</Text>
      </ScrollView>
    )
  }

  renderMember() {
    const {
      _id,
      name,
      nick,
      birthDate,
      imageUrl,
      description,
      signatureHero,
      role,
      socialMedia,
      team,
      approx,
     } = this.props.navigation.state.params
    return (
      <ScrollView>
        <Image
          source= {{uri: imageUrl}}
          style={{resizeMode: 'contain', width: (height/4)+20, height: (height/4)-50}}
        />
        <Text>{ name } { nick }</Text>
        <Text>Birth Date: { birthDate }</Text>
        <Text>Team: { team }</Text>
        <Text>Signature Hero: </Text>
        {signatureHero.map((s, i) => <Text key={i}>{ s.name }</Text>)}
        <Text>Role: </Text>
        {role.map((r, i) => <Text key={i}>{ r }</Text>)}
        <Text>Socmed: </Text>
        {socialMedia.map((socmed, i) => <Text key={i}>{ socmed.type }</Text>)}
        <Text>Total Earning: { approx }</Text>
      </ScrollView>
    )
  }

  render() {
    const { navigation: {
      state: {
        params: {
          title,
        },
      },
    }, } = this.props
    if(title == 'Team Profile') {
      return this.renderTeam()
    } else {
      return this.renderMember()
    }
  }
}

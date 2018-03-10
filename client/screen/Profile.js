import React from 'react'
import axios from 'axios'
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import {
  Container,
  Header,
  Text,
  Body,
  Title,
  Icon,
  Left,
  Button,
  Thumbnail,
  H2,
} from 'native-base';
import SocmedIcon from '../components/SocmedIcon'
import MyStatusBar from '../components/MyStatusBar'
import { country } from '../helpers/country'
import { config } from '../constant/config'
const { height, width } = Dimensions.get('screen')

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      members: [],
      loading: false,
    }
  }

  componentDidMount() {
    console.log('CurrentScreen: ', this.props.navigation.state.params.title)
    if(this.props.navigation.state.params.title == 'Team Profile') {
      this.getMembers()
    }
  }

  handleBack() {
    const { state, goBack } = this.props.navigation;
    const params = state.params || {};
    goBack(params.go_back_key);
    console.log('back')
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
    this.setState({
      loading: true
    })
    axios.get(apiUrl + 'v1/team/' + _id)
    .then(({ data: { response }, }) => {
      this.loading = false
      this.setState({
        members: response,
        loading: false
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
      <View>
        <ScrollView>
          <ImageBackground
            source={{uri: logoUrl}}
            style={{
              height: 200,
              backgroundColor: 'lightgray',
            }}
          >
            <MyStatusBar backgroundColor="rgba(52, 52, 52, 0.5)" barStyle="light-content" />
            <Header style={{backgroundColor:'rgba(52, 52, 52, 0.5)'}}>
              <Left>
                <Button onPress={() => this.handleBack()} transparent>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title style={{color:'#FFF'}}>{ name }</Title>
              </Body>
            </Header>
          </ImageBackground>
          <View style={{
            flexDirection: 'row',
          }}>
            <Thumbnail square large source={{uri: logoUrl}}
              style={{
                marginTop: -45,
                marginLeft: 10,
                borderRadius: 50,
                borderWidth: 0.5,
                borderColor: 'black',
              }}
            />
          </View>
          <View style={{ padding: 10 }}>
            <H2>{ name } { country(fromCountry) }</H2>
            <Text>From Country: { fromCountry }</Text>
            <Text>Region: { region }</Text>
            { captain && <Text>Captain: { captain }</Text> }
            { manager && <Text>Manager: { manager }</Text>}
            { leader && <Text>Leader: { leader }</Text>}
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
              {socialMedia.map((socmed, i) => {
                return (
                  <SocmedIcon key={i} type={socmed} />
                )
              })}
            </View>
            <Text>Sponsor: </Text>
            {sponsor.map((s, i) => <Text key={i}>{ s }</Text>)}
            <Text>Member: </Text>
            {members.length == 0
              ? <ActivityIndicator size="large" />
              : members.map((m, i) => {
                return (
                <TouchableOpacity key={i} onPress={() => this.handleToMemberProfile(m)}>
                  <Text>{ m.name }</Text>
                </TouchableOpacity>
              )})
            }
            <Text>Total Earning: { totalEarning }</Text>
          </View>
        </ScrollView>
      </View>
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

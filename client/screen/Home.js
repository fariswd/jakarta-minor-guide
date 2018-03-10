import React from 'react'
import axios from 'axios'
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform,
  ImageBackground,
} from 'react-native'
import {
  Container,
  Header,
  Text,
  Body,
  Title,
} from 'native-base';
import { config } from '../constant/config'

const { height, width } = Dimensions.get('screen')

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[style.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'GESC Jakarta Minor',
    header: null,
  }

  constructor() {
    super()
    this.loading = false
    this.state = {
      teams: [],
    }
  }

  componentDidMount() {
    this.getTeam()
  }

  getTeam() {
    const { apiUrl } = config
    this.loading = true
    axios.get(apiUrl + 'v1/team')
    .then(({ data: { response }, }) => {
      this.loading = false
      this.setState({
        teams: response
      })
    })
    .catch(err => console.log(err))
  }

  renderTeam(team, index) {
    team.title = 'Team Profile'
    return (
      <TouchableOpacity key={index} style={style.eachItem} onPress={() => this.handleProfile(team)}>
        <Image
          source= {{uri: team.logoUrl}}
          style={{resizeMode: 'contain', width: (height/4)+20, height: (height/4)-50}}
        />
        <Text style={{color: 'white'}}>{team.name}</Text>
      </TouchableOpacity>
    )
  }

  handleProfile(team) {
    const { navigate } = this.props.navigation
    navigate('Profile', team)
  }

  render() {
    const { navigate } = this.props.navigation
    const { teams } = this.state
    return (
      <Container>
        <ImageBackground
          source={{uri: 'http://www.technocrazed.com/wp-content/uploads/2015/12/HD-Space-Wallpaper-For-Background-6.jpg'}}
          style={{
            flex: 1,
            width: width,
            height: height,
          }}
          >
        <MyStatusBar backgroundColor="rgba(52, 52, 52, 0.5)" barStyle="light-content" />
        <Header style={{backgroundColor:'rgba(52, 52, 52, 0.5)'}}>
          <Body style={{alignItems: 'center'}}>
            <Title style={{color:'#FFF'}}>GESC Jakarta Minor</Title>
          </Body>
        </Header>
        <View style={style.container}>
          { (teams.length > 0)
            ? (
              <ScrollView>
                <View style={style.items}>
                  {teams.map((t, i) => this.renderTeam(t, i))}
                </View>
              </ScrollView>
            )
            : <ActivityIndicator size="large" />
          }
        </View>
        </ImageBackground>
      </Container>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  eachItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: (height/4)+10,
    height: (height/4)-40+15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 5,
    margin: 2,
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
})

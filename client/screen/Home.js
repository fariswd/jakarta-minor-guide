import React from 'react'
import axios from 'axios'
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
import { config } from '../constant/config'

const { height, width } = Dimensions.get('screen')

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super()
    this.loading = false
    this.state = {
      teams: [],
    }
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
    return (
      <View key={index} style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: (height/4)+25,
        height: (height/4)-40+20,
      }}>
        <Image
          source= {{uri: team.logoUrl}}
          style={{resizeMode: 'contain', width: (height/4)+25, height: (height/4)-40}}
        />
        <Text>{team.name}</Text>
      </View>
    )
  }

  componentDidMount() {
    this.getTeam()
  }

  render() {
    const { navigate } = this.props.navigation
    const { teams } = this.state
    return (
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
    )
  }
}

// <Button
//   title="Go to Jane's profile"
//   onPress={() =>
//     navigate('Profile', { name: 'Jane' })
//   }
// />

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 5,
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  eachItem: {

  }
})

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
  TouchableOpacity,
} from 'react-native'
import { config } from '../constant/config'

const { height, width } = Dimensions.get('screen')

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'GESC Jakarta Minor',
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
      <TouchableOpacity key={index} style={style.eachItem}>
        <Image
          source= {{uri: team.logoUrl}}
          style={{resizeMode: 'contain', width: (height/4)+20, height: (height/4)-50}}
        />
        <Text>{team.name}</Text>
      </TouchableOpacity>
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
  },
})

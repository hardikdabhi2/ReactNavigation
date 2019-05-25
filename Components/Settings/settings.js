import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet} from 'react-native'

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Cart')}>
          <Text> Welcome to setting </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
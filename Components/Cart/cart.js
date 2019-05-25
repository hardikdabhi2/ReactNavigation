import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Order')}>
        {/* onPress={() => this.props.navigation.navigate('Cart')}> */}
        <Text>Welcome to cart view controller </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
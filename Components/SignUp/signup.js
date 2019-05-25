import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import {KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default class SignUp extends Component {
  render() {
    let context = this;
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style = {styles.container}>
      <ScrollView
      centerContent={true}
      >
      <View style={styles.viewTop}>
                <Text style={styles.textTop}>Foodies</Text>
            </View>
            <View style={styles.viewBottom}>
                <View style={styles.viewCard}>
                    <View style={styles.viewCardTitle}><Text style={styles.textSignupTitle}>Sign up</Text></View>
                    <View style={styles.viewCardCenter}>
                        <View style={styles.viewTextField}>
                            <TextInput
                            style={styles.textInput}
                            placeholder='Username'>
                            </TextInput>
                        </View>
                        <View style={styles.viewTextField}>
                            <TextInput
                            style={styles.textInput}
                            placeholder='Email'>
                            </TextInput>
                        </View>
                        <View style={styles.viewTextField}>
                            <TextInput
                            style={styles.textInput}
                            placeholder='Phone'>
                            </TextInput>
                        </View>
                        <View style={styles.viewTextField}>
                            <TextInput
                            style={styles.textInput}
                            placeholder='Password'>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.viewCardButtonSubmit}>
                        <View style={styles.viewButtonSubmit}>
                            <Text style={styles.textSignUp}>Sign up</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewAlreadyAccount}>
                <Text style={styles.textAlreadyAccount}>Already an account?</Text>
                <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.textAlreadyAccount}>Sign in</Text>
                </TouchableOpacity>
            </View>
            </View>
      </ScrollView>
      </View>
        </KeyboardAvoidingView>
    )
  }
}
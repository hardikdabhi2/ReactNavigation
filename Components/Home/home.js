import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import {KeyboardAvoidingView} from 'react-native';
import styles from './styles'

export default class Home extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View style={styles.container}>
      <ScrollView
      centerContent = {true}
      >
      <View style={styles.viewTop}>
              <Text style={styles.textTop}>Foodies</Text>
          </View>
          <View style={styles.viewBottom}>
                <View style={styles.viewSquare}>
                      {/* This is for social media */}
                    <View style={styles.viewSocial}>
                          <Text style={styles.textSignInWith}>Sign in with</Text>
                          <View style={styles.viewSocialIcon}>
                          <View style={styles.viewSocialButton}>
                              <View style={styles.viewFaceBook}>
                                  <Text style={styles.textFB}>Facebook</Text>
                              </View>
                          </View>
                          <View style={styles.viewSocialButton}>
                              <View style={styles.viewFaceBook}>
                                  <Text style={styles.textFB}>Instagram</Text>
                              </View>
                          </View>
                          </View>

                          <View style={styles.viewDivider}>
                              <View style={styles.viewSubDivider}></View>
                                <Text style={styles.textOr}>OR</Text>
                                <View style={styles.viewSubDivider}></View>
                          </View>
                    </View>

                    <View style={styles.viewNormalLogin}>
                          <View style={styles.viewTextField}>
                                <View style={styles.viewTextUserName}>
                                  <TextInput
                                      placeholder = 'Username'
                                  >
                                  </TextInput>
                                </View>
                                <View style={styles.viewTextUserName}>
                                <TextInput
                                      placeholder = 'Password'
                                      secureTextEntry = {true}
                                  >
                                  </TextInput>
                                </View>
                          </View>
                          <View style={styles.viewSubmitButton}>
                                <Text style={styles.textLogin}>Login</Text>
                          </View>
                    </View>
                </View>
                <View style={styles.viewForgotPass}>
                    <Text style={styles.textForgotPass}>Don't have an account?</Text>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('SignUp')}
                    >
                          <Text style={styles.textForgotPass}>Sign up</Text>
                    </TouchableOpacity>
                </View>
          </View>
      </ScrollView>
      </View>
      </KeyboardAvoidingView>
    )
  }
}
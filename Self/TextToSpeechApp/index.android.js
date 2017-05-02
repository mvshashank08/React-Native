/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *https://github.com/kn4rfy/react-native-speech-notification
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import SpeechNotification from "react-native-speech-notification";
export default class TextToSpeechApp extends Component {
  constructor(){
    super();
    this.state = {
      message: 'This app is cool.', 
      language: 'en-US'
    }
    
  }
  render() {
    return (
      <Container>
        <Header>
          <Title>Text to Speech App</Title>
        </Header>
        <Content>
          
          <Button style={styles.welcome} onPress={SpeechNotification.speak({
              message: this.state.message,
              language: this.state.language
            })}>
            Speak
          </Button> 
        </Content>
             
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TextToSpeechApp', () => TextToSpeechApp);

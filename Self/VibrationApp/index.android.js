/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 /*
 	https://facebook.github.io/react-native/releases/0.33/docs/vibration.html
	http://stackoverflow.com/questions/36293577/syntaxerror-strict-mode-does-not-allow-function-declarations-in-a-lexically-nes
	https://github.com/facebook/react-native/issues/11389
 */
//'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Vibration
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class VibrationApp extends Component {
	render() {
		return (
			<Container>
				<Header>
                    <Title>Vibration App</Title>
                </Header>
                <Content>
                	<Button 
                		primary
                		onPress={() => Vibration.vibrate()}
                		style={{margin:10}}
                	>
                		Vibrate
                	</Button>
                	<Button 
                		primary
                		onPress={() => Vibration.vibrate([0, 500, 200, 500], true)}
                		style={{margin:10}}
                	>
                		Vibrate-Pattern
                	</Button>
                	<Button 
                		primary
                		onPress={() => Vibration.vibrate([0, 500, 200, 500], true)}
                		style={{margin:10}}
                	>
                		Vibrate-Pattern-Repeat
                	</Button>
                	<Button 
                		danger
                		onPress={() => Vibration.cancel()}
                		style={{margin:10}}
                	>
                		Stop
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

AppRegistry.registerComponent('VibrationApp', () => VibrationApp);

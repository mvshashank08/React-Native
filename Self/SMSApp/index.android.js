/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SendSMS from 'react-native-sms';
import SplashScreen from 'react-native-splash-screen'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class SMSApp extends Component {
	constructor(){
		super();
		this.msg = "No msg";
	}
	componentDidMount() {
        SplashScreen.hide();
    }
	mySMSFunction() {
 
	    SendSMS.send({
	        body: 'The default body of the SMS!',
	        recipients: ['9441927929'],
	        successTypes: ['sent', 'queued']
	    }, (completed, cancelled, error) => {
	 
	        this.msg = 'SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error;
	 
	    });
	}
	render() {
		return (
			<Container>
				<Header>
					<Title>SMS App</Title>
				</Header>
				<Content>
					<Button onPress={this.mySMSFunction}>Send SMS</Button>
					<Text>{this.msg}</Text>
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

AppRegistry.registerComponent('SMSApp', () => SMSApp);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 https://github.com/rt2zz/react-native-contacts
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Contacts from 'react-native-contacts';

export default class MyProject extends Component {
	constructor(){
		super();
		this.state = {"Name": "None", "Phone": "None"};
		
	}
	getContacts(){

		Contacts.getAll((err, contacts) => {
				if(err){
					//this.msg = 'permissionDenied error';
					console.log('permissionDenied error');
				} else {
					//this.msg = JSON.stringify(contacts[1]);
					//console.log(contacts);
					//alert(JSON.stringify(contacts[600]));
					alert(contacts[600].phoneNumbers[0].number+'\n'+contacts[600].givenName);
					//this.setState({"Name": contacts[1].givenName, "Phone": contacts[1].phoneNumbers[0].number})
				}
			})
	}
	render() {
		return (
			<Container>
				<Header>
					<Title>Contacts App</Title>
				</Header>
				<Content>
					<Button onPress={this.getContacts}>Display</Button>
					
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

AppRegistry.registerComponent('MyProject', () => MyProject);

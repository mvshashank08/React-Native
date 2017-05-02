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
  View,
  Navigator
} from 'react-native';
import { 
	Container, 
	Header, 
	Content, 
	Title, 
	Button, 
	Icon,
	H1,
	InputGroup,
	Input
} from 'native-base';
import SignInScene from "./SignInScene";
import SignUpScene from "./SignUpScene";
import SearchScene from "./SearchScene";
import RefreshControlExample from "./RefreshControlExample";

export default class SignInApp extends Component {
	
	render() {
		return (
			<RefreshControlExample />
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

AppRegistry.registerComponent('SignInApp', () => SignInApp);

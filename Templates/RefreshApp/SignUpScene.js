/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  
  View
} from 'react-native';
import { 
	Container, 
	Header, 
	Content, 
	Title, 
	Button, 
	Icon,
	H1,
	Text,
	InputGroup,
	Input,
	Grid,
	Row
} from 'native-base';


export default class SignInScene extends Component {
	onsignin(){
		//alert("Signing in");
		
	}
	render() {
		return (
			<Container>
				<Header>				
					<Title>Sign Up Page</Title>
				</Header>
				<Content style={{padding: 10}}>
	
					<H1 style={{paddingTop: 20, alignSelf: "center"}}>Register</H1>
									
					<InputGroup borderType='underline' style={{paddingTop: 20, marginTop: 20}}>
						<Input placeholder='Username' />                        
					</InputGroup>

					<InputGroup borderType='underline' style={{paddingTop: 20, marginTop: 20}}>
						<Input placeholder='Email' />                        
					</InputGroup>

					<InputGroup borderType='underline' style={{paddingTop: 20, marginTop: 20}}>
						<Input placeholder='Password' secureTextEntry/>
					</InputGroup>

					<Button transparent style={{alignSelf: "center", marginTop: 20}}>
						<Text style={{color: '#5067FF'}}>Forgot Password?</Text>
					</Button>

					<Button block style={styles.signIn}>
						<Text style={{color:"white", fontSize: 20}}>Register</Text>
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
	signIn: {
		height: 70,
		borderRadius: 4,
		marginTop: 20
	},
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Modal,
  View,
  Keyboard,
  TextInput,
  StatusBar,
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
	Text,
	InputGroup,
	Input,
	Grid,
	Row
} from 'native-base';


export default class ModalScene extends Component {
	//For Keyboard
	componentWillMount () {
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
	}
	componentWillUnmount () {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}
	_keyboardDidShow () {
		//alert('Keyboard Shown');
	}
	_keyboardDidHide () {
		//alert('Keyboard Hidden');
	}
	//For Modal Window
	state = {
		modalVisible: false,
	}
	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}
	render() {
		return (
			<Container>
				<Header>
					<Title>Modal Scene</Title>
				</Header>
				<Content style={{padding: 10}}>
					<Modal
						animationType={"slide"}
						transparent={false}
						visible={this.state.modalVisible}
						onRequestClose={() => {alert("Modal has been closed.")}}
					>
						<View style={{marginTop: 22}}>
							<View>
								<Text>Hello World!</Text>

								<Button onPress={() => {
								  this.setModalVisible(!this.state.modalVisible)
								}}>
									Hide Modal
								</Button>

							</View>
						</View>
					</Modal>
					
					<Button onPress={() => {
						this.setModalVisible(true)
					}}>
						Show Modal
					</Button>
					<TextInput
						onSubmitEditing={Keyboard.dismiss}
					/>
					
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

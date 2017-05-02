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
  ListView,
  View,
  ControlPanel,
  DrawerLayoutAndroid
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, H1 } from 'native-base';
import Drawer from 'react-native-drawer'
export default class SidebarApp extends Component {
	render() {
		var navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text style={{margin: 10, fontSize: 25, textAlign: 'left'}}>I'm in the Drawer!</Text>
			</View>
		);
		return (
			<Drawer
				ref={(ref) => this._drawer = ref}
				content={<ControlPanel />}
			>
				<Container>
					<Header>
						<Button transparent >
							<Icon name='ios-menu' />
						</Button>
						<Title>Sidebar Template</Title>
					</Header>
					<Content>
						<H1 style={{margin: 10}}>Swipe from left to get the sidebar</H1>
					</Content>
				</Container>
			</Drawer>
			
			
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

AppRegistry.registerComponent('SidebarApp', () => SidebarApp);

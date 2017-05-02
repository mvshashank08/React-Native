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
  Platform,
  Switch,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, H2, ListItem, List } from 'native-base';
import Toast from '@remobile/react-native-toast'
import BluetoothSerial from 'react-native-bluetooth-serial';

export default class BluetoothApp extends Component {
	constructor (props) {
		super(props)
		this.state = {
			discovering: false,
			devices: [],
			connected: false
		}
	}
	toggleBluetooth (value) {
		if (value === true) {
			BluetoothSerial.enable()
			.then((res) => this.setState({ isEnabled: true }))
			.catch((err) => alert(err))
		} else {
			BluetoothSerial.disable()
			.then((res) => this.setState({ isEnabled: false }))
			.catch((err) => alert(err))
		}
	}
	discoverUnpaired () {
		if (this.state.discovering) {
		  return false
		} else {
		  this.setState({ discovering: true })
		  BluetoothSerial.discoverUnpairedDevices()
		  .then((unpairedDevices) => {
		    const devices = this.state.devices
		    const deviceIds = devices.map((d) => d.id)
		    unpairedDevices.forEach((device) => {
		      if (deviceIds.indexOf(device.id) < 0) {
		        devices.push(device)
		      }
		    })
		    alert(this.state.devices)
		    this.setState({ devices, discovering: false })
		  })
		}
	}
	render() {
		return (
			<Container> 
				<Header>
					<Title>Bluetooth App</Title>
				</Header>

				<Content>
					<View style={styles.enableInfoWrapper}>
						<Text style={{ fontWeight: 'bold' }}>ENABLE BT</Text>
						<Switch
						onValueChange={this.toggleBluetooth.bind(this)}
						value={this.state.isEnabled} />
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
					    <Button
					    	onPress={this.discoverUnpaired.bind(this)} >
					    	{this.state.discovering ? '... Discovering' : 'Discover devices'}
					    </Button>
					</View>
					<List>
						 {this.state.devices.map((device, i) => {
							return (
								<ListItem>
							  <TouchableOpacity key={`${device.id}_${i}`} style={styles.listItem} onPress={this.connect.bind(this, device)}>
							    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							      <Text style={{ fontWeight: 'bold' }}>{device.name}</Text>
							      <Text>{`<${device.id}>`}</Text>
							    </View>
							  </TouchableOpacity>
							  </ListItem>
							)
							})}
					</List>
					
				</Content>
			</Container>
		);
	}
}
class MyListItem extends Component{
	render(){
		return(
			<ListItem>
				<H1>{this.props.content.title}</H1>
				<Text note>{this.props.content.subtitle}</Text>
			</ListItem>
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
  enableInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 25,
    alignItems: 'center'
  },
  listContainer: {
    marginTop: 15,
    borderColor: '#ccc',
    borderTopWidth: 0.5
  },
});

AppRegistry.registerComponent('BluetoothApp', () => BluetoothApp);

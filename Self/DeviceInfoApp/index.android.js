/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * https://github.com/rebeccahughes/react-native-device-info
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DeviceInfo = require('react-native-device-info');

export default class DeviceInfoApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={{fontSize: 30}}>Device Info</Text>
				<Text>				 
				{'\nUnique ID: '+DeviceInfo.getUniqueID()}
				{'\nModel: '+DeviceInfo.getModel()}
				{'\nManufacturer: '+DeviceInfo.getManufacturer()}
				{'\nDevice ID: '+DeviceInfo.getDeviceId()}
				{'\nSystem Name: '+DeviceInfo.getSystemName()}
				{'\nSystem Version: '+DeviceInfo.getSystemVersion()}
				{'\nBundle ID: '+DeviceInfo.getBundleId()}
				{'\nBuild Number: '+DeviceInfo.getBuildNumber()}
				{'\nVersion: '+DeviceInfo.getVersion()}
				{'\nReadable Version: '+DeviceInfo.getReadableVersion()}
				{'\nDevice Name: '+DeviceInfo.getDeviceName()}
				{'\nUser Agent: '+DeviceInfo.getUserAgent()}
				{'\nDevice Locale: '+DeviceInfo.getDeviceLocale()}
				{'\nDevice Country: '+DeviceInfo.getDeviceCountry()}
				{'\nTime Zone: '+DeviceInfo.getTimezone()}
				{'\nInstance ID: '+DeviceInfo.getInstanceID()}	
				{'\nEmulator: '+DeviceInfo.isEmulator()}
				{'\nTablet: '+DeviceInfo.isTablet()}
				</Text>				
			</View>
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

AppRegistry.registerComponent('DeviceInfoApp', () => DeviceInfoApp);

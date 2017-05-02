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

import PopoverExample from "./PopoverExample";
import ModalScene from "./ModalScene";
import StatusBarStaticAndroidExample from "./StatusBarScene";
import ToggleAnimatingActivityIndicator from "./ActivityIndicatorApp";
//import MapViewExample from "./MapViewExample";
import ViewPagerAndroidExample from "./PagerView";
export default class ComponentsApp extends Component {
	render() {
		return (
			<ViewPagerAndroidExample />
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

AppRegistry.registerComponent('ComponentsApp', () => ComponentsApp);

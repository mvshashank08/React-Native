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
import RNFS from 'react-native-fs';


export default class FileSystemApp extends Component {
	constructor(){
		super();
		this.msg = "No status";
		this.msg = RNFS.DocumentDirectoryPath;
		// create a path you want to write to
		var path = "/storage/emulated/0" + '/test.txt';
		this.msg = path;
		// write the file
		RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
		.then((success) => {
			console.log('FILE WRITTEN!');
			this.msg = "File is written";
		})
		.catch((err) => {
			console.log(err.message);
			this.msg = err.message;
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Hello World!
					{'\n'+this.msg}
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

AppRegistry.registerComponent('FileSystemApp', () => FileSystemApp);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 https://www.npmjs.com/package/react-native-camera
 */

import React, { Component } from 'react';
import {DeviceEventEmitter, StyleSheet, Dimensions, AppRegistry, Text, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Camera from 'react-native-camera';

export default class SensorApp extends Component {
	
    render() {
    	var am = {x: 0, y: 0, z: 0};
    	
        return (            
		        <Camera
		          ref={(cam) => {
		            this.camera = cam;
		          }}
		          style={styles.preview}
		          aspect={Camera.constants.Aspect.fill}>
		          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
		        </Camera>		      
        );
    }
    takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('SensorApp', () => SensorApp);

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
  TouchableHighlight
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

export default class SignatureApp extends Component {
	saveSign() {
        this.refs["sign"].saveImage();
    }

    resetSign() {
        this.refs["sign"].resetImage();
    }

    _onSaveEvent(result) {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        console.log(result);
    }
    _onDragEvent() {
         // This callback will be called when the user enters signature
        console.log("dragged");
    }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
	    <Text style={{alignItems:"center",justifyContent:"center"}}>Signature Capture Extended </Text>
        <SignatureCapture
            style={[{flex:1},styles.signature]}
            ref="sign"
            onSaveEvent={this._onSaveEvent}
            onDragEvent={this._onDragEvent}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            viewMode={"portrait"}/>

	        <View style={{ flex: 1, flexDirection: "row" }}>
	            <TouchableHighlight style={styles.buttonStyle}
	                onPress={() => { this.saveSign() } } >
	                <Text>Save</Text>
	            </TouchableHighlight>

	            <TouchableHighlight style={styles.buttonStyle}
	                onPress={() => { this.resetSign() } } >
	                <Text>Reset</Text>
	            </TouchableHighlight>

	        </View>

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
  signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
    },
    buttonStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", height: 50,
        backgroundColor: "#eeeeee",
        margin: 10
    }
});

AppRegistry.registerComponent('SignatureApp', () => SignatureApp);

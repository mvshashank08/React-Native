/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * https://github.com/cnjon/react-native-pdf-view
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PDFView from 'react-native-pdf-view';
export default class PDFViewApp extends Component {
  render() {
    return (
      <PDFView ref={(pdf)=>{this.pdfView = pdf;}}
                         src={"/storage/emulated/0/Download/ENG102.pdf"}
                         onLoadComplete = {(pageCount)=>{
                            this.pdfView.setNativeProps({
                                zoom: 1.5
                            });
                         }}
                         style={styles.pdf}/>
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
  pdf: {
        flex:1
    }
});

AppRegistry.registerComponent('PDFViewApp', () => PDFViewApp);

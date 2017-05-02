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
var Carousel = require('react-native-carousel');
export default class CarouselApp extends Component {
  render() {
    return (
      <Carousel 
        width={375} 
        animate={false} 
        indicatorAtBottom={true} 
        indicatorOffset={50}
      >
        <View style={[styles.container, {backgroundColor: 'red'}]}>
          <Text>Page 1</Text>
        </View>
        <View style={[styles.container, {backgroundColor: 'green'}]}>
          <Text>Page 2</Text>
        </View>
        <View style={[styles.container, {backgroundColor: 'yellow'}]}>
          <Text>Page 3</Text>
        </View>
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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

AppRegistry.registerComponent('CarouselApp', () => CarouselApp);

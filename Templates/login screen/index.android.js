import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginScreen from "./screens/login/index";
import SignupView from "./screens/signup/index";
import ProfileScene from "./screens/ProfileScene";
export default class screens extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileScene />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('screens', () => screens);

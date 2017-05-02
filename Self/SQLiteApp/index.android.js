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
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
var DB = require('./db.js');
var DBEvents = require('react-native-db-models').DBEvents


// Only "all" event emitter is available
DBEvents.on("all", function(){
    console.log("Database changed");
})

export default class SQLiteApp extends Component {
  constructor(){
    super();
    this.msg = "To be executed";
    //SQLite.openDatabase("mydb.sql", "1.0", "Demo", -1);
  }
  get_users(){
    DB.users.get_all(function(result){
        console.log(result);
        this.msg = result;
    })
  }
  add_data(){
    DB.users.add({first_name: "Rishabh", age: 25}, function(added_data){
        alert(JSON.stringify(added_data));
        
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Title>Database App</Title>
        </Header>
        <Content>
          <Text style={styles.welcome} onPress={this.get_users}>
            {''+this.msg}
          </Text>
          <Button style={styles.welcome} onPress={this.add_data}>
            Add data
          </Button> 
        </Content>
             
      </Container>
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

AppRegistry.registerComponent('SQLiteApp', () => SQLiteApp);

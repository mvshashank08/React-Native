import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  RefreshControl,
  View,
  ScrollView,
  
  Image,
  ListView,
  Dimensions,
  BackAndroid
} from 'react-native';
import { 
  Container, 
  Header, 
  Body,
  Content, 
  Title, 
  Button,
  Form,
  Text,
  Item,
  Label,
  Icon,
  H1,
  H2,
  H3,
  Card,
  CardItem,
  InputGroup,
  Input,
  ListItem,
  List,
  Thumbnail
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const window = Dimensions.get('window');
export default class LoginScene extends Component{
	
  render(){
    var myNavigator = this.props.navigator;
    return(
      <Container>
      	<Header>
      		<Body>
						<Title>Profile</Title>
					</Body>
      	</Header>
        <Content>
        	<View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',}}>
        		<View>
        			<Image source={{uri: "http://cdn4.thr.com/sites/default/files/2014/03/christopher_nolan_horizontal_a_l.jpg"}} width/>
        		</View>
        		<View><H1>Christopher Nolan</H1></View>
        		<View><Text>Film Director</Text></View>
        		
        	</View>
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
    fontSize: 40,
    textAlign: 'center',
    margin: 10, 
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
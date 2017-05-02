/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  RefreshControl,
  View,
  ScrollView
} from 'react-native';
import { 
	Container, 
	Header, 
	Content, 
	Title, 
	Button, 
	Icon,
	H1,
	H2,
	H3,
	Text,
	InputGroup,
	Input,
	ListItem,
	List
} from 'native-base';

const originalData = [
	{
		title: "First Title",
		"releaseYear": "This is first subtitle"
	},
	{
		title: "Second Title",
		"releaseYear": "This is second subtitle"
	},
	{
		title: "Third Title",
		"releaseYear": "This is third subtitle"
	},
	{
		title: "Fourth Title",
		"releaseYear": "This is fourth subtitle"
	},
	{
		title: "Fifth Title",
		"releaseYear": "This is fifth subtitle"
	},
	{
		title: "Sixth Title",
		"releaseYear": "This is sixth subtitle"
	},
	{
		title: "Seventh Title",
		"releaseYear": "This is seventh subtitle"
	},
	{
		title: "Eigth Title",
		"releaseYear": "This is Eigth subtitle"
	},
	{
		title: "Nineth Title",
		"releaseYear": "This is Nineth subtitle"
	},
	{
		title: "Tenth Title",
		"releaseYear": "This is Tenth subtitle"
	},
];

export default class SearchScene extends Component {
	constructor(){
		super();
		var fetchedData = null;
		
		this.state = {
			searchText: "",
			data: originalData,
			refreshing: false
		};
		
		/*
		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {		
			if (request.status === 200) {
				alert("status: "+ request.status);
				if(this.responseText != null){
					console.log('success', request.responseText);
					fetchedData = JSON.parse(request.responseText);
					this.setState({data: fetchedData.movies});
				}
				else{
					alert("responseText doesn't exist")
				}
			}
		};
		request.open('GET', 'https://facebook.github.io/react-native/movies.json');
		request.send();
		*/
		this.updateState = this.updateState.bind(this);
		this.blurHandler = this.blurHandler.bind(this);
	}
	
	componentDidMount(){
		//this.setState({data: this.getMoviesFromApiAsync()});
		response = this.getMoviesFromApiAsync()
		console.log(response)
		response.then((mydata) => {
			console.log(mydata)
			originalData = mydata.movies
			this.setState({data: mydata.movies});			
		})
	}
	async getMoviesFromApiAsync() {
		var mydata = [];
		return fetch('http://studcode.com/orders.json')
		
		.then( (response) => {
			//console.log('Actions - fetchJobs - received response: ', response.json())
			return response.json()
		})
		.catch((error) => {
			console.error(error);
		});
		console.log(mydata)
		return mydata
	}
	updateState(text) {
		//console.log(text);
		this.setState({data: originalData});
    	this.setState({searchText: text});
    	console.log("searchText: "+this.state.searchText);
    	let matchedData = originalData.map((heading)=>{
    		//console.log("Title: "+heading.title);
    		//console.log(heading.title.includes(this.state.searchText));    		
    		if(heading.title.includes(this.state.searchText)){
    			//console.log(heading.title);
    			return heading;
    		}
    		else{
    			return null;
    		}   		
    	});    	
    	console.log(matchedData);
    	this.setState({data: matchedData})

	}
	blurHandler(){
		if(!this.state.searchText)
			this.setState({data: originalData});
	}
	_onRefresh() {
		this.setState({refreshing: true});
		/*
		fetchData().then(() => {
		this.setState({refreshing: false});
		});
		*/
	}
	render() {
		return (
			<Container>
				<Header searchBar rounded>				
					<InputGroup>
                        <Icon name="ios-search" />
                        <Input 
                        	placeholder="Search" 
                        	value={this.state.searchText}                        	
                        	onChangeText = {this.updateState}
                        	onBlur={this.blurHandler}
                        />  
                    </InputGroup>
                    <Button transparent>
                        Search
                    </Button>
				</Header>
				<Content style={{padding: 10}}>	
				<ScrollView
					refreshControl={
								<RefreshControl
									refreshing={this.state.refreshing}
									onRefresh={this._onRefresh.bind(this)}
								/>
							}
				>
					<List>
						{this.state.data.map((heading, i) => {
							if(heading != null){
								return(
									<ListItem key={i} >
										<H1>{heading.title}</H1>
										<Text note>{heading.releaseYear}</Text>
									</ListItem>
									);
							}
						}
						)}
					</List>
				</ScrollView>
				</Content>
			</Container>
		);
	}
}
/*
class MyListItem extends Component{
	render(){
		return(
			<ListItem>
				<H1>{this.props.content.title}</H1>
				<Text note>{this.props.content.subtitle}</Text>
			</ListItem>
		);
	}
}
*/
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
	title:{
		fontSize: 20,
		fontWeight: 'bold',
	},
});

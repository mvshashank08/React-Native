/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import GridView from 'react-native-grid-view'

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;
var MOVIES_PER_ROW = 3;

const originalData = {
  "data": [
    {
      "img": "http://2.bp.blogspot.com/-1Ro3P-3RQ78/U1-bYvs6fqI/AAAAAAAADmc/av50og6uzDM/w600/banner2.jpg",
      "title": "Sherlock Holmes",
      "year": "2010"
    },
    {
      "img": "http://1.bp.blogspot.com/-26hnNgxJVb0/U1-bSZyGu1I/AAAAAAAADmU/cFFJw6mtpag/w600/banner1.jpg",
      "title": "Brave",
      "year": "2010"
    },
    {
      "img": "http://4.bp.blogspot.com/-F15YXIXM4C0/U1-b8O7K8KI/AAAAAAAADms/vXCJsG_piVE/w600/banner4.jpg",
      "title": "Harry Potter",
      "year": "2010"
    },
    {
      "img": "http://4.bp.blogspot.com/-AigbJtAesuA/U2E0VcokXoI/AAAAAAAADoE/qpZXbAmKUzI/w600/131581770_51n.jpg",
      "title": "The Avenger",
      "year": "2010"
    },
    {
      "img": "http://3.bp.blogspot.com/-8bGXfmrcbL8/U2E0N6FQSHI/AAAAAAAADn8/MYesLnFZQ_g/w600/drive-angry-movie-poster.jpg",
      "title": "Drive Angry",
      "year": "2010"
    },
    {
      "img": "http://4.bp.blogspot.com/-Dm0LsH9GeUo/U2E0-1SXNkI/AAAAAAAADoc/skj91ElzB6w/w600/thor_the_dark_world_ver7.jpg",
      "title": "Thor",
      "year": "2010"
    },
  ]
}
/*
class Movie extends Component {
  render() {
      return (
        <View style={styles.movie} >
          <Image
            source={{uri: this.props.movie.img}}
            style={styles.thumbnail}
          />
          <View >
            <Text 
            style={styles.title}
            numberOfLines={3}>{this.props.movie.title}</Text>
            <Text style={styles.year}>{this.props.movie.year}</Text>
          </View>
        </View>
      );
  }
}
*/
class GridViewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: originalData.data,
      loaded: false,
    }
  }
/*
  componentDidMount() {
    //this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: responseData.movies,
          loaded: true,
        });
      })
      .done();
  }
*/
  render() {
    /*
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
  */
    return (
      <View>
      
      <GridView
        items={this.state.dataSource}
        itemsPerRow={MOVIES_PER_ROW}
        renderItem={(item) => <View style={styles.movie} >
          <Image
            source={{uri: item.img}}
            style={styles.thumbnail}
          />
          <View >
            <Text 
            style={styles.title}
            numberOfLines={3}>{item.title}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
        </View>}
        style={styles.listView}
      />
      </View>
    );
  }
/*
  renderLoadingView() {
    return (
      <View>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }
*/
  renderItem(item) {
      return <Movie movie={item} />
  }
}

var styles = StyleSheet.create({
  movie: {
    height: 150,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 10,
    marginBottom: 8,
    width: 90,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
AppRegistry.registerComponent('GridViewApp', () => GridViewApp);

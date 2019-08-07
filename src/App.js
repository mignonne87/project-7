//Flickr's Api key
 import apiKey from './config.js';
//import the libraries needed for this project
import React, { Component } from 'react';
 import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
//import components into the App.js file
import SearchBar from './SearchBar'
import Nav from './Nav'
import Gallery from './Gallery'
import NotFound from './NotFound'


export default class App extends Component {
  //set state for app
  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true
    };
  }

  componentDidMount() {
  // Initialization
    this.searchEngine();
  }

  isTrue = (istrue = true) => {
    this.setState({
      loading: istrue
    });
  }
  //obtain data using axios 
  searchEngine = (query = 'scenic', istrue = false) => {
     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(answer => {
      this.setState({
        //set data to imgs state
        imgs: answer.data.photos.photo,
        loading: istrue
      });
    })
    .catch(error => {
      // console error for debugging
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (  
      //Add routes and a h3 display while the data is being fetched
      <BrowserRouter>
        <div className="container">
          <SearchBar onSearch={this.searchEngine} />
          <Nav istrue={this.isTrue}  onClick={this.searchEngine} />
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            : 
            <Switch>
              <Route exact path="/" render={ () => <Gallery title="Gallery" data={this.state.imgs} /> } /> 
              <Route path="/rainbows" render={ () => <Gallery title="Rainbows" data={this.state.imgs} /> } /> 
              <Route path="/flowers" render={ () => <Gallery title="Flowers" data={this.state.imgs} /> } /> 
              <Route path="/dallascowboys" render={ () => <Gallery title="DallasCowboys" data={this.state.imgs} /> } /> 
              <Route path="/:query" render={ ({match}) => <Gallery test={match} search={this.searchEngine(match.params.query)} title={match.params.query.toUpperCase()} data={this.state.imgs} /> } />  
              <Route component={NotFound} />
            </Switch>  
          }
        </div>
      </BrowserRouter>
    );
  }
}
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import SearchList2 from './SearchList2';
import Image from './Image';

class App extends Component {

  state = {
    searchValue: '',
    city: '',
    temp: '',
    country: '',
    type: '',
    renderList: false,
    iconId: '',
    forecast: [],
    photo: [],
    renderImage: false
  }

  apiCall = (city) => {
    const APIKEY = "20439ec0303048d44a639552c9936259";
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${APIKEY}`)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      this.setState({
        // city:data.name,
        // temp: data.main.temp_max,
        // country: data.sys.country,
        // type: data.weather[0].main,
        // iconId: data.weather[0].id.toString(),
        forecast: data,
        renderList: true
      });
    }).catch(function(error){
      console.log(error);
    })
  }

  flickrCall = (city) => {
    const APIKEY = "fee648dc948b2f1121b3b151c48794a3";
    // &group_id=45202403
    // fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&content_type=1&per_page=1&tags=${city}&format=json&nojsoncallback=true`)
    fetch(`https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=${APIKEY}&per_page=1&group_id=45202403@N00&tags=${city}&format=json&nojsoncallback=true`)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      this.setState({
        photo: data,
        renderImage: true
      });
    }).catch(function(error){
      console.log(error);
    })
  }

  submitSearch = (e) => {
    e.preventDefault();
    this.setState({
      renderList: false
    });
    const city = e.target.elements.city.value;
    if(city){
      this.apiCall(city);
      this.flickrCall(city);
      this.setState({searchValue: e.target.value});
    } else {
      'mete';
    }
  }

  handleChange = (e) => {
    this.setState({searchValue: e.target.value});
  }

  renderList = () => {
    console.log(this.state.iconId);
    if(this.state.renderList){
      // return <SearchList city={this.state.city} temp={this.state.temp} type={this.state.type} iconId={this.state.iconId}/>;
      return <SearchList2 data={this.state.forecast} />;
    }
  }

  renderImage = () => {
    if(this.state.renderImage){
      // return <img src={'https://www.flickr.com/photos/' + this.state.photo.photos.photo[0].owner + '/' + this.state.photo.photos.photo[0].id}/>;
      
      return <Image active={this.state.renderList} data={this.state.photo.photos.photo[0]} />
    }
  }

  render() {

    // console.log(this.state.searchData);
    // console.log(this.state.iconId);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Api</h1>
        </header>

        <SearchBar onSubmit={this.submitSearch} />
        {this.renderList()}
        <div id="mete">{this.renderImage()}</div>
      </div>
    );
  }
}

export default App;

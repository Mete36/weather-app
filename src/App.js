import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchList from './SearchList';


import bgImage from './images/image2.jpg';

class App extends Component {

  state = {
    searchValue: '',
    renderList: false,
    forecast: [],
    loading: false
  }

  apiCall = (city) => {
    const APIKEY = "20439ec0303048d44a639552c9936259";
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${encodeURIComponent(city)}&cnt=5&units=metric&APPID=${APIKEY}`)
    .then(results => {
        return results.json();
    }).then(data => {
      this.setState({
        forecast: data,
        renderList: true,
        loading: false
      });
    }).catch(function(error){
      console.log(error);
    })
  }

  submitSearch = (e) => {
    e.preventDefault();
    const city = e.target.value;

    if(city && city !== this.state.searchValue){
      this.setState({
        renderList: false,
        loading: true
      });
      this.setState({searchValue: city});
      this.apiCall(city);
    }
  }

  handleChange = (e) => {
    this.setState({searchValue: e.target.value});
  }

  renderList = () => {
    if(this.state.forecast.cod === '404'){
      return <div className="validCity">Please enter a valid City name.</div>;
    } else {
      if(this.state.renderList){
        return <SearchList data={this.state.forecast} />;
      }
    }
  }

  render() {

    return (
      <div className="App">
        <SearchBar onSubmit={this.submitSearch} />
        {this.renderList()}
        <div id="bg_image"><img src={bgImage} alt="Background"/></div>
      </div>
    );
  }
}

export default App;

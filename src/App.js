import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

class App extends Component {

  state = {
    searchValue: '',
    city: '',
    temp: '',
    country: '',
    type: '',
    renderList: false,
    iconId: ''
  }

  apiCall = (city) => {
    const APIKEY = "20439ec0303048d44a639552c9936259";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKEY}`)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        city:data.name,
        temp: data.main.temp_max,
        country: data.sys.country,
        type: data.weather[0].main,
        iconId: data.weather[0].id
      });
      console.log(data);
    }).catch(function(error){
      console.log(error);
    })
  }
  submitSearch = (e) => {
    e.preventDefault();
    this.setState({searchValue: e.target.value, renderList: true});
    const city = e.target.elements.city.value;
    this.apiCall(city);
  }
  handleChange = (e) => {
    this.setState({searchValue: e.target.value});
  }
  renderList = () => {
    console.log(this.state.iconId);
    if(this.state.renderList){
      return <SearchList city={this.state.city} temp={this.state.temp} type={this.state.type} iconId="802"/>;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <SearchBar onSubmit={this.submitSearch} />
        {console.log(this.state.searchData)}
        {console.log(this.state.iconId)}
        {this.renderList()}
        {/* <SearchList weather={this.state.searchData} /> */}
      </div>
    );
  }
}

export default App;

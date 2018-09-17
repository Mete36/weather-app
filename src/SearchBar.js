import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component{
    
    // state = {
    //     searchValue: "",
    //     searchData: []
    // }



    // apiCall = () => {
    //     const APIKEY = "20439ec0303048d44a639552c9936259";
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchValue}&units=metric&APPID=${APIKEY}`)
	// 		.then(results => {
	// 			return results.json();
	// 		}).then(data => {
    //             this.setState({searchData:data});
    //             console.log(this.state.searchData);
	// 		}).catch(function(error){
	// 			console.log(error);	
	// 		})
    // }

    // submitSearch = (e) => {
    //     e.preventDefault();
    //     this.setState({searchValue: e.target.value});
    //     console.log(this.state.searchValue);
    //     this.apiCall();
    // }
    // handleChange = (e) => {
    //     this.setState({searchValue: e.target.value});
    // }
    // showData = () => {
    //     if(this.state.data){
    //         this.state.data.name
    //     }
    // }

    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                <TextField
                    name="city"
                    placeholder="Enter City"
                />
                </form>
            </div>
        )
    }
}

export default SearchBar;
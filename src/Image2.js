import React, { Component } from 'react';

import CrossfadeImage from 'react-crossfade-image';

class Image extends Component{

    state = {
        mounted: false,
        photo: null
    }

    componentWillMount = () => {
        this.setState({
            mounted: true,
        })

    }
    
    render(){

        if(this.state.mounted){
            //console.log(this.random_item(photos));
             return <CrossfadeImage src={this.props.image} />
        }
    }
}

export default Image;
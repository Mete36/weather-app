import React from 'react';
import WeatherIcon from 'react-icons-weather';

const icon = {
    fontSize: 60,
    float: 'right',
    marginTop: 15,
}

const WeatherComponent = (props) => {
    return (
        <WeatherIcon style={icon} name="owm" iconId={props.iconId} flip="horizontal" rotate="90" />
    )
}

export default WeatherComponent;
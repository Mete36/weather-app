import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import WeatherIcon from './WeatherIcons';

import {Row, Col} from 'react-grid-system';

const styles = {
    cardContent: {
      paddingBottom:0
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    name: {
      marginBottom: 16,
      fontSize: 14,
    },
    information: {
        textAlign: 'left',
        float: 'left',
    },
    weather: {
        textTransform: 'uppercase',
        fontSize: 12
    },
    temp: {
        fontSize: 40,
        marginTop: 20,
    }
  };

const WeatherCard = (props) => {
    const { classes } = props;
  
    const weather = props.weather;
    console.log(weather);
  
    const activeClass = props.active ? 'active' : 'inactive';
  
    return(
        
        <Card className={`data_card ${activeClass}`}>
            <CardContent className={classes.cardContent}>
                <Row align="center">
                    <Col lg={6}>
                        <div className={classes.information}>
                            <div className={classes.title}>{props.city}</div>
                            <div>---</div>
                            <div className={classes.weather}>{props.type}</div>
                            <div className={classes.temp}>{props.temp}&#176;</div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <WeatherIcon iconId={props.iconId}/>
                    </Col>
                </Row>
            </CardContent>
        </Card>
                
    )
  }

export default withStyles(styles)(WeatherCard)
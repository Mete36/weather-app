import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import {Container, Row, Col} from 'react-grid-system';
import WeatherCard from './WeatherCard';

const styles = {
    card: {
      maxWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

const SearchList = (props) => {
  const { classes } = props;

  const weather = props.weather;
  console.log(weather);

  

  return(
    <Container>
      <Row justify="center">
          <Col lg={4}>
            <WeatherCard city={props.city} temp={props.temp} type={props.type} iconId={props.iconId}/>
          </Col>
      </Row>
    </Container>
  )
}

export default withStyles(styles)(SearchList)
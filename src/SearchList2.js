import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import {Container, Row, Col} from 'react-grid-system';
import WeatherCard from './WeatherCard';

import * as moment from 'moment';

const styles = {
    card: {
      marginBottom: 20
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
    container: {
      marginTop: 80
    }
  };

  

const SearchList2 = (props) => {

  // const city = props.data.city.name;
  const filterData = props.data.list.filter((e,i) => (i+1) % 3 == 1);
  const data = filterData.slice(0,5);
  console.log(data);
  // const data2 = data.map( data => moment(data.dt_text).format('dddd'));
  let date;
  return(
    <Container style={styles.container}>
      <Row justify="center">
          
            {
                data.map((data, i)=>{
                    date = moment(data.dt_txt).format('dddd');
                    console.log(date)
                    return (
                      <Col lg={4} key={data.dt} style={styles.card}>
                        <WeatherCard active={props.active} city={date} temp={data.main.temp} type={data.weather[0].main} iconId={data.weather[0].id.toString()} />
                      </Col>
                    ) 
                })
            }
          
      </Row>
    </Container>
  )
}

export default withStyles(styles)(SearchList2)
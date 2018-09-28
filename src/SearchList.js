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

  // const filterDate = (list) => {
  //   //We create a default date on year 0, month 0, day 0.
  //   //Every time we reach another day in the looping below "ldate" get updated
  //   //with the new date
  //   let ldate = moment().startOf('year')

  //   //We sort our array so we receive the shortest dates first
  //   list.sort((a, b) => (a.dt-b.dt))
  //   //We return an array with only 1 entry per day out of the array list
  //   return list.filter(obj => {
  //       //For each object in the list array
  //       //we create a new date object with the date of the object on the current array position, but time 0, 
  //       let actualDate = moment.unix(obj.dt).startOf('day');

  //       console.log(actualDate.format()+', '+ldate.format())

  //       //We compare the date of this array position with the last good one
  //       if(actualDate.unix() > ldate.unix()){
  //           console.log(1050)
  //           //If the new position is a higher day, update lday and return
  //           ldate = actualDate
  //           return true
  //       }
  //   })
  // }

const SearchList = (props) => {

  const data = props.data.list;

  let datei;

  return(
    <Container style={styles.container}>
      <Row justify="center">
        {
            data.map((data, i)=>{
                datei = moment.unix(data.dt).format('dddd Do MMMM');
                return (
                  <Col lg={4} key={data.dt} style={styles.card}>
                    <WeatherCard active={props.active} date={datei} temp={Math.round(data.temp.day)} type={data.weather[0].main} iconId={data.weather[0].id.toString()} />
                  </Col>
                ) 
            })
        }
      </Row>
    </Container>
  )
}

export default withStyles(styles)(SearchList)
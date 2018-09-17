import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
      <div>
          <Card className={classes.card}>
              <CardContent>
                  {weather.name}
                  {weather.weather[0].main}
                  {weather.sys.country}
                  {weather.main.temp_max}
              </CardContent>
          </Card>
      </div>
  )
}

export default withStyles(styles)(SearchList)
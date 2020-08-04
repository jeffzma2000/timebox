import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Header from './Header';
import TodoList from './List';
import LineTo from 'react-lineto'
import Line from 'react-lineto'
import { useState, useEffect } from 'react';

function Home() {
  const [currentTime, setCurrentTime] = useState(0);

  var am_hours = [...Array(13).keys()].slice(8, 13).map((hour)=> String(hour).concat('am'))
  var pm_hours = [...Array(12).keys()].slice(1, 9).map((hour)=> String(hour).concat('pm'))
  var hours = am_hours.concat(pm_hours)

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Grid direction="column">
      <Grid item>
        <Header />
      </Grid>
      <p>The current time is {currentTime}.</p> 
      <Grid item container>
        <Grid item xs={0} sm={1} />
        <Grid item container xs={12} sm={10}>
          <Grid item xs={4} justify="center">
            <Typography variant="h5" color="primary" align="center">Today's Priorities</Typography>
            <TodoList number={3} labels={['1.', '2.', '3.']}/>
            <Typography variant="h5" color="primary" align="center">Task Dump</Typography>
            <TodoList number={10}/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={7} justify="center">
            <Grid container direction="row">
              <Grid xs={6}>
                <Typography variant="h5" color="primary" align="center" >:00</Typography>
                <TodoList number={13} labels={hours}/>
              </Grid>
              <Grid xs={6}>
              <Typography variant="h5" color="primary" align="center">:30</Typography>
                <TodoList number={13}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </Grid>
  );
}

export default Home;
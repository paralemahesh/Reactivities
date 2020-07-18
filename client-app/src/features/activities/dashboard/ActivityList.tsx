import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IActivity } from '../../../app/models/activity';
import ActivityListItem from './ActivityListItem';
import { ActivityDetails } from './ActivityDetails';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    details: {
      justifyContent: "center"
    }
  })
);

interface IProps {
  activities: IActivity,
}

export const ActivityList = ({activities}) => {
  const classes = useStyles();

  const gridItems = activities.map(a =>
    <Grid item xs={12}>
      <ActivityListItem activity={a}></ActivityListItem>
    </Grid>
  );

  return (
    <div className={classes.root}>
        <Grid container>
          <Grid item container xs={12} md={4}>
            {gridItems}
          </Grid>
          <Grid className={classes.details} item container xs={12} md={8}>
            <ActivityDetails></ActivityDetails>
          </Grid> 
        </Grid>
    </div>
  );
}
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { IActivity } from '../../../app/models/activity';
import ActivityListItem from './ActivityListItem';

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
          <Grid item container xs={12} md={4} spacing={2}>
            {gridItems}
          </Grid>
        </Grid>
    </div>
  );
}

// import React from 'react';
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
// import { IActivity } from '../../../app/models/activity';

// interface IProps {
// activities: IActivity
// }

// const useStyles = makeStyles((theme: Theme) =>
// createStyles({
// root: {
// width: '100%',
// maxWidth: '36ch',
// backgroundColor: theme.palette.background.paper,
// },
// inline: {
// display: 'inline',
// },
// }),
// );

// export const ActivityList = ({activities}) => {
// var classes = useStyles();

// function getInnerDetails(activity) {
// return (
// <React.Fragment>
  // <span>{activity.description + " " + activity.venue + ", " + activity.city}</span>
  // <Button variant="contained" color="primary">
    // Primary
    // </Button>
  // </React.Fragment>
// );
// }
// return (
// <List className={classes.root}>
  // {activities.map((activity) => (
  // <React.Fragment key={activity.id}>
    // <ListItem alignItems="flex-start">
      // <ListItemText primary={activity.title} secondary={getInnerDetails(activity)}>
        // </ListItemText>
      // </ListItem>
    // </React.Fragment>
  // ))}
  // </List>
// )
// }
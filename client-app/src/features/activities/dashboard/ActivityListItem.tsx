import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IActivity } from '../../../app/models/activity';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  pos: {
    marginBottom: 12,
  },
  category: {
    marginTop: '5px',
  },
  actions: {
    justifyContent: 'flex-end'
  },
  content: {
    paddingBottom: '0px'
  }
});

interface IProps {
  activity: IActivity
}

export default function ActivityListItem({activity}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h5">
          {activity.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {activity.date}
        </Typography>
        <Typography variant="body2" component="p">
          {activity.description}
          <br />
          {`${activity.city}, ${activity.venue}`}
        </Typography>
        <Chip className={classes.category} label={activity.category} />
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary">Details</Button>
      </CardActions>
    </Card>
  );
}

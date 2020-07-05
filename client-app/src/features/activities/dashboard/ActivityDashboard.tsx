import React from 'react'
import { IActivity } from '../../../app/models/activity';
import { ActivityList } from './ActivityList';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "20px"
    }
  })
);

interface IProps {
    activities: IActivity[]
}

const ActivityDashboard : React.FC<IProps> = ({activities}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ActivityList activities={activities}></ActivityList>
        </div>
    );
}

export default ActivityDashboard;
import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { IActivity } from '../../../app/models/activity';

interface IProps {
    activities: IActivity
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

export const ActivityList = ({activities}) => {
    var classes = useStyles();
    return (

        <List className={classes.root} >
            {activities.map((activity) => (

                <React.Fragment key={activity.id}>
                    <ListItem  alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar src={`http://localhost:3000/public/assets/categoryImages/${activity.category}.jpg`} alt={activity.title} />
                        </ListItemAvatar>
                        <ListItemText primary={activity.title} secondary={activity.description + " " + activity.venue + ", " + activity.city} />
                    </ListItem>
                </React.Fragment>
            ))}
        </List>
    )
}

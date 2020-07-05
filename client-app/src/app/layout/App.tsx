import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#fafafa"
    },
    mainContainer: {
      // top: "68px",
      top: "100px",
      minWidth: "100%"
    }
  })
);

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const classes = useStyles();

  useEffect(() =>{
    axios.get<IActivity[]>("http://localhost:5000/api/activities")
        .then((response) => {
          setActivities(response.data);
        })
  }, []);


  return (
    <div className={classes.root}>
        <NavBar></NavBar>
        <Container className="mainContainer">
          <ActivityDashboard activities={activities}></ActivityDashboard>
        </Container>
      </div>
  )
}

export default App;

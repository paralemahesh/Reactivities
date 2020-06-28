import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import Chip from '@material-ui/core/Chip';
import { Container } from '@material-ui/core';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() =>{
    axios.get<IActivity[]>("http://localhost:5000/api/activities")
        .then((response) => {
          setActivities(response.data);
        })
  }, []);

  return (
    <React.Fragment>
        <NavBar></NavBar>
        <Container maxWidth="sm" className="mainContainer">
          <ActivityDashboard activities={activities}></ActivityDashboard>
        </Container>
      </React.Fragment>
  )
}

export default App;

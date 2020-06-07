import React, {Component} from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    activities : []
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Reactivities
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>

        <List component="nav" aria-label="main mailbox folders">
          {console.log(this.state.activities)}
          {this.state.activities.map(i => <ListItemText key={i.id}><Chip label={i.title}/></ListItemText>)}
        </List>
      </div>
    )
  }

  componentDidMount() {
    axios.get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        this.setState({activities:response.data});
      })
  }
}
export default App;

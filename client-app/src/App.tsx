import React, {Component} from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

class App extends Component {
  state = {
    values : []
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
          {this.state.values.map(i => <ListItemText primary={i.name} key={i.id}></ListItemText>)}
        </List>
      </div>
    )
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/values")
      .then((response) => {
        this.setState({values:response.data});
      })
  }
}
export default App;

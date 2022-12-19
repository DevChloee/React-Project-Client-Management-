
import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
// import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// import { makeStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [{
  'id':1,
  'image': 'http://placeimg.com/64/64/1',
  'name' : 'Chloejun',
  'birthday' : '940411',
  'gender' : 'female',
  'job' : 'programmer'
},
{
  'id':2,
  'image': 'http://placeimg.com/64/64/2',
  'name' : 'Soon Shin Lee',
  'birthday' : '960212',
  'gender' : 'male',
  'job' : 'student'
},{

  'id':3,
  'image': 'http://placeimg.com/64/64/3',
  'name' : 'Gil Dong Hong',
  'birthday' : '900123',
  'gender' : 'male',
  'job' : 'designer'
}]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birth date</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return (<Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
                );
              })
            }
          </TableBody>
        </Table>
      </div>
      
    );
  }
}

// export default withStyles(styles)(App);

export default App;



import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

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
    return (
      <div>
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
      </div>
      
    );
  }
}

export default App;


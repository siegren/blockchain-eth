import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AddSchool from './AddSchool';
import SearchSchool from './SearchSchool';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import SearchStudent from './SearchStudent';

class App extends Component {
 // updateSchool(address){
//    const{ editaddress } = this.state.ContractInstance;

 //   editidno(address, (err, result) => {
 //     if(err) console.error('All fields Required', err);
  //    console.log(result);
 //   })
 // }

  render() {
    return (

     
        <Switch>
          <Route exact path='/' component={SearchSchool}/>
          <Route path='/add_school' component={AddSchool}/>
          <Route path='/add_student' component={AddStudent}/>
          <Route path='/update_student' component={UpdateStudent}/>
          <Route path='/search_student' component={SearchStudent}/>
        </Switch>

    );
  }
}

export default App;

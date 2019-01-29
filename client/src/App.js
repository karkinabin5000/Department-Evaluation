import React, { Component } from 'react';
import AppNavbar from './components/APPNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
       <AppNavbar></AppNavbar>
      
    <React.Fragment>
      <form action = "/action_page.php" method="get">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.></small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>

        <a href="#" class="forgotten">Forgotten your username or password</a><br></br>
        <hr class = "new"></hr>

        <button type="submit" class="btn btn-primary" formaction="">Submit</button>

        <button type="submit" class="btn btn-primary" formaction="" >Create a new account></button>
        </form>
        </React.Fragment>
        </div>
    );
  }
}

export default App;

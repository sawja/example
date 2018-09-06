import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import Posts from './components/posts/Posts';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navbar}/>
        <Route path="/home" exact component={Navbar}/>
        <Switch>
          <Route path="/posts" exact component={Posts}/>
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components';
import Photos from './components/photos';
import './index.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/:id" component={Photos} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
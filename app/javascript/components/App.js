import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './greeting';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Greeting} />
      </Switch>
    </Router>
  );
};

export default App;

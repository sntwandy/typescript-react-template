import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Hello from '../components/Hello';
import NotFound from '../components/NotFound';

const App = () : JSX.Element => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
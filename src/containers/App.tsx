import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Hello from '../components/Hello';

const App = () : JSX.Element => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Hello} />
      </Switch>
    </Router>
  );
};

export default App;
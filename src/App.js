import React from 'react';
import IndexPage from './Components/Pages/Index';
import ProjectPage from './Components/Pages/ProjectPage';
import { BrowserRouter as Router, Route, Index } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Project" component={ProjectPage} />
      </Router>
    </div>
  );
};

export default App;

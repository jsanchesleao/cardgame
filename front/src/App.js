import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import StartPage from './components/start/StartPage';
import HomePage from './components/home/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/start">
          <StartPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

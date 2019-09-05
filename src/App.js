import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Goals from './components/Goals';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Navigation />
          <div>
            <Route exact path="/" component={() => <Dashboard />}/>
            <Route exact path="/goals" component={() => <Goals />}/>
          </div>
          {/* <Dashboard />
          <Goals /> */}
      </div>
    </Router>
  );
}

export default App;

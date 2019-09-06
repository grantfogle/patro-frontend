import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Goals from './components/Goals';
import Goal from './components/Goal';


function App() {
  return (
    <Router>

      <Navigation />
      <div>
        <Route exact path="/" component={() => <Dashboard />} />
        <Route exact path="/goals" component={() => <Goals />} />
        <Route path="/goal/:id" component={Goal}/>
      </div>
      {/* <Dashboard />
          <Goals /> */}

    </Router>
  );
}

export default App;

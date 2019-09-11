import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Goals from './components/Goals';
import ShowGoal from './components/ShowGoal';


function App() {
  return (
    <Router>
      <div className="app">
      <Navigation />
      
        <Route exact path="/" component={() => <Dashboard />} />
        <Route exact path="/goals" component={() => <Goals />} />
        {/* return <ShowMovie movies={this.state.movies} {...props} editMovie={this.editMovie} handleInput={this.handleInput} /> */}
        <Route path="/goal/:id" component={() => <ShowGoal />}/>
      </div>
      {/* <Dashboard />
          <Goals /> */}

    </Router>
  );
}

export default App;

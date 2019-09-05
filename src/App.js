import React from 'react';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Goals from './components/Goals';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Dashboard />
        <Goals />
    </div>
  );
}

export default App;

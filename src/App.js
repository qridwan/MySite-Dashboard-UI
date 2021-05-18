import './App.css';
import React, { Component }  from 'react';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Sidebar/>
    </div>
  );
}

export default App;

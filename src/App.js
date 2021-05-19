import './App.css';
import React, { Component }  from 'react';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import PlayGround from './components/Playground/PlayGround';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Sidebar/>
      <PlayGround/>
    </div>
  );
}

export default App;

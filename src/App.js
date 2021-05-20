import './App.css';
import React, { Component }  from 'react';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import PlayGround from './components/Playground/PlayGround';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
    <Router>
    
      <Navigation/>
      <Sidebar/>
    <Switch>
    <route path="/AccessControl">
      <PlayGround/>
    </route>
    </Switch>
  
    
    </Router></div>
  );
}

export default App;

const Content = styled.div`
height: 90vh;
width: calc(100% - 315px);
float: right;
`
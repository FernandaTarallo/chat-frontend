import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './screens/Login'
import WebChat from './screens/WebChat'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      {/* <Route path="/" exact component={Chat} /> */}
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={WebChat}/>
    </Router>
  );
}

export default App;

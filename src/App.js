import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Join from './components/join/join.js';
import Chat from './components/chat/chat';
import Login from './components/login/login.js';

function App() {
  return (
    <Router>
      <Route path='/' exact component = {Login} />
      <Route path='/join' component = {Join} />
      <Route path='/chat' component = {Chat} />
    </Router>
  );
}

export default App;

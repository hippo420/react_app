
import Login from './pages/Login'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './pages/Main'

export default class Routes extends Component {

  render() {
    alert('aaa');
    return (
      <Router>
        
        <Route exact path='/' component={Main}/>
      </Router>
    )
  }
}

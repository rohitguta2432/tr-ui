import React from 'react'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/home/Home';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </>
  )
}

export default App

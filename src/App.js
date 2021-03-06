import React from 'react'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Learning from './component/learning/Learning';
import Create from './component/content/Create';
import Contact from './component/contact/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learning" component={Learning} />
          <Route path="/content-create" component={Create} />
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </Router>
    </>
  )
}

export default App

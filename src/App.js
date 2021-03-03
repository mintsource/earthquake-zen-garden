import React from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom"
import Header from './js/shared/Header'
import EarthQuakeList from './js/views/EarthQuakeList'
import EarthQuakeDetail from './js/views/EarthQuakeDetail'
import Profile from './js/views/Profile'
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <EarthQuakeList />
          </Route>
          <Route path="/detail/:id">
            <EarthQuakeDetail />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

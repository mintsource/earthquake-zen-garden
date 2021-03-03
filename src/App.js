import React from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom"
import Header from './js/shared/Header'
import Footer from './js/shared/Footer'
import EarthQuakeList from './js/shared/views/EarthQuakeList'
import EarthQuakeDetail from './js/shared/views/EarthQuakeDetail'
//import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <EarthQuakeList />
          </Route>
          <Route path="/detail/:id">
            <EarthQuakeDetail />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

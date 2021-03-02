import React from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom"
import Header from './js/shared/Header'
import Footer from './js/shared/Footer'
import EarthQuakeList from './js/shared/views/EarthQuakeList'
import EarthQuakeDetail from './js/shared/views/EarthQuakeDetail'
import earthQuakeData from './data/earthquakes.json'

function App() {

  console.log(`earthQuakeData.data.features: ${earthQuakeData.data.features}`)

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/detail">
            <EarthQuakeDetail />
          </Route>
          <Route exact wpath="/">
            <EarthQuakeList earthquakes={earthQuakeData.data.features} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

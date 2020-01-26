import React from 'react';
import './App.css';
import Overview from "./components/Overview"
import Students from "./components/Students"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/dashboard">
            <Overview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welkom bij het Eindproject van Paulien. <br/>
      We gaan in Dashboard kijken naar de resultaten van de klasgenoten. <br/>
      Ook kunnen we in Students kijken hoe elk individuele student gescoord heeft.</p>
    </div>
  );
}



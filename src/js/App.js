import React from 'react';
import '../css/App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/upload">
                    <Header />
                
                </Route>
                <Route path="/listAll">
                    <Header />
                </Route>
                <Route path="/">
                    <Header />
                    <Dashboard /> 
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

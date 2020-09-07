import React from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import UploadBook from './UploadBook';
import SavedInfo from './SavedInfo';
import Book from './Book';
import ListAll from './ListAll';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import * as ROUTES from '../constants/constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditBook from './EditBook';
import Search from './Search';
import GetStarted from './GetStarted';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path={ROUTES.UPLOAD}>
                    <Header />
                    <UploadBook />
                    <Footer />
                </Route>
                <Route path={ROUTES.LISTALL}>
                    <Header />
                    <ListAll />
                    <Footer />
                </Route>
                <Route path={ROUTES.SAVED}>
                    <Header />
                    <SavedInfo />
                    <Footer />
                </Route>
                <Route path={`${ROUTES.BOOK}/:uid`}>
                    <Header />
                    <Book />
                    <Footer />
                </Route>
                <Route path={`${ROUTES.EDIT}/:uid`}>
                    <Header />
                    <EditBook />
                    <Footer />
                </Route>
                <Route path={ROUTES.SEARCH}>
                    <Header />
                    <Search />
                    <Footer />
                </Route>
                <Route path={ROUTES.GETSTARTED}>
                    <Header />
                    <GetStarted />
                    <Footer />
                </Route>
                <Route path={ROUTES.LANDING}>
                    <Header />
                    <Dashboard /> 
                    <Footer />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

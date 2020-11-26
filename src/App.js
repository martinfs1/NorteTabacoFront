import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Admin from './pages/Admin';
import CigarrillosPage from './pages/CigarrillosPage';
import FuegosAPage from './pages/FuegosAPage';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact={true} path="/fa" component={FuegosAPage} />
          <Route exact={true} path="/admin" component={Admin} />
          <Route exact={true} path="/" component={CigarrillosPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

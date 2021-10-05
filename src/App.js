import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';

import About from './components/About/About';
import Features from './components/Features/Features';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/courses'>
            <Courses></Courses>
          </Route>

          <Route exact path='/features'>
            <Features></Features>
          </Route>

          <Route exact path='/about'>
            <About></About>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

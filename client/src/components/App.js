import './App.css';
import React, {Fragment} from 'react';
import Projects from '../pages/Projects';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <Fragment>
          <Header/> 
          <div className="App">
            <Switch>
              <Route exact path="/home" component={Projects} />
              <Route exact path="/" component={Projects} />
            </Switch> 
          </div>
         <Footer/> 
  </Fragment>
)

export default App;

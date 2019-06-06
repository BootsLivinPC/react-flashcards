import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import {Route, Switch, } from "react-router-dom";
import { Container, } from "semantic-ui-react";


const App = () => (// fragment can be <> </> without calling it in react
  // switch statement, do these routes match? no display NoMatch.
  <>
  <NavBar />
  <Container>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/card" component={Card} />
     <Route component={NoMatch} />
    </Switch>
   </Container>
  
   </>
 );
 

export default App;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Montaj from './components/Montaj';
import Ownerdic from './components/Ownerdic';

function App() {
  return (
    <main className="container" >
        <Switch id="main">
            <Route exact path="/dodoc/" 
                component={Home} />
            <Route exact path="/dodoc/ownerdic" 
                component={Ownerdic} />
            <Route exact path="/dodoc/montaj" 
                component={Montaj} />           
        </Switch>
    </main>
  );
}

export default App;

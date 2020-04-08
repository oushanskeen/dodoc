import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <main class="container" >
        <Switch id="main">
            <Route exact path="/dodoc/" 
                component={Home} />          
        </Switch>
    </main>
  );
}

export default App;

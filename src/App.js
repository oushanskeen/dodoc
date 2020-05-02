import React from 'react';
import { Route, Switch,BrowserRouter as Router,Link } from 'react-router-dom';
import Home from './components/Home';
import Montaj from './components/Montaj';
import Ownerdic from './components/Ownerdic';
import Agentdic from './components/Agentdic';
import Dogovordic from './components/Dogovordic';
import Objectdic from './components/Objectdic';

function App() {
  return (
    <main className="container" >
            <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/dodoc">home</Link>
                  </li>
                  <li>
                    <Link to="/dodoc/ownerdic">owners</Link>
                  </li>
                  <li>
                    <Link to="/dodoc/agentdic">agents</Link>
                  </li>
                  <li>
                    <Link to="/dodoc/objdic">objects</Link>
                  </li>
                  <li>
                    <Link to="/dodoc/dogdic">dogovors</Link>
                  </li>
                </ul>
                <hr/>
            <Switch id="main">
                <Route exact path="/dodoc/" 
                    component={Home} />
                <Route exact path="/dodoc/ownerdic" 
                    component={Ownerdic} />
                <Route exact path="/dodoc/agentdic" 
                    component={Agentdic} />
                <Route exact path="/dodoc/dogdic" 
                    component={Dogovordic} />
                <Route exact path="/dodoc/objdic" 
                    component={Objectdic} />
                <Route exact path="/dodoc/montaj" 
                    component={Montaj} />           
            </Switch>
           </div>
        </Router>
    </main>
  );
}

export default App;

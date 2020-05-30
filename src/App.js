import React from 'react';
import { Route, Switch,BrowserRouter as Router,Link } from 'react-router-dom';
import Home from './components/Home';
import Montaj from './components/MONTAJ/Montaj';
import Ownerdic from './components/DICTIONARIES/Ownerdic';
import Agentdic from './components/DICTIONARIES/Agentdic';
import Dogovordic from './components/DICTIONARIES/Dogovordic';
import Objectdic from './components/DICTIONARIES/Objectdic';
import Dogovor from './components/Dogovor';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <main className="container" >
        <ThemeProvider theme={theme}>
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
                <Route exact path="/dodoc/dogdic/:dogovor"
                    component={Dogovor}/>
                <Route exact path="/dodoc/montaj" 
                    component={Montaj} />           
            </Switch>
           </div>
        </Router>
        </ThemeProvider>
    </main>
  );
}

export default App;

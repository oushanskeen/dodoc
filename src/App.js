import React from 'react';
import { Route, Switch,BrowserRouter as Router,Link } from 'react-router-dom';
import Home from './components/Home';
import Montaj from './components/MONTAJ/Montaj';
import Ownerdic from './components/DICTIONARIES/Ownerdic';
import Agentdic from './components/DICTIONARIES/Agentdic';
import Dogovordic from './components/DICTIONARIES/Dogovordic';
import Objectdic from './components/DICTIONARIES/Objectdic';
import Dogovor from './components/Dogovor';
//import BeautyList from './components/BeautyList';
import { ThemeProvider } from 'emotion-theming';
//import theme from '@rebass/preset';
import theme from './theme.js';
import { createGlobalStyle } from 'styled-components';
import  { BeautyList, NavBar } from './components/BeautyList';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
  }
`;
const endpoints = 
  [ {name: 'home', path: "/dodoc/", component: Home},
    {name: 'owners', path: "/dodoc/ownerdic", component: Ownerdic},
    {name: 'agents', path: "/dodoc/agentdic", component: Agentdic},
    {name:' objects', path: "/dodoc/objdic", component: Objectdic},
    {name: 'dogovors', path: "/dodoc/dogdic", component: Dogovordic},
  ];


function App() {
  return (
    <main className="container" >
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
            <Router>
              <div>
                <NavBar data={endpoints} />
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
                <Route exact path='/dodoc/beautylist'
                    component={BeautyList} />
            </Switch>
           </div>
        </Router>
        </ThemeProvider>
    </main>
  );
}

export default App;

import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Montaj from "./components/MONTAJ/Montaj";
import Ownerdic from "./components/DICTIONARIES/Ownerdic";
import Agentdic from "./components/DICTIONARIES/Agentdic";
import Dogovordic from "./components/DICTIONARIES/Dogovordic";
import Objectdic from "./components/DICTIONARIES/Objectdic";
import Dogovor from "./components/Dogovor";
//import BeautyList from './components/BeautyList';
import { ThemeProvider } from "emotion-theming";
//import theme from '@rebass/preset';
import theme from "./theme.js";
import { createGlobalStyle } from "styled-components";
import { BeautyList, NavBar } from "./components/BeautyList";
import { Flex, Box, Text } from 'rebass';
import * as actions from './actions/index';
import { connect } from "react-redux";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <main className="container">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
          <div>
            <HashRouter >
              <Flex 
                width='100%' 
                height='90px'
                bg='seven' 
                color='white'
                alignItems='center'
                justifyContent='space-around' 
              >
                <NavLink to="/dodoc"
                  style={{textDecoration: 'none', color: 'LightGrey'}}
                  activeStyle={{fontWeight:'bold', color:'white'}}
                >DoDoc</NavLink>
                <NavLink to="/dodoc/ownerdic"
                  style={{textDecoration: 'none', color: 'LightGrey'}}
                  activeStyle={{fontWeight:'bold', color:'white'}}
                > owners</NavLink>
                <NavLink to="/dodoc/agentdic"
                  style={{textDecoration: 'none', color: 'LightGrey'}}
                  activeStyle={{fontWeight:'bold', color:'white'}}
                >agents</NavLink>
                <NavLink to="/dodoc/objdic"
                  style={{textDecoration: 'none', color: 'LightGrey'}}
                  activeStyle={{fontWeight:'bold', color:'white'}}
                >objects</NavLink>
                <NavLink to="/dodoc/dogdic"
                  style={{textDecoration: 'none', color: 'LightGrey'}}
                  activeStyle={{fontWeight:'bold', color:'white'}}
                >dogovors</NavLink>
              </Flex>
            <Switch id="main">
              <Route exact path="/dodoc">
                <Home/>
              </Route>
              <Route path="/dodoc/ownerdic">
                <Ownerdic />
              </Route>
              <Route path="/dodoc/agentdic">
                <Agentdic />
              </Route>
              <Route exact path="/dodoc/dogdic" component={Dogovordic} />
              <Route exact path="/dodoc/objdic" component={Objectdic} />
              <Route exact path="/dodoc/dogdic/:dogovor" component={Dogovor} />
              <Route exact path="/dodoc/montaj" component={Montaj} />
              <Route exact path="/dodoc/beautylist" component={BeautyList} />
            </Switch>
          </HashRouter>
          </div>
      </ThemeProvider>
    </main>
  );
}

const mapStateToProps = (_state) => ({
  state: _state
});
const mapDispatchToProps = (_dispatch) => ({
  onGetOwner: (()=>_dispatch(actions.getOwner('owner')))(),
  onGetAgent: (()=>_dispatch(actions.getAgent('agent')))(),
  onGetObject: (()=>_dispatch(actions.getObject('object')))(),
  onGetDogovor: (()=>_dispatch(actions.getDogovor('dogovor')))()
}) 

export default connect(mapStateToProps,mapStateToProps)(App);
//export default App;

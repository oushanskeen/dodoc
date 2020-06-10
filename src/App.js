import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  NavLink
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
import { Flex, Box, Text } from "rebass";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
  }
`;

const links = [
  ["/dodoc", "DoDoc"],
  ["/dodoc/ownerdic", "owners"],
  ["/dodoc/agentdic", "agents"],
  ["/dodoc/objdic", "objects"],
  ["/dodoc/dogdic", "dogovors"]
];

function App() {
  return (
    <main className="container">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Flex height="90px"
                bg="seven"
                alignItems="center"
                justifyContent="space-around"
              >
                {console.log(links)}
                {links.map(e => (
                  <NavLink
                    to={e[0]}
                    style={{ textDecoration: "none", color: "LightGrey" }}
                    activeStyle={{ fontWeight: "bold", color: "white" }}
                  >
                    {e[1]}
                  </NavLink>
                ))}
            </Flex>
            <Switch id="main">
              <Route exact path="/dodoc/" component={Home} />
              <Route exact path="/dodoc/ownerdic" component={Ownerdic} />
              <Route exact path="/dodoc/agentdic" component={Agentdic} />
              <Route exact path="/dodoc/dogdic" component={Dogovordic} />
              <Route exact path="/dodoc/objdic" component={Objectdic} />
              <Route exact path="/dodoc/dogdic/:dogovor" component={Dogovor} />
              <Route exact path="/dodoc/montaj" component={Montaj} />
              <Route exact path="/dodoc/beautylist" component={BeautyList} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </main>
  );
}

export default App;

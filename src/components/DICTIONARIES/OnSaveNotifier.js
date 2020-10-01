import React, { useState } from "react";
import { Text, Box, Button } from "rebass";
import { ThemeProvider } from "emotion-theming";
import theme from "../../theme";
import { createGlobalStyle } from "styled-components";
import * as actions from "../../actions/paperDogovor";
import { connect } from "react-redux";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.google.com/css2?family=Roboto&disply=swap');
  body{
    font-family: "Roboto", sans-serif;
  }
`;

const OnSaveNotifier = ({ state, onDogOnSaveStatusToDefault }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Button width={"auto"} bg={"white"} color={"four"} disabled={"true"}>
        {state === "ON_SAVE_SUCCESS"
          ? setTimeout(() => onDogOnSaveStatusToDefault(), 1000)
          : state}
      </Button>
    </ThemeProvider>
  </>
);
const mapStateToProps = _store => ({
  store: _store
});
const mapDispatchToProps = _dispatch => ({
  onDogOnSaveStatusToDefault: () =>
    _dispatch(actions.dogOnSaveStatusToDefault())
});

//export default connect(mapStateToProps, mapDispatchToProps)(OnSaveNotifier);
export default OnSaveNotifier;

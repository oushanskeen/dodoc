import React from "react";
import {Text, Box, Button} from "rebass";
import {ThemeProvider} from "emotion-theming";
import theme from "../../theme";
import {createGlobalStyle} from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.google.com/css2?family=Roboto&disply=swap');
  body{
    font-family: "Roboto", sans-serif;
  }
`;

const OnSaveNotifier = ({ state }) => (
  <>
  <GlobalStyles/>
  <ThemeProvider theme={theme} >
      <Button 
        width={"auto"} 
        bg={"white"} 
        color={"four"} 
        disabled={"true"}
      >
      { state === "ON_SAVE_STARTED"
        ? <i>договор сохраняется ...</i>
        : state === "ON_SAVE_SUCCESS"
          ? <i>договор успешно сохранён</i>
          : state === "ON_SAVE_FAILED"
            ? <i>ошибка сервера</i>
            : ""
      }
      </Button>
  </ThemeProvider>
  </>
);

export default OnSaveNotifier;

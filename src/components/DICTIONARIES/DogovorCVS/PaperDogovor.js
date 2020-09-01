import React, { useRef, useState } from "react";
import { Text, Box, Button } from "rebass";
import { DicButton, DicBar } from "../../BeautyList";
import { ThemeProvider } from "emotion-theming";
import theme from "../../../theme";
import EditManager from "../EditManager";

const PaperDogovor = ({
  data: { dogName, id, state="ON_FOLD", component }
}) => {
  let [_state, _setState] = useState(state);
  const onShowHandler = ({s,ss}) => (
    s === "ON_FOLD" 
    ? ss("ON_SHOW")
    : ss("ON_FOLD")
  );
  return(
  <ThemeProvider theme={theme}>
    <DicBar
      barName={dogName}
      buttonsBar={
        <>
          <DicButton 
            name={"show"} 
            action={[onShowHandler,{s:_state,ss:_setState}]}
          />
          <DicButton name={"compare"} />
        </>
      }
    />
    {_state === "ON_SHOW" ? (
      <EditManager inputComponent={component} />
    ) : _state === "ON_COMPARE" ? (
      <Box>COMPARE COMPONENT</Box>
    ) : (
      ""
    )}
  </ThemeProvider>
)};

export default PaperDogovor;

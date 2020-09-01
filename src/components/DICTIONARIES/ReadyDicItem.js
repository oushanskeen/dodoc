import React from "react";
import {Button} from "rebass";
import {Checkbox} from "@rebass/forms";
import {DicBarN, DicButton, DicStatusBar} from "../BeautyList";
import {ThemeProvider} from "emotion-theming";
//import theme from "@rebass/preset";
import theme from "../../theme";
import {createGlobalStyle} from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
  }
`;

const ReadyDicItem = ({dic:{type, id, name, isChosen, state }, 
  onSelectReadyDicItem, onDeleteReadyDicItem}) => {
  const onShow = state === "IN_SHOW_STATE";
  const onCompare = state === "IN_COMPARE_STATE";
  const onDisable = state === "IN_DISABLED_STATE";
  const onQuiet = state === "QUIET"
  return (
  <>
  <GlobalStyles/>
  <ThemeProvider theme={theme}>
  <>
  <DicBarN
    disabled={!onQuiet}
    barName={name}
    buttonsBar={
      <>
         <DicButton
          action={[onDeleteReadyDicItem,id]}
          isDisabled={onCompare || onDisable}
          name={"show"}
         />
         <DicButton 
          action={[onDeleteReadyDicItem,id]}
          isDisabled={!onQuiet}
          name={"delete"}
         />
         <DicButton 
          action={[onDeleteReadyDicItem,id]}
          isDisabled={onShow || onDisable}
          name={"compare"}
         />
       </>
     }
  />
  </>
  </ThemeProvider>
  </>
)};

export default ReadyDicItem;

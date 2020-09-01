import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { DicButton } from "../BeautyList";
import { Box } from "rebass";
import EditBox from "./EditBox";
import { ThemeProvider } from "emotion-theming";
import theme from "../../theme";
//import { connect } from "react-redux";

const EditManager = ({ inputComponent, state, onSave, onPrint }) => {
  console.log(`EditManager inputComponent`);
 // console.log(`EditManager inputComponent: 
 //   ${ReactDOMServer.renderToStaticMarkup(inputComponent)}`);
  console.log(inputComponent);
  console.log(`EDIT MANAGER DOGONSAVESTATUS: ${state}`);
  const events = {onSave, onPrint};
  let [isEditable, setIsEditable] = useState(false);
  const onEdit = () => setIsEditable(!isEditable);
  return (
    <ThemeProvider theme={theme}>
      <Box width={"90%"} p={3} m={3} style={{border:"1px solid silver"}}>
        <DicButton action={[onEdit, ""]} name={"edit"} />
        <EditBox
          editBoxData={{
            inputComponent,
            state: isEditable ? "ON_EDIT" : state,
          }}
          {...events}
        />
      </Box>
    </ThemeProvider>
  );
};

export default EditManager;

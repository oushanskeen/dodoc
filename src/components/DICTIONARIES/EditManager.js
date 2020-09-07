import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { DicButton } from "../BeautyList";
import { Box } from "rebass";
import EditBox from "./EditBox";
import { ThemeProvider } from "emotion-theming";
import theme from "../../theme";
import { connect } from "react-redux";

const EditManager = ({ 
   name, isWatchMode, inputComponent, state, onSave, onPrint, onShow, store 
}) => {
  console.log(`EditManager inputComponent`);
  console.log(`STORE IN EDIT MANANGER: ${store.paperDogovor}`);
 // console.log(`EditManager inputComponent: 
 //   ${ReactDOMServer.renderToStaticMarkup(inputComponent)}`);
  console.log(inputComponent);
  console.log(`EDIT MANAGER DOGONSAVESTATUS: ${state}`);
  const events = {onSave, onPrint};
  let [isEditable, setIsEditable] = useState(false);
  const onEdit = () => setIsEditable(!isEditable);
  const inputComponentOut = () => (inputComponent === "<div>stub component</div>"
    ? onShow() : inputComponent)
  return (
    <ThemeProvider theme={theme}>
    <Box width={"90%"} p={3} m={3} style={{border:"1px solid silver"}}>
    {  isWatchMode ? <></> :
         <DicButton action={[onEdit, ""]} name={"edit"} />
      }
        <EditBox
          editBoxData={{
            inputComponent: inputComponentOut(),
            state: isEditable ? "ON_EDIT" : state,
            name: name
          }}
          {...events}
        />
      </Box>
    </ThemeProvider>
  );
};
const mapStateToProps = (_store) => ({store:_store});
export default connect(mapStateToProps)(EditManager);
//export default EditManager;

import React, { useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Text, Box } from "rebass";
import { DicButton } from "../BeautyList";
import { ThemeProvider } from "emotion-theming";
import theme from "../../theme";
import OnSaveNotifier from "./OnSaveNotifier";

const unEntity = (str) => (
  str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
);
const EditBox = ({
  editBoxData: { inputComponent, state, id },
  onSave,
  onPrint
}) => {
  let textVal = useRef(null);
  let [textState, setTextState] = useState(inputComponent
    );
  let InputComponent = () => 
    <div dangerouslySetInnerHTML={
        (()=>({__html:inputComponent}))()
      }
    />
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Text
          bg={state === "ON_EDIT" ? "zero" : ""}
          mb={2} mt={2} p={2}
          contentEditable={state === "ON_EDIT"}
          onInput={() => setTextState(
            `${unEntity(textVal.current.innerHTML)}`
          )}
        >
          <div ref={textVal} className="refContainer">
            <InputComponent />
          </div>
        </Text>
        <DicButton 
          action={[onPrint, textState]} 
          name={"pdf"} 
        />
        <DicButton action={
          [onSave, {id: id, data: textState, date:` ${Date.now()}`}]
        } name={"save"} />
        <OnSaveNotifier state={state}/>
      </Box>
    </ThemeProvider>
  );
};

export default EditBox;

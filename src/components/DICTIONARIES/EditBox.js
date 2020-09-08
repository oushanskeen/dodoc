import React, { useRef, useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { Text, Box, Button } from "rebass";
import { DicButton } from "../BeautyList";
import { ThemeProvider } from "emotion-theming";
import theme from "../../theme";
import OnSaveNotifier from "./OnSaveNotifier";

const unEntity = str =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const EditBox = ({
  editBoxData: { inputComponent, state, name },
  onSave,
  onPrint
}) => {
  let textVal = useRef(null);
  let focused = useRef(null);
  //let [textExportState, setTextExportState] = useState(inputComponent);
  let [textState, setTextState] = useState(inputComponent);
  let InputComponent = () => (
    <div dangerouslySetInnerHTML={(() => ({ __html: inputComponent }))()} />
  );
  if(state==="ON_EDIT"){focused.current.focus()};
  return (
    <ThemeProvider theme={theme}>
      <Box ref={focused}>
        <Text
          bg={state === "ON_EDIT" ? "zero" : ""}
          mb={2}
          mt={2}
          p={2}
          contentEditable={true}
          onInput={e => {
            setTextState(e.target.value);
          }}
        >
          <div ref={textVal} className="refContainer">
            <InputComponent />
          </div>
        </Text>
        <Button
          bg={"four"}
          onClick={() => onPrint(`${unEntity(textVal.current.innerHTML)}`)}
        >
          pdf
        </Button>
        <Button
          bg={"four"}
          onClick={() =>
            onSave({
              name: name,
              data: textVal.current.innerHTML,
              date: `${Date.now()}`
            })
          }
        >
          save
        </Button>
        <OnSaveNotifier state={state} />
      </Box>
    </ThemeProvider>
  );
};

export default EditBox;

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
  let [textExportState, setTextExportState] = useState(inputComponent);
  let [textState, setTextState] = useState(inputComponent);
  let InputComponent = () => (
    <div dangerouslySetInnerHTML={(() => ({ __html: inputComponent }))()} />
  );
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Text
          bg={state === "ON_EDIT" ? "zero" : ""}
          mb={2}
          mt={2}
          p={2}
          contentEditable={state === "ON_EDIT"}
          onInput={e => {
            setTextState(e.target.value);
          }}
        >
          <div ref={textVal} className="refContainer">
            <InputComponent />
          </div>
        </Text>
        <Button
          onClick={() => onPrint(`${unEntity(textVal.current.innerHTML)}`)}
        >
          pdf
        </Button>
        <Button
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

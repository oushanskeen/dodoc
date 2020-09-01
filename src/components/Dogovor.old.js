import React, { useState, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Flex, Button } from "rebass";
import * as jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import axios from "axios";
import { naked } from "../css/style.js";
import { DogovorFoot } from "./DogovorFoot";
import { MontajBody } from "./MONTAJ/MontajBody";
const makeDogovorHeadIO = require("../NOTEBOOK/Doghead/makeDogovorHeadIO");
const pdf2base64 = require("pdf-to-base64");

const handleSend = async data => {
  console.log("PDF STRINGIFIED DATA READY TO BE HANDLED", { data: data });
  await axios
    .post("https://dodoc.site/send", { data: data })
    .then(res => console.log("IN AXIOS RESPONSE: ", res))
    .catch(err => console.log("IN AXIOS ERR: ", err));
};
const printMe = _component => {
  let doc = new jsPDF();
  const makePdf = async pdf => await pdf2base64(pdf);
  const componentToString = ReactDOMServer.renderToStaticMarkup(_component);
  handleSend(componentToString);
  console.log(componentToString);
};

const Dogovor = ({ state, id }) => {
  let { dogovor } = useParams();
  let [editable, setEditable] = useState(false);
  let [editModeState, setEditModeState] = useState(false);
  const textRef = useRef(null);
  const prevVal = useRef(null);
  // useEffect(() => {
  //   setTextValue(textData)
  // },[])
  console.log(`CURRENT TEXTREF: ${JSON.stringify(textRef.current)}`);
  const onCl = () => {
    setEditModeState(true);
//    textRef.current.focus();
 //   prevVal.current = textRef.current.innerText;
  };

  const currentDog = state.dogDic.data.filter(e => +e.id === +id)[0];
  const currentObject = state.objDic.data.filter(
    e => e.id === currentDog.objId
  )[0];
  const currentSrokDeistviya = () => currentDog.srokDeistviya.split(" / ");

  const EditButton = () => (
    <Button
      bg={editable === false ? "two" : "four"}
      mb={3}
      onClick = {() => onCl()}
    >
      edit
    </Button>
  );

  const NameComponent = () => (
    <Flex p={3} justifyContent="center">
      {currentDog.name}
    </Flex>
  );
  const DateComponent = () => (
    <Flex p={3} justifyContent="flex-end">
      {currentDog.date}
    </Flex>
  );
  const DogovorBodyComponent = () => (
    <Flex p={3} flexDirection="column">
      {makeDogovorHeadIO(state, id)}
      {
        <MontajBody
          data={{
            price: currentDog.price,
            srokDeistviya: {
              start: currentSrokDeistviya()[0],
              end: currentSrokDeistviya()[1]
            },
            clientAdress: currentObject.adress,
            systems: currentDog.systems
          }}
        />
      }
      <DogovorFoot state={state} id={id} />
    </Flex>
  );
  const PrintableArea = () => {
    const Output = () => (
      <>
        <NameComponent />
        <DateComponent />
        <DogovorBodyComponent />
      </>
    );
    return (
      <span
        contentEditable={editModeState}
        style={
          editable === false
            ? { border: "" }
            : { border: "1px solid LightGrey" }
        }
      >
        <Output />
      </span>
    );
  };
  const Out = () => {
    return (
      <>
        <Box fontSize={1} p={3} onLoad={console.log(`dogovorId: ${dogovor}`)}>
            <PrintableArea/>
        </Box>
      </>
    );
  };
  return (
    <>
      <EditButton />
      <Out />
      <Button bg={"two"} onClick={() => printMe(<Out />)}>
        P R I N T M E
      </Button>
          <Button
            bg={"two"}
            onClick={() => {console.log(`current: ${textRef.current.innerText}`)
            }
            }
          >
            S A V E M E
          </Button>
         <input ref={textRef} type="search"/>
         {console.log(`NOW IN OUTPUR :${textRef.current}`)}
    </>
  );
};

const mapStateToProps = _state => ({
  state: _state,
  store: _state.dogDic.dics
});
const mapDispatchToProps = _dispatch => ({
  //onDogovorData: data => _dispatch(actions.dogovorData(data)),
  //onLoad: data => _dispatch(actions.setCurrentDogovor(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dogovor);

//export default Dogovor;

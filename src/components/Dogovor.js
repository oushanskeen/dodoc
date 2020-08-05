import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Flex, Button } from 'rebass';
import * as jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';
import axios from 'axios';
import {
  naked
} from "../css/style.js";
import { DogovorFoot } from "./DogovorFoot";
import { MontajBody } from './MONTAJ/MontajBody';
//import {doMainmail} from "../utils/nodemailerSample";
//const puppeteer = require('puppeteer');
const makeDogovorHeadIO = require("../NOTEBOOK/Doghead/makeDogovorHeadIO");
//const doMainmail =  require("../utils/nodemailerSample");
//const doMainmail =  require("../utils/nodemailerSample");
const pdf2base64= require('pdf-to-base64');
const printOpts = {
  margin: 20,
  fileName: "fileName.pdf",
  pagebreak:
  {mode:[
    'avoid-all',
    'css'
    //,'legacy'
  ]},
  html2canvas: {dpi: 350,scale: 2,/*, logging: true,*/ letterRendering: true},
  jsPDF: {/*unit: 'in'*/ format: 'a4'/*, orientation: 'p'*/}
};
const handleSend = async(data) => {
  console.log("PDF STRINGIFIED DATA READY TO BE HANDLED",
    {data:data}
  );
  //await axios.post('http://localhost:4001/send',{data:data})
  await axios.post('https://dodoc.site/send',{data:data})
  .then(res => console.log('IN AXIOS RESPONSE: ', res))
  .catch(err => console.log('IN AXIOS ERR: ', err))
};
const printMe = (_component) => {
  let doc = new jsPDF();
  const makePdf = async(pdf) => await pdf2base64(pdf);
  //const markUp = ReactDOMServer.renderToStaticMarkup(_component);
  //console.log("REACTDMSERVER: ", markUp);
  //handleSend(markUp);
  //return markUp;
  const componentToString = ReactDOMServer.renderToStaticMarkup(_component);
  console.log(componentToString);
  html2pdf()
    .set(printOpts)
    .from(componentToString)
//    printOpts
    .outputPdf()
    //.toPdf()
    //.output('datauristring')
    
    .then(pdf => {
     // handleSend(makePdf());
     // console.log("HERE WILL BE BASE64 STRING");
      //console.log(makePdf(pdf))
      //console.log(btoa(pdf));
      handleSend(btoa(pdf));
      //handleSend("aGVsbG8gd29ybGQ=");
    });
    //.then(pdf => )
  //);
};
const SaveToGoogleDrive = () => (
  <div>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
<div class="g-savetodrive"
   data-src="//example.com/path/to/myfile.pdf"
   data-filename="My Statement.pdf"
   data-sitename="My Company Name">
</div>
  </div>
);
const Dogovor = ({ state, id }) => {
  let { dogovor } = useParams();
  let [editable, setEditable] = useState(false);
  const currentDog = state.dogDic.data.filter(e => +e.id === +id)[0];
  console.log(
    `input id: ${id}`,
    `CURRENTDOC: ${currentDog}`,
    `state.dogDic: ${JSON.stringify(state.dogDic.data)}`
  );
  const currentObject = state.objDic.data.filter(
    e => e.id === currentDog.objId)[0];
  const currentSrokDeistviya = () => {
    return currentDog.srokDeistviya.split(' / ');
  };
  console.log('srokDeystviya in dogovor: ', currentSrokDeistviya());
  console.log('currentDog: ', currentDog);
  console.log('currentObject adress: ', currentObject.adress);
  const SimpleComponent = () => (
    <div>ME SIMPLE COMPONENT</div>
  );
  //return (
  const PrintMeButton = () => (
    <Button 
      onClick={() => printMe(<SimpleComponent/>)}
    >
      PRINT ME
    </Button>
  );
  const EditButton = () => (
    <Button
      bg={editable===false ? 'one' : 'five' }
      mb={3}
      onClick={() => setEditable(!editable)}
    >edit</Button>
  );
  const NameComponent = () => (
        <Flex p={3} justifyContent='center'>
         {currentDog.name}
        </Flex>
  );
  const DateComponent = () => (
        <Flex p={3} justifyContent='flex-end'>
          {currentDog.date}
        </Flex>
  );
  const DogovorBodyComponent = () => (
    <Flex p={3} flexDirection='column'>
        {makeDogovorHeadIO(state, id)}
        { <MontajBody 
            data={{
              price: currentDog.price,
              srokDeistviya: {
                start: currentSrokDeistviya()[0],
                end: currentSrokDeistviya()[1],
              },
              clientAdress: currentObject.adress,
              systems: currentDog.systems,
            }}
          /> 
        }
        <DogovorFoot state={state} id={id} />
        </Flex>
  );
  const PrintableArea = () => (
      <div 
        contentEditable={editable} 
        style={editable===false 
          ? {border: ''}
          : {border: '1px solid LightGrey'}
        }
      >
      <NameComponent/>
      <DateComponent/>    
      <DogovorBodyComponent/>  
    </div>

  );
  const Out = () => ( 
    <Box 
      fontSize={1} 
      p={3}
      onLoad={console.log(`dogovorId: ${dogovor}`)}
    >
    {/* <PrintMeButton/>
      <EditButton/>
    */}
      <PrintableArea/>
    
    </Box>
  );
  return (
    <>
      <Out/>
      <Button
        onClick={() => printMe(<Out/>)}
      >P R I N T M E</Button>
      <Button 
        onClick={()=>printMe(<Out/>)}
      >SEND ME HELLO</Button>
      <SaveToGoogleDrive/>
    </>
  )
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

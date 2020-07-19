import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Flex, Button } from 'rebass';
import * as jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';
import {
  naked
} from "../css/style.js";
import { DogovorFoot } from "./DogovorFoot";
import { MontajBody } from './MONTAJ/MontajBody';
//const puppeteer = require('puppeteer');
const makeDogovorHeadIO = require("../NOTEBOOK/Doghead/makeDogovorHeadIO");
const printOpts = {
  margin: 8,
  fileName: "fileName.pdf",
  pagebreak:
  {mode:[
    'avoid-all',
    'css'
    //,'legacy'
  ]},

};
/*
const printMe = async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width:1440,height:900,deviceScaleFactor:2});
  await page.goto(
    "http://localhost:3000/dodoc/dogdic",
    {waitUntil: "networkidle2"}
  );
  await page.pdf({
    path:"sampleDodocPDF.pdf",
    format:"A4",
    printBackground:true
  });
  await browser.close();
};
*/
const printMe = (_component) => {
  let doc = new jsPDF();
  //doc.text('Hello World!', 10,10);
  //doc.fromHTML(
 // doc.html(
  html2pdf(
    ReactDOMServer.renderToStaticMarkup(_component),
    printOpts
   // {
   //   callback: (doc) => 
      //doc.save('hello.pdf')
   //   doc.save('simpleComponent.pdf')
   // }
  );
};
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

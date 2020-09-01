import React, {useState, useRef} from "react";
import ReactDOMServer from "react-dom/server";
import {
  GlobalStyle,
  Container,
  Grid,
  AreaBox,
  Text,
  TextBox,
  naked
} from "../css/style.js";
import { Flex, Box } from "rebass";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../actions";

const sampleOwnerData = {
  id: 0,
  type: "YL",
  name: "OWNER ID:0 TYPE:YL COMP_FULL_NAME",
  compFullName: "OWNER ID:0 TYPE:YL COMP_FULL_NAME",
  compShortName: "OWNER ID:0 TYPE:YL COMP_SHORT_NAME",
  FIO: "OWNER ID:0 TYPE:YL FIO",
  INN: "OWNER ID:0 TYPE:YL INN",
  KPP: "OWNER ID:0 TYPE:YL KPP",
  OGRN: "OWNER ID:0 TYPE:YL OGRN",
  OKPO: "OWNER ID:0 TYPE:YL OKPO",
  GosRegDate: "OWNER ID:0 TYPE:YL GOS_REG_DATE",
  YurAdress: "OWNER ID:0 TYPE:YL YUR_ADRESS",
  FactAdress: "OWNER ID:0 TYPE:YL FACT_ADRESS",
  GenDirector: "OWNER ID:0 TYPE:YL GEN_DIRECTOR",
  Buhgalter: "OWNER ID:0 TYPE:YL BUHGALTER",
  tel: "OWNER ID:0 TYPE:YL TEL",
  bankName: "OWNER ID:0 TYPE:YL BANK_NAME",
  BIK: "OWNER ID:0 TYPE:YL BIK",
  RS: "OWNER ID:0 TYPE:YL RS",
  KS: "OWNER ID:0 TYPE:YL KS",
  signature: "OWNER ID:0 TYPE:YL SIGNATURE"
};
function unEntity(str){
   return str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
const EditableBox = () => {
  let [textState, setTextState] = useState("stub text");
  console.log(`CURRENT TEXT STATE: ${textState}`);
  console.log(
    unEntity((ReactDOMServer.renderToStaticMarkup(textState)))
  );
  let textVal = useRef(null);
  return (
    <div
      contentEditable="true" 
      onInput={e => setTextState(
        `${unEntity(textVal.current.outerHTML)}`
      )}
    >
      <div ref={textVal}>
        hello
       <div>
        world
       </div>
      </div>
    <div>
     {textState}
    </div>
    </div>
  )
};
const Home = ({ state }) => (
  <Flex
    width="100%"
    height="90vh"
    bg="zero"
    justifyContent="space-around"
    alignItem="center"
  >
    <Box bg="zero" height="50px" width="auto" p={5} mt="300px">
      home
      {console.log("state inside Home component: ", state)}
    <EditableBox/>
    </Box>
  </Flex>
);

const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  //onFetchSample: (() => dispatch(actions.fetchSample()))(),
  //onGetOwner: (() => dispatch(actions.getOwner()))(),
  //onPostOwner: (() => dispatch(actions.postOwner(
  // sampleOwnerData
  //)))(),
  //onStubAction: (()=>console.log("STUBHOMEACTION"))(),
  //onPutAction: (() => dispatch(actions.putOwner(
  // {id:1000}
  //)))(),
  //onDeleteAction: (() => dispatch(actions.deleteOwner(
  //  {id: 1000}
  //)))()
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home;

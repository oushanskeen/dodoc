import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Flex } from "rebass";
import { DogovorFoot } from "./DogovorFoot";
import { MontajBody } from "./MONTAJ/MontajBody";
const makeDogovorHeadIO = require("../NOTEBOOK/Doghead/makeDogovorHeadIO");

const Dogovor = ({ state, id }) => {
 // let { dogovor } = useParams();

  const currentDog = state.dogDic.data.filter(e => +e.id === +id)[0];
  const currentObject = state.objDic.data.filter(
    e => e.id === currentDog.objId
  )[0];
  const currentSrokDeistviya = () => currentDog.srokDeistviya.split(" / ");

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
  const Out = () => {
    return (
      <>
        <Box fontSize={1} p={3} >
          <>
            <NameComponent />
            <DateComponent />
            <DogovorBodyComponent />
          </>
        </Box>
      </>
    );
  };
  return (
    <>
      <Out />
    </>
  );
};

//const mapStateToProps = _state => ({
//  state: _state,
//});
//const mapDispatchToProps = _dispatch => ({
  //onDogovorData: data => _dispatch(actions.dogovorData(data)),
  //onLoad: data => _dispatch(actions.setCurrentDogovor(data))
//});

//export default connect(mapStateToProps, mapDispatchToProps)(Dogovor);

export default Dogovor;

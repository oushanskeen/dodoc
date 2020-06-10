import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Flex } from 'rebass';
import {
  naked
} from "../css/style.js";
import { DogovorFoot } from "./DogovorFoot";
import { MontajBody } from './MONTAJ/MontajBody';
const makeDogovorHeadIO = require("../NOTEBOOK/Doghead/makeDogovorHeadIO");

const Dogovor = ({ state, id }) => {
  let { dogovor } = useParams();
  const currentDog = state.dogDic.filter(e => e.id === id)[0];
  const currentObject = state.objDic.filter(
    e => e.id === currentDog.objId)[0];
  const currentSrokDeistviya = () => {
    return currentDog.srokDeistviya.split(' / ');
  };
  console.log('srokDeystviya in dogovor: ', currentSrokDeistviya());
  console.log('currentDog: ', currentDog);
  console.log('currentObject adress: ', currentObject.adress);
  return (
    <Box fontSize={1} onLoad={console.log(`dogovorId: ${dogovor}`)}>
      <div>
        <Flex p={3} justifyContent='center'>
          {currentDog.name}
        </Flex>
        <Flex p={3} justifyContent='flex-end'>
          {currentDog.date}
        </Flex>
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
      </div>
    </Box>
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

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Flex, Button } from 'rebass';
import {
  naked
} from "../css/style.js";
import { DogovorFoot } from "./DogovorFoot";
import { MontajBody } from './MONTAJ/MontajBody';
const makeDogovorHeadIO = require("../NOTEBOOK/Doghead/makeDogovorHeadIO");

const Dogovor = ({ state, id }:{state:any, id:number}):JSX.Element => {
  let { dogovor } = useParams();
  let [editable, setEditable] = useState(false);
  const currentDog = state.dogDic.filter((e:any) => e.id === id)[0];
  const currentObject = state.objDic.filter(
    (e:any) => e.id === currentDog.objId)[0];
  const currentSrokDeistviya = () => {
    return currentDog.srokDeistviya.split(' / ');
  };
  console.log('srokDeystviya in dogovor: ', currentSrokDeistviya());
  console.log('currentDog: ', currentDog);
  console.log('currentObject adress: ', currentObject.adress);
  return (
    <Box 
      fontSize={1} 
      p={3}
    >
        <Button
          bg={editable===false ? 'one' : 'five' }
          mb={3}
          onClick={() => setEditable(!editable)}
        >edit</Button>
      <div 
        contentEditable={editable} 
        style={editable===false 
          ? {border: ''}
          : {border: '1px solid LightGrey'}
        }
      >
        <Flex p={3} justifyContent='center'>
          {currentDog.name}
        </Flex>
        <Flex p={3} justifyContent='flex-end'>
          {currentDog.date}
        </Flex>
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
      </div>
    </Box>
  );
};

const mapStateToProps = (_state:any) => ({
  state: _state,
  store: _state.dogDic.dics
});
const mapDispatchToProps = (_dispatch:any) => ({
  //onDogovorData: data => _dispatch(actions.dogovorData(data)),
  //onLoad: data => _dispatch(actions.setCurrentDogovor(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dogovor);

//export default Dogovor;

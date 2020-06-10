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
  return (
    <Box fontSize={1} onLoad={console.log(`dogovorId: ${dogovor}`)}>
      <div>
        <Flex p={3} justifyContent='center'>
          {state.dogDic.filter(e => e.id === id)[0].name}
        </Flex>
        <Flex p={3} justifyContent='flex-end'>
          {state.dogDic.filter(e => e.id === id)[0].date}
        </Flex>
        {makeDogovorHeadIO(state, id)}
        { <MontajBody 
            data={{
              price: ['200','двести рублей'],
              srokDeystviya: {
                start: 'segodnjya',
                end: 'zavtra',
              },
              clientAdress: 'clientAdress',
              systems: ['one','two','three'],
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

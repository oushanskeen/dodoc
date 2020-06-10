import React from "react";
import { YL, IP, FL } from "../NOTEBOOK/Dogfoot/foot";
import { Box, Flex } from 'rebass';
////sample data
//const sdata = require('../SampleData/sampleData');
// processors
//const yl = require('./foot').yl;

//const ip = require('./foot').ip;
//const fl = require('./foot').fl;
//const assert = require('../../../src/utils/assert');

export const DogovorFoot = ({ state, id }) => {
  const dogovorData = state.dogDic.filter(e => e.id === id);
  const ownerId = dogovorData[0].ownerId;
  const agentId = dogovorData[0].agentId;
  const ownerData = state.ownerDic.filter(e => e.id === ownerId)[0];
  const agentData = state.agentDic.filter(e => e.id === agentId)[0];
  const dogType= dogovorData[0].dogovorType;
  const dogTypeMap = {
    'Договор проектирования': ['Заказчик', 'Исполнитель'],
    'Договор поставки': ['Покупатель','Поставщик']
  };
  const extractData = (actorData, dogType) => {
    console.log('dogovorTypea:', dogType);
    console.log("actorData: ", actorData);
    switch (actorData.type) {
      case "YL":
        return <YL data={actorData} dogType={dogType}/>;
      case "IP":
        return <IP data={actorData} dogType={dogType}/>;
      case "FL":
        return <FL data={actorData} dogType={dogType}/>;
      default:
        return "who cares";
    }
  };
  const out = (
    <Flex mt={3}> 
      <Box p={3} width={1/2} sx={{border: '1px solid black'}}>
        {extractData(ownerData, dogTypeMap[dogType][0])}
      </Box>
      <Box p={3} width={1/2} sx={{border: '1px solid black'}}>
        {extractData(agentData, dogTypeMap[dogType][1])}
      </Box>
    </Flex>
  );
  //console.log("foouOut: ", out)
  return out;
};

//sample data
//const asd = require('./agentSampleData').asd;
const sampleData = require('../../SampleData/sampleData');
// processors
const agentYurlitsoHeadIO = require
  ('./agentHeads').agentYurlitsoHeadIO;
const agentIPHeadIO = require
  ('./agentHeads').agentIPHeadIO;
const agentFizlitsoHeadIO = require
  ('./agentHeads').agentFizlitsoHeadIO;
const assert = require('../../../../src/utils/assert');

  const makeAgentHeadIO = (agentData,dogovorType) => {
    console.log("makeAgentHeadIO: ", agentData, dogovorType);
    switch(agentData.companyType){
      case "YL": 
        return agentYurlitsoHeadIO(agentData,dogovorType);
      case "IP": 
        return agentIPHeadIO(agentData,dogovorType);
      case "FL": 
        return agentFizlitsoHeadIO(agentData,dogovorType);
      default: return "who cares";      
    };
  };

    module.exports = makeAgentHeadIO;

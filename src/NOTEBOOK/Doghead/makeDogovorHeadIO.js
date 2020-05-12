const assert = require('../../../src/utils/assert');
const makeOwnerHeadIO = require('./OWNERHEAD/makeOwnerHeadIO');
const makeAgentHeadIO = require('./AGENTHEAD/makeAgentHeadIO');
const sampleData = require('../SampleData/sampleData');

    const makeDogovorHeadIO = ( _store, _dogovorId) => {
      const dicData = (store,dic,ID) => store[dic].filter(e => e.id==ID)[0];
      const dogovorData = dicData(_store,"dogDic",_dogovorId);
      console.log("dicData in makeDogovorHead: ", dogovorData);
      //const ownerId = 
      const ownerData = dicData(_store,"ownerDic",dogovorData.ownerId);
      console.log("ownerData in makeDogovorHead: ", ownerData);
      const agentData = dicData(_store,"agentDic",dogovorData.agentId);
      console.log("agentData in makeDogovorHead: ", agentData);
      //makeOwnerHeadIO(ownerData,"Проектирование");
    return makeOwnerHeadIO(ownerData, dogovorData.dogovorType)+makeAgentHeadIO(agentData, dogovorData.dogovorType);
      //makeOwnerHeadIO(owner,_dogovorType) +
      //makeAgentHeadIO(agent,_dogovorType)

    };

    module.exports = makeDogovorHeadIO;



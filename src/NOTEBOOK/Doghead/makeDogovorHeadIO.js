
    const assert = require('../../../src/utils/assert');
    const makeOwnerHeadIO = require('./OWNERHEAD/makeOwnerHeadIO');
    const makeAgentHeadIO = require('./AGENTHEAD/makeAgentHeadIO');
    const sampleData = require('../SampleData/sampleData');

//----------------------------------------------------------------------

    const makeDogovorHeadIO = 
    ( _store, _dogovorId) => {
        const dicData = 
        (store,dic,ID) =>
            store[dic].filter(e => e.id==ID)[0];
            const dogovorData = 
            	dicData(_store,"dogDic",_dogovorId);
            const ownerData = 
		dicData(_store,"ownerDic",dogovorData.ownerId);
            const agentData = 
		dicData(_store,"agentDic",dogovorData.agentId);
console.log(makeAgentHeadIO(agentData, dogovorData.dogovorType));
        return (
            makeOwnerHeadIO(ownerData, dogovorData.dogovorType)
            +makeAgentHeadIO(agentData, dogovorData.dogovorType)
            );
            };

    module.exports = makeDogovorHeadIO;



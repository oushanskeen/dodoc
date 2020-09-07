const makeOwnerHeadIO = require("./OWNERHEAD/makeOwnerHeadIO");
const makeAgentHeadIO = require("./AGENTHEAD/makeAgentHeadIO");

//----------------------------------------------------------------------

  const completeDogData = (_dogData, _state) => (
       _state.agentDic.data.length !== 0
    && _state.ownerDic.data.length !== 0
    && _state.objDic.data.length   !== 0
    ?
      {  ..._dogData,
        agentName: _state.agentDic.data
          .filter(el => el.id === _dogData.agentId)
          [0].name,
        objName: _state.objDic.data
          .filter(el => el.id === _dogData.objId)
          [0].name,
         ownerName: _state.ownerDic.data
        .filter(el => el.id === `${_dogData.ownerId}`)
        [0].name,
      }
    : {..._dogData}
 );


export const makeDogovorHeadIO = (_store, _dogovorId) => {
  console.log(`_store in dogHead: ${JSON.stringify(_store)}`);
  console.log(`_dogovorId in dogHead: ${_dogovorId}`);
  const initDogData = (store, dogId) =>
  store["dogDic"].data.filter(e => e.id === dogId)[0];
  const outDogData = completeDogData(initDogData(_store,_dogovorId) ,_store);
  console.log(`dicData in dogHead: ${JSON.stringify(outDogData)}`);
  const ownerData = _store["ownerDic"]
    .data.filter(e => e.id === `${outDogData.ownerId}`)[0];
  console.log(`ownerData in dogHead: ${JSON.stringify(ownerData)}`);
  const agentData = _store["agentDic"]
    .data.filter(e => e.id === `${outDogData.agentId}`)[0];
  console.log(`agentData in dogHead: ${JSON.stringify(agentData)}`);
  return (
    makeOwnerHeadIO(ownerData, outDogData.dogovorType) +
    makeAgentHeadIO(agentData, outDogData.dogovorType)
  );
};

//export makeDogovorHeadIO;

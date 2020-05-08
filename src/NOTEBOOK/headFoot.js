  
  const sdata = require('./SampleData/sampleData');
  const doghead = require('./Doghead/doghead');
  const footout = require('./Dogfoot/footOut');

  // GIVEN
  const input = [sdata,0,2,"Проектирование"];
  // WHEN
  const fullComposer = (_data,_agent,_owner,_dogType) => {
    const footComposer = (_data,_agent,_owner) => footout(sdata,"agentDic",_agent) + " " + footout(sdata,"ownerDic",_owner);
    const head = doghead(_data, _owner, _agent, _dogType);
    const foot = footComposer(_data,_agent,_owner);
    return head + "  " + foot;
  };
  // THEN
  const out = fullComposer(input[0],input[1],input[2],input[3])
  
  console.log("FINAL OUTPUT: ", out);

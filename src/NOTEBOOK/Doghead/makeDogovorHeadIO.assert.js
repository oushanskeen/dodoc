const makeDogovorHeadIO = require("./makeDogovorHeadIO");
const assert = require('../../../src/utils/assert');

    const id = 1;
    const store = {
      dogDic:{
        dics:[
         {id:0,data:{ownerId:0,agenId:0,dogovorType:"Proyektirovanie"}},
         {id:1,data:{ownerId:1,agentId:1,dogovorType:"Postavka"}}
        ]
      },
      ownerDic:{
        dics:[
          {id:0,data:{type:"YL"}},
          {id:1,data:
            {type:"IP",Name:"NAME",
             OGRNIP:"NUM",
             OGRNIPDate:"DATE",
             dog:"KAKTO"
            }
          },
          {id:2,data:{type:"FL"}}
        ]
      },
      agentDic:{
        dics:[
          {id:0,data:{type:"YL"}},
          {id:1,data:{type:"IP"}},
          {id:2,data:{type:"FL"}}
        ]
      }
    };
      // WHEN
    const output = makeDogovorHeadIO(store,id);
    console.log("out : ", makeDogovorHeadIO(store,id));
    assert(
        "GIVEN store and id, WHEN evoked THEN it returns dogData ++ ownerData ++ agentData",
        output,
        [{ownerId:1,agentId:1,dogovorType:"Postavka"},{type:"IP"},{type:"IP"}]
    );


const assert = require('../../../src/utils/assert');
const oOut = require('./OWNERHEAD/oOut');
const aOut = require('./AGENTHEAD/aOut');
const sdata = require('../SampleData/sampleData');
/*

      CONTENT

    0 UTILS
      0.1 assert
      0.2 dogTout
    1 OWNERHEADER 
      1.1 ownerYL
      1.2 ownerIP
      1.3 ownerFL
      1.4 ownerOut
    2 AGENTHEADER
      2.1 agentYL
      2.2 agentIP
      2.3 agentFL
      2.4 agentOut 
    3 HEADOUT
      3.1 headOut

*/

//  3 HEADOUT ---------------------------------------------------------
//  3.1 headOut
//  headOut :: ownerOut -> agentOut -> headOut
    const doghead = ( _store, _ownerId, _agentId, _dogType ) => {
      const owner = _store.ownerDic.dics[_ownerId];
      const agent = _store.agentDic.dics[_agentId];
      return oOut(owner,_dogType) + aOut(agent,_dogType);;
    };
    //console.log("headOut: ", headOut(sdata.ownerDic.dics[0],sdata.agentDic.dics[0],"Проектирование"));
    assert(
      "headOut processer works for YLYL",
       doghead(sdata, 0, 0, "Проектирование"),
      "Общество с ограниченной ответственностью 'Умный Климат Инжениринг', в лице генерального директора Лылова Дмитрия Павловича, действующего на основании Устава, именуемое в дальнейшем 'Исполнитель', с одной стороны, и Общество с ограниченной ответственностью 'Аксинель', в лице генерального директора Царевского Анатолия Михайловича, действующего на основании Устава, именуемое в дальнейшем 'Заказчик', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: "     
    );
    /*
    console.log("0 1", headOut(sdata, 0, 1, "Проектирование"));
    console.log("0 2", headOut(sdata, 0, 2, "Проектирование"));
    console.log("1 0", headOut(sdata, 1, 0, "Проектирование"));
    console.log("1 1", headOut(sdata, 1, 1, "Проектирование"));
    console.log("1 2", headOut(sdata, 1, 2, "Проектирование"));
    console.log("2 0", headOut(sdata, 2, 0, "Проектирование"));
    console.log("2 1", headOut(sdata, 2, 1, "Проектирование"));
    console.log("2 2", headOut(sdata, 2, 2, "Проектирование"));
    */
    //export {assert};
    module.exports = doghead;



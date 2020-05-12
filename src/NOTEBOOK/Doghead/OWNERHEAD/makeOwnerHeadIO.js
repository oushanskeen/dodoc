//sample data
//const osd = require('./ownerSampleData').osd;
//const sdata = require('../../SampleData/sampleData');
// processors
const ownerYurlitsoHeadIO = require('./ownerHeads').ownerYurlitsoHeadIO;
const ownerIPHeadIO = require('./ownerHeads').ownerIPHeadIO;
const ownerFizlitsoHeadIO = require('./ownerHeads').ownerFizlitsoHeadIO;
const assert = require('../../../../src/utils/assert');


     const makeOwnerHeadIO = (_ownerData,dogovorType) => {
        console.log("_ownerData in makeOwnerHeadIO: ",_ownerData);
        switch(_ownerData.type){
          case "YL": 
            return ownerYurlitsoHeadIO(_ownerData,dogovorType);
          case "IP": 
            return ownerIPHeadIO(_ownerData,dogovorType);
          case "FL": 
            return ownerFizlitsoHeadIO(_ownerData,dogovorType);
          default: return "who cares";
        };
    };
    assert(
        "GIVEN ownerData, WHEN type is extracted THEN it returns relevant template filled with relevant data",
        makeOwnerHeadIO({type:"IP",Name:"NAME",
             OGRNIP:"NUM",
             OGRNIPDate:"DATE",
             dog:"KAKTO"
            },"Проектирование"),
        "Name, действующий на основании свидетельства ОГРНИП NUM от DATE, именуемый в дальнейшем KAKTO, с одной стороны, и "
    );
/*
 assert(
      "ownerHeadOut processer for yurlitso works",
       oOut(sData.ownerDic.dics[0],"Проектирование"),
      "Общество с ограниченной ответственностью 'Умный Климат Инжениринг', в лице генерального директора Лылова Дмитрия Павловича, действующего на основании Устава, именуемое в дальнейшем 'Исполнитель', с одной стороны, и "
    );
     assert(
      "owner head processer for ip works",
       oOut(sData.ownerDic.dics[1],"Проектирование"),
      "Индивидуальный предприниматель Попов Александр Петрович, действующий на основании свидетельства ОГРНИП 317502700029527 от 2 мая 2017, именуемый в дальнейшем 'Исполнитель', с одной стороны, и "
    );
    assert(
      "owner head processer for fizlitso works",
       oOut(sData.ownerDic.dics[2],"Проектирование"),
        "Попов Александр Петрович, паспорт 4512 123421, выдан ГУ МВД РОССИИ ПО Г.МОСКВЕ 25.01.2019 код подразделения 770-007, именуемый(ая) в дальнейшем 'Исполнитель', с одной стороны, и "
    );
*/
    module.exports = makeOwnerHeadIO;

//sample data
//const osd = require('./ownerSampleData').osd;
//const sdata = require('../../SampleData/sampleData');
// processors
const oyl = require('./ownerHeads').oyl;
const oip = require('./ownerHeads').oip;
const ofl = require('./ownerHeads').ofl;

const assert = require('../../../../src/utils/assert');


     const oOut = (odata,dogType) => {
        //console.log("oOut: ",odata);
        switch(odata.type){
          case "YL": return oyl(odata.data,dogType);
          case "IP": return oip(odata.data,dogType);
          case "FL": return ofl(odata.data,dogType);
          default: return "who cares";
        };
    };
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
    module.exports = oOut;

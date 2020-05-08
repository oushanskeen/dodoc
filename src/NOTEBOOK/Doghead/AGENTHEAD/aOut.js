//sample data
//const asd = require('./agentSampleData').asd;
const sdata = require('../../SampleData/sampleData');
// processors
const ayl = require('./agentHeads').ayl;
const aip = require('./agentHeads').aip;
const afl = require('./agentHeads').afl;
const assert = require('../../../../src/utils/assert');

    const aOut = (adata,dogType) => {
      switch(adata.type){
        case "YL": return ayl(adata.data,dogType);
        case "IP": return aip(adata.data,dogType);
        case "FL": return afl(adata.data,dogType);
        default: return "who cares";      
      };
    };
/*
assert(
      "agentHeadOut processer for yurlitso works",
       aOut(asd.yl,
          "Проектирование"),
      "Общество с ограниченной ответственностью 'Аксинель', в лице генерального директора Царевского Анатолия Михайловича, действующего на основании Устава, именуемое в дальнейшем 'Заказчик', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: "
    );
    assert(
      "agentHeadOut processer for ip works",
       aOut(asd.ip,"Проектирование"),
      "Индивидуальный предприниматель Колыхан Карина Олеговна, действующ(ая) на основании свидетельства ОГРНИП 317502700029527 от 2 мая 2017, именуемый(ая) в дальнейшем 'Заказчик', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: "
    );
    assert(
      "agentHeadOut processer for fl works",
       aOut(asd.fl,"Проектирование"),
      "Иночкин Игорь Владимирович паспорт 4519 022226 выдан ГУ МВД РОССИИ ПО Г.МОСКВЕ 25.01.2019, код подразделения 770-045, именуемый(ая) в дальнейшем 'Заказчик', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: "
    );
*/
    module.exports = aOut;

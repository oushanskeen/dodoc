////sample data
const sdata = require('../SampleData/sampleData');
// processors
const yl = require('./foot').yl;
const ip = require('./foot').ip;
const fl = require('./foot').fl;
const assert = require('../../src/utils/assert');

    const footOut = (_data,_holder,_id) => {
      const data = _data[_holder].dics;
      switch(data[_id].type){
        case "YL": return yl(data[_id].data);
        case "IP": return ip(data[_id].data);
        case "FL": return fl(data[_id].data);
        default: return "who cares";      
      };
    };

//console.log("footOut(asd.yl,0):",footOut(asd.yl,0));
assert(
    "agent foot for AXINEL",
    footOut( sdata , "agentDic" , 0 ),
    "Заказчик: ОOO 'Аксинель' ИНН: 7724912950 КПП: 772401001 ОГРН: 1147746259430 Юр.адрес: 115404, Россия, Москва, Радиальная 6-я улица, дом 7а строение 2, комната 1 эт 2 Банк: МОСКОВСКИЙ ФИЛИАЛ АО КБ 'МОДУЛЬБАНК' БИК: 044525092 р/c: 40702810970010127006 к/с: 80101810645250000092 ОOO 'Аксинель' Царевский.А.М"
);
/*
assert(
    "agent foot for Kolyhan",
    footOut(sdata,"agentDic",1),
    "Заказчик: ИП Колыхан Карина Олеговна ИНН: 343902925395 ОГРНИП: 317344300061296 Юр.адрес: Волгоградская область г.Фролово Банк: ПАО 'СБЕРБАНК РОССИИ' г.Москва БИК: 044525225 р/c: 40702810970010127006 к/с: 80101810645250000092 ИП Колыхан Карина Олеговна Колыхан.К.О"
);
assert(
    "agent foot for ip",
    footOut(sdata,"agentDic",2),
    "Заказчик: Иночкин Игорь Владимирович паспорт серия 4519 номер 022226 выдан: ГУ МВД РОССИИ ПО Г.МОСКВЕ дата выдачи: 25.01.2019 код подразделения: 770-045 Иночкин И.В."
);
*/

    module.exports = footOut;

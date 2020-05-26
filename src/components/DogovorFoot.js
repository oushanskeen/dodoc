import React from 'react';
import {YL,IP,FL} from "../NOTEBOOK/Dogfoot/foot";
////sample data
//const sdata = require('../SampleData/sampleData');
// processors
//const yl = require('./foot').yl;

//const ip = require('./foot').ip;
//const fl = require('./foot').fl;
//const assert = require('../../../src/utils/assert');

    export const DogovorFoot = ({state,id}) => {
      console.log("state in footOut: ", state);
      console.log("id in footOut: ", id);
      const dogovorData = 
        state.dogDic.filter(e => e.id===id);
      console.log("dogovorData in footOut: ", dogovorData);
      const ownerId =  dogovorData[0].ownerId;
      console.log("ownerId infootOut :",ownerId);
      const agentId = dogovorData[0].agentId;
      const ownerData = 
        state.ownerDic.filter(e => e.id===ownerId)[0];
      const agentData = 
        state.agentDic.filter(e => e.id===agentId)[0];
      const extractData = 
      (actorData) => {
            console.log("actorData: ", actorData);
            switch(actorData.type){
            case "YL": 
                return <YL data={actorData}/>;
            case "IP": 
                return <IP data={actorData}/>;
            case "FL": 
                return <FL data={actorData}/>;
            default: return "who cares";
            }
            }; 
      const out = (
            <div>
                {extractData(ownerData)}
                {extractData(agentData)}
                </div>
                );
      //console.log("foouOut: ", out)     
      return out; 
    };

//console.log("footOut(asd.yl,0):",footOut(asd.yl,0));
/*
assert(
    "agent foot for AXINEL",
    footOut( sdata , "agentDic" , 0 ),
    "Заказчик: ОOO 'Аксинель' ИНН: 7724912950 КПП: 772401001 ОГРН: 1147746259430 Юр.адрес: 115404, Россия, Москва, Радиальная 6-я улица, дом 7а строение 2, комната 1 эт 2 Банк: МОСКОВСКИЙ ФИЛИАЛ АО КБ 'МОДУЛЬБАНК' БИК: 044525092 р/c: 40702810970010127006 к/с: 80101810645250000092 ОOO 'Аксинель' Царевский.А.М"
);
*/
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
//const makeDogovorFootIO = () => {
    //return "cat in the jar"
    //};
    //module.exports = makeDogovorFootIO;
    //module.exports = footOut


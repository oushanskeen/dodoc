import React from "react";
const assert = require("../../../src/utils/assert");

//const agentData = require("../SampleData/agentSampleData").asd;
//console.log(agentData);

export const YL = ({ data, dogType }) => {
  // given
  console.log("data in yl", data);
  // when
  const input = {
    name: data.compShortName,
    fio: data.FIO,
    INN: data.INN,
    KPP: data.KPP,
    OGRN: data.OGRN,
    yurAdress: data.YurAdress,
    bank: data.bankName,
    bik: data.BIK,
    rs: data.RS,
    ks: data.KS,
    sign: data.signature
  };
  //sconst string = "Заказчик: "+input.name+" ИНН: "+input.INN+" КПП: "+input.KPP+" ОГРН: "+input.OGRN+" Юр.адрес: "+input.yurAdress+" Банк: "+input.bank+" БИК: "+input.bik+" р/c: "+input.rs+" к/с: "+input.ks+" "+input.name+" "+input.sign+"";
  // then
  return (
    <div>
      {dogType}: {input.name}
      <br />
      ИНН: {input.INN}
      <br />
      КПП: {input.KPP}
      <br />
      ОГРН: {input.OGRN}
      <br />
      Юр.адрес: {input.yurAdress}
      <br />
      Банк: {input.bank}
      <br />
      БИК: {input.bik}
      <br />
      р/c: {input.rs}
      <br />
      к/с: {input.ks}
      <br />
      name: {input.name}
      <br />
      подпись: {input.signature}
      <br />
    </div>
  );
};

export const IP = ({ data, dogType }) => {
  // given
  console.log("data in ip", data);

  // when
  const input = {
    name: data.ShortName,
    INN: data.INN,
    OGRNIP: data.OGRNIP,
    yurAdress: data.YurAdress,
    bank: data.bankName,
    bik: data.BIK,
    rs: data.RS,
    ks: data.KS,
    sign: data.signature
  };
  // then
  const string =
    "Заказчик: " +
    input.name +
    " ИНН: " +
    input.INN +
    " ОГРНИП: " +
    input.OGRNIP +
    " Юр.адрес: " +
    input.yurAdress +
    " Банк: " +
    input.bank +
    " БИК: " +
    input.bik +
    " р/c: " +
    input.rs +
    " к/с: " +
    input.ks +
    " " +
    input.name +
    " " +
    input.sign +
    "";
  return (
    <div>
      {dogType}: {input.name}
      <br />
      ИНН: {input.INN}
      <br />
      ОГРНИП: {input.OGRNIP}
      <br />
      Юр.адрес: {input.yurAdress}
      <br />
      Банк: {input.bank}
      <br />
      БИК: {input.bik}
      <br />
      р/c: {input.rs}
      <br />
      к/с: {input.ks}
      <br />
      name: {input.name}
      <br />
      подпись: {input.sign}
      <br />
    </div>
  );
};

export const FL = ({ data, dogType}) => {
  // given
  console.log("data in fl", data);

  // when
  const input = {
    f: data.lastName,
    i: data.firstName,
    o: data.midName,
    doc: data.docType,
    docSer: data.Serial,
    docNum: data.number,
    docWhere: data.whoGave,
    docWhen: data.whenGave,
    docWhCode: data.codeGave,
    sign: data.signature
  };
  // then
  const string =
    "Заказчик: " +
    input.f +
    " " +
    input.i +
    " " +
    input.o +
    " " +
    input.doc +
    " серия " +
    input.docSer +
    " номер " +
    input.docNum +
    " выдан: " +
    input.docWhere +
    " дата выдачи: " +
    input.docWhen +
    " код подразделения: " +
    input.docWhCode +
    " " +
    input.sign +
    "";
  return (
    <div>
      {dogType}: {input.f} {input.i} {input.o}
      <br />
      серия: {input.docSer}
      <br />
      номер: {input.docNum}
      <br />
      выдан: {input.docWhere}
      <br />
      дата выдачи: {input.docWhen}
      <br />
      код подразделения: {input.docWhCode}
      <br />
      подпись: {input.sign}
      <br />
    </div>
  );
};

// module.exports.yl = yl;
//  module.exports.Ip = Ip;
//  module.exports.Fl = Fl;

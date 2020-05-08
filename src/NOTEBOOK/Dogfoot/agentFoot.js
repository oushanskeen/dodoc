const assert = require("../../src/utils/assert");
const agentData = require("../SampleData/agentSampleData").asd;
//console.log(agentData);

const yl = (_ad,_id) => {
    // given
    const imported = 
      _ad[Object.keys(_ad).filter(e => _ad[e].id===_id)];
    // when
    const input = {
        name: imported.compShortName,
        fio: imported.FIO,
        INN: imported.INN,
        KPP: imported.KPP,
        OGRN: imported.OGRN,
        yurAdress: imported.YurAdress,
        bank: imported.bankName,
        bik: imported.BIK,
        rs: imported.BillOne,
        ks: imported.BillTwo,
        sign: imported.signature 
    };
    // then
    return(
        "Заказчик: "+input.name+" ИНН: "+input.INN+" КПП: "+input.KPP+" ОГРН: "+input.OGRN+" Юр.адрес: "+input.yurAdress+" Банк: "+input.bank+" БИК: "+input.bik+" р/c: "+input.rs+" к/с: "+input.ks+" "+input.name+" "+input.sign+""
    );
};
//console.log(yl(agentData,0));
assert(
    "agent foot for AXINEL",
    yl(agentData,0),
    "Заказчик: ОOO 'Аксинель' ИНН: 7724912950 КПП: 772401001 ОГРН: 1147746259430 Юр.адрес: 115404, Россия, Москва, Радиальная 6-я улица, дом 7а строение 2, комната 1 эт 2 Банк: МОСКОВСКИЙ ФИЛИАЛ АО КБ 'МОДУЛЬБАНК' БИК: 044525092 р/c: 40702810970010127006 к/с: 80101810645250000092 ОOO 'Аксинель' Царевский.А.М"
);

const ip = (_ad,_id) => {
    // given
    const imported = 
      _ad[Object.keys(_ad).filter(e => _ad[e].id===_id)];
    // when
    const input = {
        name: imported.ShortName,
        INN: imported.INN,
        OGRNIP: imported.OGRNIP,
        yurAdress: imported.YurAdress,
        bank: imported.bankName,
        bik: imported.BIK,
        rs: imported.BillOne,
        ks: imported.BillTwo,
        sign: imported.signature 
    };
    // then
    return(
         "Заказчик: "+input.name+" ИНН: "+input.INN+" ОГРНИП: "+input.OGRNIP+" Юр.адрес: "+input.yurAdress+" Банк: "+input.bank+" БИК: "+input.bik+" р/c: "+input.rs+" к/с: "+input.ks+" "+input.name+" "+input.sign+""
    );
};
assert(
    "agent foot for Kolyhan",
    ip(agentData,1),
    "Заказчик: ИП Колыхан Карина Олеговна ИНН: 343902925395 ОГРНИП: 317344300061296 Юр.адрес: Волгоградская область г.Фролово Банк: ПАО 'СБЕРБАНК РОССИИ' г.Москва БИК: 044525225 р/c: 40702810970010127006 к/с: 80101810645250000092 ИП Колыхан Карина Олеговна Колыхан.К.О"
);
const fl = (_ad,_id) => {
    // given
    const imported = 
      _ad[Object.keys(_ad).filter(e => _ad[e].id===_id)];
    // when
    const input = {
        f: imported.lastName,
        i: imported.firstName,
        o: imported.midName,
        doc: imported.docType,
        docSer: imported.Serial,
        docNum: imported.number,
        docWhere: imported.whoGave,
        docWhen: imported.whenGave,
        docWhCode: imported.codeGave,
        sign: imported.signature 
    };
    // then
    return ("Заказчик: "+input.f+" "+input.i+" "+input.o+" "+input.doc+" серия "+input.docSer+" номер "+input.docNum+" выдан: "+input.docWhere+" дата выдачи: "+input.docWhen+" код подразделения: "+input.docWhCode+" "+input.sign+"");
};
assert(
    "agent foot for ip",
    fl(agentData,2),
    "Заказчик: Иночкин Игорь Владимирович паспорт серия 4519 номер 022226 выдан: ГУ МВД РОССИИ ПО Г.МОСКВЕ дата выдачи: 25.01.2019 код подразделения: 770-045 Иночкин И.В."
);


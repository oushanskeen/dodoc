const assert = require("../../../src/utils/assert");
//const agentData = require("../SampleData/agentSampleData").asd;
//console.log(agentData);

const yl = _ad => {
    // given
    //console.log("data in yl", _ad);

    // when
    const input = {
        name: _ad.compShortName,
        fio: _ad.FIO,
        INN: _ad.INN,
        KPP: _ad.KPP,
        OGRN: _ad.OGRN,
        yurAdress: _ad.YurAdress,
        bank: _ad.bankName,
        bik: _ad.BIK,
        rs: _ad.BillOne,
        ks: _ad.BillTwo,
        sign: _ad.signature 
    };
    // then
    return(
        "Заказчик: "+input.name+" ИНН: "+input.INN+" КПП: "+input.KPP+" ОГРН: "+input.OGRN+" Юр.адрес: "+input.yurAdress+" Банк: "+input.bank+" БИК: "+input.bik+" р/c: "+input.rs+" к/с: "+input.ks+" "+input.name+" "+input.sign+""
    );
};


const ip = _ad => {
    // given

    // when
    const input = {
        name: _ad.ShortName,
        INN: _ad.INN,
        OGRNIP: _ad.OGRNIP,
        yurAdress: _ad.YurAdress,
        bank: _ad.bankName,
        bik: _ad.BIK,
        rs: _ad.BillOne,
        ks: _ad.BillTwo,
        sign: _ad.signature 
    };
    // then
    return(
         "Заказчик: "+input.name+" ИНН: "+input.INN+" ОГРНИП: "+input.OGRNIP+" Юр.адрес: "+input.yurAdress+" Банк: "+input.bank+" БИК: "+input.bik+" р/c: "+input.rs+" к/с: "+input.ks+" "+input.name+" "+input.sign+""
    );
};

const fl = _ad => {
    // given

    // when
    const input = {
        f: _ad.lastName,
        i: _ad.firstName,
        o: _ad.midName,
        doc: _ad.docType,
        docSer: _ad.Serial,
        docNum: _ad.number,
        docWhere: _ad.whoGave,
        docWhen: _ad.whenGave,
        docWhCode: _ad.codeGave,
        sign: _ad.signature 
    };
    // then
    return ("Заказчик: "+input.f+" "+input.i+" "+input.o+" "+input.doc+" серия "+input.docSer+" номер "+input.docNum+" выдан: "+input.docWhere+" дата выдачи: "+input.docWhen+" код подразделения: "+input.docWhCode+" "+input.sign+"");
};

    module.exports.yl = yl;
    module.exports.ip = ip;
    module.exports.fl = fl;

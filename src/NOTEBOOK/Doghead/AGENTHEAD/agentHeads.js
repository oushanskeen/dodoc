const dogTout = require('../dogOut');

 const ayl = (ad,dogT) => {
      let input = {
          name:ad.compFullName,
          fio:ad.FIO,
          dog:dogTout(dogT)[1]
      };
      return (  
        ""+input.name+", в лице генерального директора "+input.fio+", действующего на основании Устава, именуемое в дальнейшем \'"+input.dog+"\', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: ");
    };

//  2.2 agentFL 
//  agentFL :: agentData -> dogovorType -> agentHeaf
    const aip = (ad,dogT) => {
      let input = {
          name:ad.FullName,
          ogrnip:ad.OGRNIP,
          ogrnipDate:ad.OGRNIPDate,
          dog:dogTout(dogT)[1]
        };
      return (""+input.name+", действующ(ая) на основании свидетельства ОГРНИП "+input.ogrnip+" от "+input.ogrnipDate+", именуемый(ая) в дальнейшем \'"+input.dog+"\', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: ");
    };

    const afl = (ad,dogT) => {
      const input = {
        f:ad.lastName,
        i:ad.firstName,
        o:ad.midName,
        docType:ad.docType,
        docSer:ad.Serial,
        docNum:ad.number,
        docDate:ad.whenGave,
        docWhere:ad.whoGave,
        docWhCode:ad.codeGave,
        dog:dogTout(dogT)[1]
      };
      return (  
        ""+input.f+" "+input.i+" "+input.o+" "+input.docType+" "+input.docSer+" "+input.docNum+" выдан "+input.docWhere+" "+input.docDate+", код подразделения "+input.docWhCode+", именуемый(ая) в дальнейшем \'"+input.dog+"\', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: ");
    };


    module.exports.ayl = ayl;
    module.exports.aip = aip;
    module.exports.afl = afl;

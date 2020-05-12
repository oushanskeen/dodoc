const dogTout = require('../dogOut');

 const agentYurlitsoHeadIO = (agentData,dogovorType) => {
      console.log("agentYurlitsoHeadIO:", agentData,dogovorType);
      let input = {
          name:agentData.compFullName,
          fio:agentData.FIO,
          dog:dogTout(dogovorType)[1]
      };
      return (  
        ""+input.name+", в лице генерального директора "+input.fio+", действующего на основании Устава, именуемое в дальнейшем \'"+input.dog+"\', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: ");
    };

//  2.2 agentFL 
//  agentFL :: agentData -> dogovorType -> agentHeaf
    const agentIPHeadIO = (agentData,dogovorType) => {
    console.log("agentIPHeadIO:", agentData,dogovorType);
      let input = {
          name:agentData.FullName,
          ogrnip:agentData.OGRNIP,
          ogrnipDate:agentData.OGRNIPDate,
          dog:dogTout(dogovorType)[1]
        };
      return (""+input.name+", действующ(ая) на основании свидетельства ОГРНИП "+input.ogrnip+" от "+input.ogrnipDate+", именуемый(ая) в дальнейшем \'"+input.dog+"\', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: ");
    };

    const agentFizlitsoHeadIO = (agentData,dogovorType) => {
      const input = {
        f:agentData.lastName,
        i:agentData.firstName,
        o:agentData.midName,
        docType:agentData.docType,
        docSer:agentData.Serial,
        docNum:agentData.number,
        docDate:agentData.whenGave,
        docWhere:agentData.whoGave,
        docWhCode:agentData.codeGave,
        dog:dogTout(dogovorType)[1]
      };
      return (  
        ""+input.f+" "+input.i+" "+input.o+" "+input.docType+" "+input.docSer+" "+input.docNum+" выдан "+input.docWhere+" "+input.docDate+", код подразделения "+input.docWhCode+", именуемый(ая) в дальнейшем \'"+input.dog+"\', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: ");
    };


    module.exports.agentYurlitsoHeadIO = agentYurlitsoHeadIO;
    module.exports.agentIPHeadIO = agentIPHeadIO;
    module.exports.agentFizlitsoHeadIO = agentFizlitsoHeadIO;

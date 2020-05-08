const dogTout = require('../dogOut');

      const oyl = (od,dogT) => {
        // given : input object
        // when : mapped object
        let input = {
          name:od.compFullName,
          fio:od.FIO,
          dog:dogTout(dogT)[0]
        };
        // then
        return (  
          ""+input.name+", в лице генерального директора "+input.fio+
          ", действующего на основании Устава, именуемое в дальнейшем \'"+input.dog+"\', с одной стороны, и ");
      };

//  1.2 ownerIP
//    ownerIP :: ownerData -> dogovorType -> ownerHead
      const oip = (od,dogT) => {
        // given
        // when
        let input = {
          name:od.Name,
          ogrnip:od.OGRNIP,
          ogrnipDate:od.OGRNIPDate,
          dog:dogTout(dogT)[0]
        };
        // then
        return (  
          ""+input.name+", действующий на основании свидетельства ОГРНИП "+input.ogrnip+" от "+input.ogrnipDate+", именуемый в дальнейшем \'"+input.dog+"\', с одной стороны, и "
    );
    };

//  1.3 ownerFL
//  ownerFL :: ownerData -> dogovorType -> ownerHead
    const ofl = (od,dogT) => {
      const input = {
        f:od.lastName,
        i:od.firstName,
        o:od.midName,
        docType:od.docType,
        docSer:od.Serial,
        docNum:od.number,
        docDate:od.whenGave,
        docWhere:od.whoGave,
        docWhCode:od.codeGave,
        dog:dogTout(dogT)[0]
      };
      return (  
        ""+input.f+" "+input.i+" "+input.o+", "+input.docType+" "+
        input.docSer+" "+input.docNum+", выдан "
        +input.docWhere+" "+input.docDate+" код подразделения "+
        input.docWhCode+", именуемый(ая) в дальнейшем \'"+
        input.dog+"\', с одной стороны, и ");
    };

    module.exports.oyl = oyl;
    module.exports.oip = oip;
    module.exports.ofl = ofl;

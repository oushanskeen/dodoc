const dogTout = require("../dogOut");

const ownerYurlitsoHeadIO = (ownerData, dogovorType) => {
  let input = {
    name: ownerData.compFullName,
    fio: ownerData.FIO,
    dog: dogTout(dogovorType)[0]
  };
  return (
    "" +
    input.name +
    ", в лице генерального директора " +
    input.fio +
    ", действующего на основании Устава, именуемое в дальнейшем '" +
    input.dog +
    "', с одной стороны, и "
  );
};

//  1.2 ownerIP
//    ownerIP :: ownerData -> dogovorType -> ownerHead
const ownerIPHeadIO = (ownerData, dogovorType) => {
  console.log(`ownerData in ownerIPHeadIO: 
    ${JSON.stringify(ownerData)}`);
  console.log(`dogovorType in ownerIPHeadIO: ${dogovorType}`);
  // given
  // when
  let input = {
    name: ownerData.name || "OWNER.NAME",
    ogrnip: ownerData.OGRNIP || "OWNER.OGRNIP",
    ogrnipDate: ownerData.OGRNIPDate || "OWNER,OGRNIPDate",
    dog: dogTout(dogovorType)[0]
  };
  console.log("ownerIPHeadIO: ", input);
  // then
  return (
    "" +
    input.name +
    ", действующий на основании свидетельства ОГРНИП " +
    input.ogrnip +
    " от " +
    input.ogrnipDate +
    ", именуемый в дальнейшем '" +
    input.dog +
    "', с одной стороны, и "
  );
};

//  1.3 ownerFL
//  ownerFL :: ownerData -> dogovorType -> ownerHead
const ownerFizlitsoHeadIO = (ownerData, dogovorType) => {
  const input = {
    f: ownerData.lastName,
    i: ownerData.firstName,
    o: ownerData.midName,
    docType: ownerData.docType,
    docSer: ownerData.Serial,
    docNum: ownerData.number,
    docDate: ownerData.whenGave,
    docWhere: ownerData.whoGave,
    docWhCode: ownerData.codeGave,
    dog: dogTout(dogovorType)[0]
  };
  return (
    "" +
    input.f +
    " " +
    input.i +
    " " +
    input.o +
    ", " +
    input.docType +
    " " +
    input.docSer +
    " " +
    input.docNum +
    ", выдан " +
    input.docWhere +
    " " +
    input.docDate +
    " код подразделения " +
    input.docWhCode +
    ", именуемый(ая) в дальнейшем '" +
    input.dog +
    "', с одной стороны, и "
  );
};

module.exports.ownerYurlitsoHeadIO = ownerYurlitsoHeadIO;
module.exports.ownerIPHeadIO = ownerIPHeadIO;
module.exports.ownerFizlitsoHeadIO = ownerFizlitsoHeadIO;

const assert = require("./assert");

// -----------------------------------------------------------------

const DogTypesDetails = {
  "Договор проектирования": "А",
  "Договор поставки": "Б",
  "Договор монтажа": "В",
  "Договор сервисного обслуживания": "СО",
  "Договор субподряда": "ВСУБ"
};

const numComplete = num => (`${num}`.length < 2 ? "0" + num : `${num}`);
assert("1 => 01", numComplete("1"), "01");
assert("08 => 08", numComplete("08"), "08");

// ----------------------------------------------------------------

const thisDay = () => {
  const today = new Date();
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let day = today.getDate();
  let monthIndex = today.getMonth();
  let monthName = monthNames[monthIndex];
  let year = today.getFullYear();
  return `${day} ${monthName} ${year}`;
};

// ----------------------------------------------------------------

const makeNextDogNum = (prevDogNum = 0) => numComplete(+prevDogNum + 1);
assert("0 => 01", makeNextDogNum(0), "01");
assert("8 => 09", makeNextDogNum(8), "09");
assert("10 => 11", makeNextDogNum(10), "11");
assert(" _ => 01", makeNextDogNum(), "01");

// DUPLICATES TO DIC-----------------------------------------------------
const duplicatesToDic = _inputArray => {
  let n = _inputArray.length - 1;
  const out = (_acc, _n) => {
    //console.log(`_acc: ${JSON.stringify(_acc)}, _n: ${_n}`)
    return _n < 0
      ? _acc
      : _acc.hasOwnProperty(_inputArray[_n])
      ? out(
          {
            ..._acc,
            [_inputArray[_n]]: (_acc[_inputArray[_n]] += 1)
          },
          _n - 1
        )
      : out(
          {
            ..._acc,
            [_inputArray[_n]]: 1
          },
          _n - 1
        );
  };
  return out({}, n);
};
// tests
assert(`[]`, duplicatesToDic([]), {});
assert(`["a"]`, duplicatesToDic(["a"]), { a: 1 });
assert(`["a","a"]`, duplicatesToDic(["a", "a"]), { a: 2 });
assert(`["a","a","b"]`, duplicatesToDic(["a", "a", "b"]), { b: 1, a: 2 });

// CLEAN PHRASE ---------------------------------------------------------
const cleanPhrase = (_phraseArray, _mask) => {
  return _phraseArray
    .map(phrase =>
      _mask.map(mask => {
        const out = phrase.match(new RegExp(mask));
        return out === null ? "" : out[0];
      })
    )
    .flatMap(e => e)
    .filter(e => e !== "");
};
// tests
assert('["a xx"],["a"]', cleanPhrase(["a xx"], ["a"]), ["a"]);
assert('["a b xx"],["a b"]', cleanPhrase(["a b xx"], ["a b"]), ["a b"]);
assert(
  '["a b xx","a b yy"],"a b"',
  cleanPhrase(["a b xx", "a b yy"], ["a b"]),
  ["a b", "a b"]
);
assert(
  '["a b xx","a b yy","c d xx"],["a b","c d"]',
  cleanPhrase(["a b xx", "a b yy", "c d xx"], ["a b", "c d"]),
  ["a b", "a b", "c d"]
);
assert(
  '["a b xx","c d xx","e f xx"],["a b","c d","e f"]',
  cleanPhrase(["a b xx", "c d xx", "e f xx"], ["a b", "c d", "e f"]),
  ["a b", "c d", "e f"]
);

const countDogsOfDogTypes = _dogsArray => {
  // ["a"] -> .. 1 ..[["a",1]]
  const dogTypes = Object.entries(DogTypesDetails).map(e => e[0]);
  const cropDogTypeNames = cleanPhrase(_dogsArray, dogTypes);
  console.log(`cropDogTypeNames: ${cropDogTypeNames}`);
  const foldedDuplicates = duplicatesToDic(cropDogTypeNames);
  const completeDogTypes = dogTypes.map(e =>
    foldedDuplicates.hasOwnProperty(e) ? [e, foldedDuplicates[e]] : [e, 0]
  );
  return Object.fromEntries(completeDogTypes);
};
assert(
  `[ "Договор проектирования aaaa",
     "Договор монтажа aaaa",
     "Договор субподряда aaaa",
     "Договор проектирования aaaa",
     "Договор поставки aaaa" ]`,
  countDogsOfDogTypes([
    "Договор проектирования aaaa",
    "Договор монтажа aaaa",
    "Договор субподряда aaaa",
    "Договор проектирования aaaa"
  ]),
  {
    "Договор проектирования": 2,
    "Договор поставки": 0,
    "Договор монтажа": 1,
    "Договор сервисного обслуживания": 0,
    "Договор субподряда": 1
  }
);
// LATEST OF TYPE FROM DOGSLIST -----------------------------------------

const latestOfTypeFrom = (_dogsList, _dogType) => {
  const numOfDogs = _dogsList[_dogType];
  const out = numOfDogs === 0 ? "01" : `${makeNextDogNum(numOfDogs)}`;
  return out;
};
assert(
  `{"Договор проектирования":"0"}, "Договор проектирования"`,
  latestOfTypeFrom({ "Договор проектирования": "0" }, "Договор проектирования"),
  "01"
);
assert(
  `{"Договор проектирования":"1"}, "Договор проектирования"`,
  latestOfTypeFrom({ "Договор проектирования": "1" }, "Договор проектирования"),
  "02"
);

// NAME DOGOVOR ---------------------------------------------------------
const nameDogovor = (_today, _dogType, _latestDog) => {
  return `${_dogType} №${_today.split(" ")[2]}${
    DogTypesDetails[_dogType]
  }${_latestDog} от ${_today}`;
};
assert(
  `14 jun 2019, договор проектирования,{"Договор проектирования":"0"}`,
  nameDogovor("14 Jun 2019", "Договор проектирования", {
    "Договор проектирования": "0"
  }),
  "Договор проектирования №2019А01 от 14 Jun 2019"
);
assert(
  `14 jun 2019, договор проектирования, {"Договор проектирования":"5"}`,
  nameDogovor("14 Jun 2019", "Договор проектирования", {
    "Договор проектирования": "5"
  }),
  "Договор проектирования №2019А06 от 14 Jun 2019"
);

const majorTestDataSet = [
  "Договор проектирования №2019А01 от 13 Jun 2019",
  "Договор проектирования №2019А02 от 13 Jun 2019",
  "Договор монтажа №2019В01 от 13 Jun 2019",
  "Договор сервисного обслуживания №2019СО01 от 13 Jun 2019",
  "Договор субподряда №2019ВСУБ01 от 13 Jun 2019",
  "Договор поставки №2020Б01 от 13 Jun 2020",
  "Договор сервисного обслуживания №2020СО01 от 13 Jun 2020",
  "Договор субподряда №2020ВСУБ01 от 13 Jun 2020",
  "Договор поставки №2020Б02 от 14 Jun 2020",
];
export const makeNewDogovorName = (_arrayOfDogovors, _dogType) => {
  const $ = {
    // "Договор проектирования №2019А01 от 13 Jun 2019",
    // "Договор монтажа №2019В01 от 13 Jun 2019",
    // "Договор сервисного обслуживания №2019СО01 от 13 Jun 2019",
    // "Договор субподряда №2019ВСУБ01 от 13 Jun 2019",
    // "Договор поставки №2020Б01 от 13 Jun 2020",
    // "Договор сервисного обслуживания №2020СО01 от 13 Jun 2020",
    // "Договор субподряда №2020ВСУБ01 от 13 Jun 2020"
    //  IN  ->

    splitArrayOfDogovors: () => {
      const out = _arrayOfDogovors.map(e => e.split(" "))
      console.log(
        `
        splitArrayOfDogovors: ${out}
        `);
      return out;
    },

    //  OUT ->
    //  [["Договор","проектирования","№2019А01","от","13","Jun","2019"],
    //  ["Договор","монтажа","№2019В01","от","13","Jun","2019"],
    //  ["Договор","сервисного","обслуживания","№2019СО01","от","13","Jun","2019"],
    // ["Договор","субподряда","№2019ВСУБ01","от","13","Jun","2019"],
    // ["Договор","поставки","№2020Б01","от","13","Jun","2020",
    // ["Договор","сервисного","обслуживания","№2020СО01","от","13","Jun","2020"],
    // ["Договор","субподряда","№2020ВСУБ01","от","13","Jun","2020"]]
    // IN ->

    filterThisYearDogovors: () =>
    {const out = $.splitArrayOfDogovors().filter(e => e.includes("2020"))
      console.log(
        `
        filterThisYearDogovors: ${out}
        `);
      return out;
    },

    // OUT ->
    // ["Договор","поставки","№2020Б01","от","13","Jun","2020",
    // ["Договор","сервисного","обслуживания","№2020СО01","от","13","Jun","2020"],
    // ["Договор","субподряда","№2020ВСУБ01","от","13","Jun","2020"]
    // IN ->

    joinBack: () => {
      const out = $.filterThisYearDogovors().map(e => e.join(" "))
      console.log(
      `
      joinBack: ${out}
      `);
      return out;
    },

    // OUT ->
    // [ "Договор поставки №2020Б01 от 13 Jun 2020",
    //   "Договор сервисного обслуживания №2020СО01 от 13 Jun 2020",
    //   "Договор субподряда №2020ВСУБ01 от 13 Jun 2020"]
    // IN ->

    countDogsOfDogTypes: () => {
      const out = countDogsOfDogTypes($.joinBack());
      console.log(
      `
      countDogsOfDogTypes: ${JSON.stringify(out)}
      `);
      return out;
    },

    // OUT ->
    // {"Договор поставки":"1",
    //  "Договор сервисного обслуживания:"1",
    //  "Договор субподряда":"1",
    //  "Договор монтажа":"0",
    //  "Договор проектирования:"0"}
    //  IN ->

    latestOfTypeFrom: () => latestOfTypeFrom($.countDogsOfDogTypes(), _dogType),

    // OUT ->
    //  -> "02"

    nameDogovor: () => nameDogovor(thisDay(), _dogType, $.latestOfTypeFrom())

    //  -> "Договор поставки №2020Б02 от 24 Aug 2020"
  };
  //return $.splitArrayOfDogovors();
  //return $.filterThisYearDogovors();
  //return $.joinBack();
  //return $.countDogsOfDogTypes();
  //return $.latestOfTypeFrom();
  return $.nameDogovor();
};
assert(
  `${majorTestDataSet}`,
  makeNewDogovorName(majorTestDataSet, "Договор проектирования"),
  "Договор проектирования №2020А01 от 24 Aug 2020"
);
assert(
  `${majorTestDataSet}`,
  makeNewDogovorName(majorTestDataSet, "Договор поставки"),
  "Договор проектирования №2020А01 от 24 Aug 2020"
);

// -----------------------------------------------------------------------
//module.exports = makeNewDogovorName;

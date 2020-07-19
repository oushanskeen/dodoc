const assert = require('./assert');

// -----------------------------------------------------------------

const DogTypesDetails = {
  "Договор проектирования": "А",
  "Договор поставки": "Б",
  "Договор монтажа": "В",
  "Договор сервисного обслуживания": "СО",
  "Договор субподряда": "ВСУБ"
};
const dogTypes = Object.keys(DogTypesDetails);
// ----------------------------------------------------------------

const numComplete = num => (
  `${num}`.length < 2 ? "0" + num : `${num}`
);
assert("1 => 01",numComplete("1"),"01");
assert("08 => 08",numComplete("08"),"08");

// ----------------------------------------------------------------

const thisDay = () => {
  const today = new Date();
  let monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  let day = today.getDate();
  let monthIndex = today.getMonth();
  let monthName = monthNames[monthIndex];
  let year = today.getFullYear();
  return `${day}-${monthName}-${year}`;
};

// ----------------------------------------------------------------

const makeNextDogNum = (prevDogNum = 0) => numComplete(+prevDogNum + 1);
assert("0 => 01",makeNextDogNum(0),"01");
assert("8 => 09",makeNextDogNum(8), "09" );
assert("10 => 11",makeNextDogNum(10), "11" );
assert(" _ => 01", makeNextDogNum(), "01");

// -----------------------------------------------------------------

// const today = () => thisDay();
// => if isToday => 14-January-2019
const currentYear = thisDay().split("-")[2];
// 14-January-2019 => 2019

// -----------------------------------------------------------------

//export 
const makeNewDogovorName = (dogType, prevDogovorName) => {

  console.log("DOGOVORS SELECTED INPUT: ", prevDogovorName);

  // --------------------------------------------------------------
  
  const isDataAvailable = () => 
    prevDogovorName === [] || prevDogovorName === undefined;

  const relevantDogName = 
  (_dogType, _prevDogovorName) => {
    const out = (isDataAvailable()
      ? _dogType
      : _prevDogovorName.filter(e =>
        e.match(/([а-яА-Я]+\s?)+(?= №)/g)[0] === dogType
      )
    );
    //console.log("relevantDogName out: ", out);
    return out;
    };
  assert(
    "GIVEN dogovor type THEN returns all dogovors by type",
    relevantDogName(
    "Договор поставки",
    [ 
    "Договор поставки №2019Б03 от 14-января-2019 1547413200000",
    "Договор проектирования №2020А01 от 13-Jun-2020 1591995600000", 
    "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
    ]
    ),
    [ 
    "Договор поставки №2019Б03 от 14-января-2019 1547413200000",
    "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
    ]
    )
  
  // ---------------------------------------------------------------

  // [
//  "Договор поставки №2019Б03 от 14-января-2019 1547413200000",
//  "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
//  ] => ..[1547.., 1591..] .. 1591.. .. 
//  => "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
  const prevDogovor = (_dogovors) => {
    const out = 
      isDataAvailable()
      ? currentYear 
      : _dogovors.filter(e => e
          .match(
          _dogovors
          .map(e => e.match(/[0-9]+$/g))
          .sort((a,b) => a - b)
          [_dogovors.length-1]
          )
        )[0]
    //console.log(`DOGYEAR: ${out}`);
    //console.log(out);
    return out;
    }
  assert(
    "GIVEN selected dogovors THEN return the latest",
    prevDogovor(    
    [
    "Договор поставки №2019Б03 от 14-января-2019 1547413200000",
    "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
    ]),
    "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
  );

  const prevDogNum = (_prevDogovorName) => { 
    const out = _prevDogovorName === undefined
    ? ""
    : _prevDogovorName.match(/(?<=№\d{4}[А-Я]{1,4})\d{2,5}/g)[0];
    //console.log(`prevDogNum: ${out}`);
    //console.log(out)
    return out;
  };
  assert(
    "GIVEN latest dogovor THEN returns dogovor number",
    prevDogNum(
      "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
    ),
    "01"
  );

  const semiTemp = (
    _dogType, _currentYear,_dogDetails,_dogNum,_todayDate, _todaySec
  ) => {
    //const out = `${prevDogTypo()} №${currentYear}${
    //  DogTypesDetails[prevDogTypo()]
    //}${dogNumber} от ${thisDay()}`;
    const out = `${_dogType} №${_currentYear}${
      _dogDetails[_dogType]
    }${_dogNum} от ${_todayDate} ${_todaySec}`;
    //console.log(`semiTempOut: ${out}`);
    return out;
  };
  const dogovorType = "Договор поставки";
  const dogovorsList =  [ 
    "Договор поставки №2019Б03 от 14-января-2019 1547413200000",
    "Договор проектирования №2020А01 от 13-Jun-2020 1591995600000", 
    "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
    ]
  assert(
    "GIVEN dogType + currentYear + dogDetails + dogNum + todayDate + todaySec",
    semiTemp(
      dogType,
      currentYear,
      DogTypesDetails,
      makeNextDogNum(prevDogNum(prevDogovor(dogovorsList))),
      thisDay(),
      Date.parse(new Date())
    ),
    // if today 17 Jul 2020
    "Договор поставки №2020Б02 от 17-Jul-2020 1594933200000"
  );
 // const noDogsOfThisTypeThisYear = 
 //   prevDogYear < currentYear;
  const prevDogYear = (_name) => {
    //console.log(`_name in prevdogyear: ${_name}`);
    const out = isDataAvailable() 
      ? _name.split(" ")[4].split("-")[2]
      : currentYear;
    //console.log(`prevDogYear out: ${out}`);
    return out;
  };
  assert(
    "GIVEN dogovor name THEN returns dogovor year",
    prevDogYear(
      "Договор поставки №2020Б02 от 17-Jul-2020 1594933200000"
    ),
    "2020"
  );
  const outcome = (_name) => {
    const dogNum = 
      (prevDogYear(_name) < currentYear)
    ? makeNextDogNum()
    : makeNextDogNum(prevDogNum(_name))
    const out = semiTemp(
      dogType,
      currentYear,
      DogTypesDetails,
      dogNum,
      thisDay(),
      Date.parse(new Date())
    );
    //console.log(`out in zeroUp: ${out}`);
    return out;
  };
  assert(
    `GIVEN latest dogovor on previous year 
     THEN dogovor counter starts from zero`,
     outcome(
       "Договор поставки №2019Б03 от 14-января-2019 1547413200000"
     ),
     "Договор поставки №2020Б01 от 17-Jul-2020 1594933200000"
  );
  assert(
    `GIVEN latest dogovor on same year 
     THEN dogovor counter increases`,
     outcome(
       "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
     ),
       "Договор поставки №2020Б02 от 17-Jul-2020 1594933200000"
  );
  const out = outcome(prevDogovor(prevDogovorName));
  console.log(`final output: ${out}`);
  return out;
};
const sampleDogs = 
  [ 
  "Договор поставки №2019Б03 от 14-января-2019 1547413200000",
  "Договор проектирования №2020А01 от 13-Jun-2020 1591995600000", 
  "Договор поставки №2020Б01 от 13-Jun-2020 1591995600000"
  ];
assert(
  `Dogovor postavki + posledniy ot 13-Jun-2020 => 
   Договор поставки №2020Б02 от 17-Jul-2020 1594933200000`,
   makeNewDogovorName('Договор поставки', sampleDogs),
  "Договор поставки №2020Б02 от 17-Jul-2020 1594933200000"
);
assert(
  `NEW NAME WITH EMPTY DIC
   ${makeNewDogovorName('Договор поставки',[])},
  `,
   makeNewDogovorName('Договор поставки',[]),
  "Договор поставки №2020Б02 от 17-Jul-2020 1594933200000"
);


//   ---------------------------------------------------------------
  // Договор проектирования №2020А01 от 13-Jun-2020
  //const prevDogTypo = () => 
    //prevDogovorName
    //.match(/([а-яА-Я]+\s?)+(?= №)/g)[0] || 
  //  dogType;
  //console.log(`prevDogTypo: ${prevDogTypo()}`);
  // ---------------------------------------------------------------
console.log("makeNewDogovorName: ", makeNewDogovorName);

module.exports.makeNewDogovorName = makeNewDogovorName;

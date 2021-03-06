//  IMPORTS ----------------------------------------------------------

const assert = require("./assert");

//   TASK ------------------------------------------------------------

/*
    В процессе создания договоров им присваивается {название} по формуле:
    + 1. Договор проектирования. {Договор проектирования №{текущийгод}А{порядковыйномер} от {дд-месяц-гггг}}
    + 2. Договор поставки. {Договор поставки №{текущийгод}Б{порядковыйномер}. от {дд-месяц-гггг}}
    + 3. Договор монтажа {Договор монтажа №{текущийгод}В{порядковыйномер}. от {дд-месяц-гггг}}
    + 4. Договор сервисного обслуживания. {Договор сервисного обслуживания №{текущийгод}СО{порядковыйномер} от {дд-месяц-гггг}}
    + 5. Договор субподряда {Договор монтажа №{текущийгод}ВСУБ{порядковыйномер}. от {дд-месяц-гггг}}

    + С началом нового года {порядковый_номер} обнуляется и счет начинается заново с 1.
    + {название} является названием файла при выгрузке в формате {название}.pdf или {название}.doc
    */

//  INPUT DATA: DOGS data (DOGOVORS) ---------------------------------

const dogs = {
  "Договор проектирования": {
    "1999_1": {
      date: "1999/2/2",
      link: "link",
      name: "Договор проектирования №1999А1. от 1999/2/2"
    },
    "1999_2": {
      date: "1999/12/5",
      link: "link",
      name: "Договор проектирования №1999A2. от 1999/12/5"
    },
    "2000_1": {
      date: "2000/24/7",
      link: "link",
      name: "Договор проектирования №2000A1. от 2000/24/7"
    }
  },
  "Договор поставки": {
    "1999_1": {
      date: "2/2/1999",
      link: "link",
      name: "Договор поставки №1999Б1. от 1999/2/2"
    },
    "1999_2": {
      date: "12/5/1999",
      link: "link",
      name: "Договор поставки №1999Б2. oт 1999/12/5"
    },
    "2019_2": {
      date: "24/7/2000",
      link: "link",
      name: "Договор поставки №2019Б2. от 2019/24/7"
    }
  },
  "Договор монтажа": {
    "1999_1": {
      date: "2/2/1999",
      link: "link",
      name: "Договор монтажа №1999В1. от 1999/2/2"
    },
    "1999_2": {
      date: "12/5/1999",
      link: "link",
      name: "Договор монтажа №1999В2. от 1999/12/5"
    },
    "2000_3": {
      date: "24/7/2000",
      link: "link",
      name: "Договор монтажа №1999В3. от 2000/24/7"
    }
  },
  "Договор сервисного обслуживания": {
    "1999_1": {
      date: "2/2/1999",
      link: "link",
      name: "Договор сервисного обслуживания №1999СО1. от 1999/2/2"
    },
    "1999_2": {
      date: "12/5/1999",
      link: "link",
      name: "Договор сервисного обслуживания №1999СО2. от 1999/12/5"
    },
    "2000_4": {
      date: "24/7/2000",
      link: "link",
      name: "Договор сервисного обслуживания №2000СО4. от 2000/24/7"
    }
  },
  "Договор субподряда": {
    "1999_1": {
      date: "2/2/1999",
      link: "link",
      name: "Договор субподряда №1999ВСУБ1. от 1999/2/2"
    },
    "1999_2": {
      date: "12/5/1999",
      link: "link",
      name: "Договор субподряда №1999ВСУБ2. от 1999/12/5"
    },
    "2000_5": {
      date: "24/7/2000",
      link: "link",
      name: "Договор субподряда №2000ВСУБ5. от 2000/24/7"
    }
  }
};

//  FUNCTIONS --------------------------------------------------------

//  1 NAME EXTRACTOR -------------------------------------------------

const nameExtractor = (_dogs = dogs) => {
  let out = [];
  Object.keys(dogs).map(dog => {
    for (let key in dogs[dog]) out.push(dogs[dog][key].name);
  });
  return out;
};
assert("Name extractor extracts names", nameExtractor(), [
  "Договор проектирования №1999A1. от 1999/2/2",
  "Договор проектирования 1999A2. от №1999/12/5",
  "Договор проектирования №2000A1. от 2000/24/7",
  "Договор поставки №1999Б1. от 1999/2/2",
  "Договор поставки 1999Б2. от №1999/12/5",
  "Договор поставки №2019Б2. от 2019/24/7",
  "Договор монтажа №1999В1. от 1999/2/2",
  "Договор монтажа 1999В2. от №1999/12/5",
  "Договор монтажа №1999В3. от 2000/24/7",
  "Договор сервисного обслуживания №1999СО1. от 1999/2/2",
  "Договор сервисного обслуживания 1999СО2. от №1999/12/5",
  "Договор сервисного обслуживания №2000СО4. от 2000/24/7",
  "Договор субподряда №1999ВСУБ1. от 1999/2/2",
  "Договор субподряда 1999ВСУБ2. от №1999/12/5",
  "Договор субподряда №2000ВСУБ5. от 2000/24/7"
]);

//  2 LATEST DOGOVORTYPE NUMBER EXTRACTOR ----------------------------

const latestExtractor = _dogName => {
  let keys = Object.keys(dogs[_dogName]);
  let out = keys[keys.length - 1].match(/(?<=\_)\d+/g)[0];
  return out;
};
assert(
  "IN: dogType & dogs pool, OUT: latest #num of required dogtype ",
  latestExtractor("Договор проектирования"),
  "1"
);

//  3 NEW DOGOVOR GENERATOR ------------------------------------------

const sampleNy = { year: 2020, month: 1, day: 1 };

const newDogGen = (_dogName, _date = sampleNy) => {
  const sampleDate = `${_date.year}/${_date.day}/${_date.month}`;
  const out = _letter => {
    return _date.month === 1 &&
      _date.day === 1 &&
      latestExtractor(_dogName) === 1
      ? `${_dogName} №${_date.year}${_letter}${+latestExtractor(_dogName) +
          1}. ot ${sampleDate}`
      : `${_dogName} №${_date.year}${_letter}1. ot ${sampleDate}`;
  };
  switch (_dogName) {
    case "Договор проектирования":
      return out("A");
    case "Договор поставки":
      return out("Б");
    case "Договор монтажа":
      return out("В");
    case "Договор сервисного обслуживания":
      return out("СО");
    case "Договор субподряда":
      return out("ВСУБ");
    default:
      return "who knows";
  }
};
assert(
  "IN: dog name, OUT: new dog name",
  newDogGen("nameOne", sampleNy),
  "nameOne №2020A2. ot 2020/1/1" // prev = "nameOne 2000 A1 2000/24/7"
);
assert(
  "IN: dog name, OUT: new dog name",
  newDogGen("nameTwo", sampleNy),
  "nameTwo №2020B1. ot 2020/1/1" //prev === "nameTwo 2019 B2 2019/24/7"
);

//  EXPORTS ----------------------------------------------------------

exports.newDogGen = newDogGen;
exports.nameExtractor = nameExtractor;

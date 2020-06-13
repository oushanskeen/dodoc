const numComplete = num => (`${num}`.length < 2 ? "0" + num : `${num}`);
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
const DogTypesDetails = {
  "Договор проектирования": "А",
  "Договор поставки": "Б",
  "Договор монтажа": "В",
  "Договор сервисного обслуживания": "СО",
  "Договор субподряда": "ВСУБ"
};

const sampleDogs = [ "Договор поставки №2019Б03 от 14-января-2019",
"Договор проектирования №2020А01 от 13-Jun-2020", "Договор поставки №2020Б01 от 13-Jun-2020"];
const makeNextDogNum = (prevDogNum = 0) => numComplete(+prevDogNum + 1);
export 
const makeNewDogovorName = prevDogovorName => {
  console.log('all dogovors: ', prevDogovorName);
  const today = thisDay();
  const currentYear = today.split("-")[2];
  const prevDogTypo = prevDogovorName.match(/([а-яА-Я]+\s?)+(?= №)/g)[0];
  const prevDogYear = prevDogovorName.match(/[0-9]+/g)[0];
  //const prevDogNumData = prevDogovorName.match (/(?<=№[0-9]+[А-С])\d+?(?= )/g);
//  const prevDogNumData = prevDogovorName.match (/(?<=№\d\d\d\d[A-C]+)\d+(?= )/g)[0];
// console.log('prevDogNumData: ', prevDogNumData);
  const prevDogNum = prevDogovorName.match(/(?<=№\d{4}[А-Я]{1,4})\d{2,5}/g);
  console.log('prevDogNum: ', prevDogNum);
  const semiTemp = dogNumber => {
    return `${prevDogTypo} №${currentYear}${
      DogTypesDetails[prevDogTypo]
    }${dogNumber} от ${thisDay()}`;
  };
  console.log('prevDogovorName: ', prevDogovorName);
  console.log('prevDogYear: ', prevDogYear);
  console.log('currentYear: ', currentYear);
  return prevDogYear < currentYear
    ? semiTemp(makeNextDogNum())
    : semiTemp(makeNextDogNum(prevDogNum));
};
console.log("makeNewDogovorName: ", sampleDogs.map(e=>makeNewDogovorName(e)));

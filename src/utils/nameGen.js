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
  "Договор проектирования": "A",
  "Договор поставки": "Б",
  "Договор монтажа": "В",
  "Договор сервисного обслуживания": "СО",
  "Договор субподряда": "ВСУБ"
};

const sampleDogs = [ "Договор поставки №2019Б03 от 14-января-2019"];
const makeNextDogNum = (prevDogNum = 0) => numComplete(+prevDogNum + 1);
export const makeNewDogovorName = prevDogovorName => {
  const today = thisDay();
  const currentYear = today.split("-")[2];
  const prevDogTypo = prevDogovorName.match(/([а-яА-Я]+\s?)+(?= №)/g)[0];
  const prevDogYear = prevDogovorName.match(/[0-9]+/g)[0];
  const prevDogNum = prevDogovorName.match(/(?<=№[0-9]+[А-С])\d+?(?= )/g)[0];
  const semiTemp = dogNumber => {
    return `${prevDogTypo} №${currentYear}${
      DogTypesDetails[prevDogTypo]
    }${dogNumber} от ${thisDay()}`;
  };
  return prevDogYear < currentYear
    ? semiTemp(makeNextDogNum())
    : semiTemp(makeNextDogNum(prevDogNum));
};
console.log("makeNewDogovorName: ", makeNewDogovorName(sampleDogs[0]));

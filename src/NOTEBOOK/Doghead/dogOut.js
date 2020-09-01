const assert = require("../../../src/utils/assert");
const dogTout = dogT => {
  switch (dogT) {
    // given
    case "Договор поставки":
      // then
      return ["Поставщик", "Покупатель"];
    // given
    case "Договор проектирования":
      // then
      return ["Исполнитель", "Заказчик"];
    // given
    default:
      // then
      return "who knows";
  }
};
assert(
  "dogTout('Поставка') =>['Поставщик','Покупатель']",
  dogTout("Поставка"),
  ["Поставщик", "Покупатель"]
);
assert(
  'dogTout("Проектирование") => ["Исполнитель","Заказчик"]',
  dogTout("Проектирование"),
  ["Исполнитель", "Заказчик"]
);

module.exports = dogTout;

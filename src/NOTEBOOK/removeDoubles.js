const assert = require('../utils/assert');

const magic = (string,val) => {
  const stroke = string.split(",");
  return (
    stroke.includes(val)
    ? stroke.filter(e => e!==val).join()
    :  stroke.concat(val).join()
  );
};
assert(
    "magic",
    magic("a,b,c","c"),
    "a,b"
);
assert(
    "magic",
    magic("a,b","c"),
    "a,b,c"
);
const del = (array,val) => {
  return array.filter(e => e!==val)
};
assert(
    "Given ['a','b','c'], when asked to delete 'a', then return ['b','c']",
    del(['a','b','c'],'a'),
    ['b','c']
);

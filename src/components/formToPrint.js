const { assert } = require('../utils/assert');

/*
    '{"a":"apple","b":"banana"}' =>
    {a:"apple",b:"banana"} ->
    fruit={a:"apple",b:"banana"},'Monkey takes ${fruit.a} and then ${fruit.b}' ->
    'Monkey takes apple and then banana'
*/

const dataToText = (_data,_text) => _text(JSON.parse(_data));
const text = _fruit => ("Monkey takes " + _fruit.a +  " and then " + _fruit.b + ".");
const data = '{"a":"apple","b":"banana"}';

console.log("dataToText", dataToText(data,text));
assert(
    "Function get values and return untemplated text",
    dataToText(data,text),
    'Monkey takes apple and then banana.'
);




    const assert = (_statement,_function,_positiveOutcome) => {
        return(
                JSON.stringify(_function) === JSON.stringify(_positiveOutcome) 
                ? console.log(`YES! ${_statement}, ooph!`) 
                : console.log(`NOPE! ${_statement} works WRONG!!!`)
        );
    };

    const typeCheck = (objOne, objTwo) => {
      const objOneKeys = () => Object.keys(objOne).sort();
      const objTwoKeys = () => Object.keys(objTwo).sort();
      const objLength = () => 
        objOneKeys().length === objTwoKeys().length;
      const sameKey = () =>
        JSON.stringify(objOneKeys()) === 
        JSON.stringify(objTwoKeys());
      const sameValues = () => 
        objOneKeys()
        .map(e => objOne[e] === typeof objTwo[e])
        .filter(e => e === false)
        .length === 0;
      const validValues = () =>
        typeof objTwo !== "null" &&
        typeof objTwo !== "undefined";
      //console.log(
      //  "objLength, sameKey, sameValues",
      //  objLength(), sameKey(), sameValues()
      //);
      //return objLength && sameKey && sameValues;
      if (!validValues()){
        console.log("instance object is NULL or UNDEFINED");
        return false;
      }else if (!objLength()){
        console.log("there is some missing fields");
        return false;
      }else if (!sameKey()){
        console.log("instance diesnt feat model fields");
        return false;
      }else if (!sameValues()){
        console.log('insatnce deosnt feat model data types');
        return false;
      }else{
        console.log('true');
        return true;
      };
    };
    const modelOne = {name: "string"};
    let instanceNull;
    const instanceOne = {name: "banana"};
    const modelTwo = {name: "number"};
    const instanceTwo = {name: "banana"};
    const modelThree = {name: "number", sname: "object"};
    const instanceThree = {name: 5, sname: {}};
    assert(
      "looking for fields and values",
      typeCheck(modelOne, instanceNull),
      false
    );
    assert(
      "looking for fields and values",
      typeCheck(modelTwo, instanceTwo),
      true
    );
    assert(
      "looking for fields and values",
      typeCheck(modelThree, instanceThree),
      true
    );
    //assert(
    //  "looking for fields and values",
    //  typeCheck(twoO, twoT),
    //  false
    // );

    //export {assert};
    module.exports = typeCheck;

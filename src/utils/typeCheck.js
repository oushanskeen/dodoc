
    const assert = (_statement,_function,_positiveOutcome) => {
        return(
                JSON.stringify(_function) === JSON.stringify(_positiveOutcome) 
                ? console.log(`YES! ${_statement}, ooph!`) 
                : console.log(`NOPE! ${_statement} works WRONG!!!`)
        );
    };

    const typeCheck = (objectModel, objectData) => {
      const objOneKeys = () => Object.keys(objectModel).sort();
      const objTwoKeys = () => Object.keys(objectData).sort();
      const objLength = () => 
        objOneKeys().length === objTwoKeys().length;
      const sameKey = () =>
        JSON.stringify(objOneKeys()) === 
        JSON.stringify(objTwoKeys());
      const sameValues = () => 
        objOneKeys()
        .map(e => objectModel[e] === typeof objectData[e])
        .filter(e => e === false)
        .length === 0;
      const validValues = () =>
        typeof objectData !== "null" &&
        typeof objectData !== "undefined";
      //console.log(
      //  "objLength, sameKey, sameValues",
      //  objLength(), sameKey(), sameValues()
      //);
      //return objLength && sameKey && sameValues;
      const logMsg = (message) => {
        return (
          `model object: ${JSON.stringify(objectModel)},
           data object: ${JSON.stringify(objectData)},
           message: ${message}`
        );
      };
      const outputData = { 
        data: {
          objectModel: objectModel,
          objectData: objectData
        }
      };
      if (!validValues()){
        console.log(logMsg('instance object is NULL or UNDEFINED'));
        return {
          status: false,
          ...outputData,
          message: "instance object is NULL or UNDEFINED"
        };
      }else if (!objLength()){
        console.log(logMsg('there is some missing fields'));
        return {
          status: false,
          ...outputData,
          message: "there is some missing fields"
        };
      }else if (!sameKey()){
        console.log(logMsg('instance does not feat model fields'));
        return {
          status: false,
          ...outputData,
          message: "instance does not feat model fields"
        };
      }else if (!sameValues()){
        console.log(logMsg('instance does not feat model data types'));
        return {
          status: false,
          ...outputData,
          message: 'instance does not feat model data types'
        };
      }else{
        console.log(logMsg('for the sake of happiness, all is ok'));
        return {
          status: true,
          ...outputData,
          message: 'for the sake of happiness, all is ok'
        };
      };
    };
    const modelOne = {name: "string"};
    let instanceNull;
    const instanceOne = {name: "banana"};
    const modelTwo = {name: "number"};
    const instanceTwo = {name: "banana"};
    const modelThree = {name: "number", sname: "object"};
    const instanceThree = {name: 5, sname: {}};
    //const sampleModel = 
    assert(
      "looking for fields and values",
      typeCheck(modelOne, modelThree),
      {
        status: false,
        message: "instance object is NULL or UNDEFINED"
      }
    );
    //assert(
    //  "have to work with complex objects",
    //  {id:},
    //  {}
    //);
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

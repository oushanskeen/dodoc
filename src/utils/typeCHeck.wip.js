
    const assert = (_statement,_function,_positiveOutcome) => {
        return(
                JSON.stringify(_function) === JSON.stringify(_positiveOutcome) 
                ? console.log(`YES! ${_statement}, ooph!`) 
                : console.log(`NOPE! ${_statement} works WRONG!!!`)
        );
    };

    const fieldCheck = (object, fields) => {
      const objectKeys = Object.keys(object).sort();
      console.log(objectKeys);
      const allKeys = 
        objectKeys.length === fields.length 
        ? objectKeys
          .map((e,i) => e === objectKeys[i])
          .filter(e => e === false)
          .length === 0
        : false
      console.log("allKeys: ", allKeys);
      return allKeys;
    };
    const oneO = {name: "oneName"};
    const oneF = ["name"]
    const twoO = {name: "oneName", sname:"sname"};
    const twoF = ["name"]
    const threeO = {name: "oneName", sname:"sname"};
    const threeF = ["name","sname"];
    const fourO = {name: "oneName"};
    const fourF = ["name","sname"];
    assert(
      "looking for fields and values",
      fieldCheck(oneO, oneF),
      true
    );
    assert(
      "looking for fields and values",
      fieldCheck(twoO, twoF),
      false
    );
    assert(
      "looking for fields and values",
      fieldCheck(threeO, threeF),
      true
    );
    assert(
      "looking for fields and values",
      fieldCheck(fourO, fourF),
      false
    );

    //export {assert};
    //module.exports = assert;

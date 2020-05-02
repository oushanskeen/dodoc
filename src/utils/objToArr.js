    
    const assert = (_statement,_function,_positiveOutcome) => {
        return(
                JSON.stringify(_function) === JSON.stringify(_positiveOutcome) 
                ? console.log(`YES! ${_statement}, ooph!`) 
                : console.log(`NOPE! ${_statement} works WRONG!!!`)
        );
    };
        
    const arToObj = _obj => {
        let out = Object.entries(_obj);
        console.log("obj entries", Object.entries(_obj));
        return  out;//[["a","aa"],["b","bb"]];
    };    
    console.log(arToObj({"a":"aa","b":"bb"}));
    assert("object is turned to the key-value pairs arrays",
        arToObj({"a":"aa","b":"bb"}),
        [["a","aa"],["b","bb"]]
    );


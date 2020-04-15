
    const assert = (_statement,_function,_positiveOutcome) => {
        return(
                JSON.stringify(_function) === JSON.stringify(_positiveOutcome) 
                ? console.log(`YES! ${_statement}, ooph!`) 
                : console.log(`NOPE! ${_statement} works WRONG!!!`)
        );
    };

    //export {assert};
    module.exports = assert;

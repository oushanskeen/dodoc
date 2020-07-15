
    const assert = (_statement,_function,_positiveOutcome) => {
        return(
                JSON.stringify(_function) === JSON.stringify(_positiveOutcome) 
                ? console.log(`YES! ${_statement}, ooph!`) 
                : console.log(`NOPE! ${_statement} works WRONG!!!`)
        );
    };

    const manageId = (form,dic) => {
      const out = 
        form.id !== "-" 
        ? +form.id 
        : dic === undefined || dic[dic.length-1] === undefined
          ? 0 
          : +dic[dic.length-1].id + 1  
      return {in:[form,dic],out:out};
    };
    assert(
      "({id:'-'},[]) => 0",
      manageId({id: "-"},[]),
      0
    );
    assert(
      "({id:'-'},[{id:1}]) => 2",
      manageId({id: "-"},[{id:1}]),
      2 
    );
    assert(
      "({id:'-'},[{id:1},{id:2}]) => 3",
      manageId({id: "-"},[{id:1},{id:2}]),
      3 
    );
    assert(
      "({id:1}) => 1",
      manageId({id:1}),
      1
    );

    //export {assert};
  module.exports = manageId;

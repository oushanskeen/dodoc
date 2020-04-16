
//  IMPORTS ------------------------------------------------------

    const assert = require("./assert");
    
//   TASK --------------------------------------------------------

    /*
    
    */

//  INPUT DATA:  -------------------------------------------------

    const works = ["one","two","three","four" ];

//  FUNCTIONS ----------------------------------------------------

    //  1  -------------------------------------------------------
    
    const lister = _works => {
        //let acc = _works;
        let med = _works.map((e,i)=>[i+1,e]);
        console.log("med : ", med);
        const out = Object.fromEntries(med);
        return out;
    };
    console.log("lister('one') : ", lister(["one"]));
    assert(
        "Function creates numerated list",
        lister(["one"]),
        {1:"one"}
    );
    
    assert(
        "Function creates numerated list",
        lister(["two"]),
        {1:"two"}
    );
   console.log("lister('one','two') : ", lister(["one","two"]));
   

    assert(
        "Function creates numerated list",
        lister(["one","two"]),
        {1:"one",2:"two"}
    );
        
    //exports.one = one;
    //exports.two = two;



//  FUNC IMPORTS -------------------------------------------------

    const assert = require("./assert");

//  ACCEPTANCE CRITERIA ------------------------------------------

    /*
    - DODOC.READYTEXT
    - 1.1.ONE
        + 1.1.1.DOGTYPE:
            output: returned relevant text template
        - 1.1.2.YURLITSO
            output added proper yurlitso to given template
        - 1.1.3.CONTRAGENT
            output: added contragent data
        - 1.1.4.MONEY
            output: added money
        - 1.1.5.OBJDATA
            output: added objdata
        - 1.1.6.NAME
            output: added dogovor name
    */

//  SAMPLE INPUT
    
    /*
    ["OBJECTNAME",
     "DOGTYPE",
     "DOBROVENT",
     "CLIENTTYPE",
     "CLIENTDATA"]
    */

//  SAMPLE OUTPUT

//  INPUTS LIB ---------------------------------------------------

    const textTemplates = 
        {ttOne:{
            name:"ttOneText",
            func:ttOneText,
            vars:{
                yurlitsoName:"yurlitsoName",
                clientData:"clientData",
                dogName:"dogName"}},
        ttTwo:"ttTwoText",
        ttThree:"ttThreeText",
        ttFour:"ttFourText",
        ttFive:"ttFiveText"};

//  FUNCTIONS ----------------------------------------------------

    // 1 GIVE ME TEMPLATE ----------------------------------------

    const giveMeTemplate = _tempName => {
        return textTemplates[_tempName].name;
    };
    assert(
        "Relevant text template returned",
        giveMeTemplate("ttOne"),
        "ttOneText"    
    );
 
    function ttOneText(){
        const vars = textTemplates.ttOne.vars;
        return (`${vars.yurlitsoName}, ${vars.clientData}, ${vars.dogName}`
        );
    };
    //console.log(ttOneText());
    assert(
        "First text generator returns generated text",
        ttOneText(),
        "yurlitsoName, clientData, dogName"
    ); 


    /*
    function ttTwoText(_vars="t"){return `${_vars}`};
    assert(
        "Second text generator returns generated text",
        ttTwoText(),
        "t"
    );
    function ttThreeText(_vars="t"){return `${_vars}`};
    assert(
        "Third text generator returns generated text",
        ttOneText(),
        "t"
    );  
    function ttFourText(_vars="t"){return `${_vars}`};
    assert(
        "Fourth text generator returns generated text",
        ttTwoText(),
        "t"
    );
    function ttFiveText(_vars="t"){return `${_vars}`};
    assert(
        "Fifth text generator returns generated text",
        ttFiveText(),
        "t"
    );
    */
    assert(
        "",
        rootOut(),
    );
    /*
        IN:
            ["OBJECTNAME:Lipki",
             "DOGTYPE:1|2|3|4|5",
             "DOBROVENT:DOBROVENT.name",
             "CLIENTTYPE",
             "CLIENTDATA"]
        OUT:
            "Lipki, ,"
    */
      
        
    //exports.one = one;
    //exports.two = two;


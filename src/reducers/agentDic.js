//import {state} from '../state.js';
import {
    AGENTDIC_SELECT,
    AGENTDIC_CREATE
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
[
  {
    id:0,
    companyType:"YL",
    name: "AGENT ID:0 TYPE:YL COMP_FULL_NAME",
    compFullName:"AGENT ID:0 TYPE:YL COMP_FULL_NAME",
    compShortName: "AGENT ID:0 TYPE:YL COMP_SHORT_NAME",
    FIO:"AGENT ID:0 TYPE:YL FIO", 
    INN:"AGENT ID:0 TYPE:YL INN",
    KPP:"AGENT ID:0 TYPE:YL KPP",
    OGRN:"AGENT ID:0 TYPE:YL OGRN",
    OKPO:"AGENT ID:0 TYPE:YL OKPO",
    GosRegDate:"AGENT ID:0 TYPE:YL GOS_REG_DATE",
    YurAdress:"AGENT ID:0 TYPE:YL YUR_ADRESS",
    FactAdress:"AGENT ID:0 TYPE:YL FACT_ADRESS",
    GenDirector:"AGENT ID:0 TYPE:YL GEN_DIRECTOR",
    Buhgalter:"AGENT ID:0 TYPE:YL BUHGALTER",
    tel:"AGENT ID:0 TYPE:YL TEL",
    bankName:"AGENT ID:0 TYPE:YL BANK_NAME",
    BIK:"AGENT ID:0 TYPE:YL BIK",
    RS:"AGENT ID:0 TYPE:YL RS",
    KS:"AGENT ID:0 TYPE:YL KS",
    signature: "AGENT ID:0 TYPE:YL SIGNATURE"
  },               
  { 
    id:1,
    companyType:"IP",
    name: "AGENT ID:1 TYPE:IP FULL_NAME",
    FullName:"AGENT ID:1 TYPE:IP FULL_NAME",
    ShortName: "AGENT ID:1 TYPE:IP SHORT_NAME",
    FIO:"AGENT ID:1 TYPE:IP FIO",
    INN:"AGENT ID:1 TYPE:IP INN",
    OGRNIP:"AGENT ID:1 TYPE:IP OGRNIP",
    OGRNIPDate:"AGENT ID:1 TYPE:IP OGRNIP_DATE",
    OKPO:"AGENT ID:1 TYPE:IP ОКРО",
    YurAdress:"AGENT ID:1 TYPE:IP YUR_ADRESS",
    FactAdress:"AGENT ID:1 TYPE:IP FACT_ADRESS",
    bankName:"AGENT ID:1 TYPE:IP BANK_NAME",
    BIK:"AGENT ID:1 TYPE:IP BIK",
    RS:"AGENT ID:1 TYPE:IP RS",
    KS:"AGENT ID:1 TYPE:IP KS",
    signature: "AGENT ID:1 TYPE:IP SIGNATURE"
  },
  {
    id:2,
    companyType:"FL",
    name: "AGENT ID:2 TYPE:FL NAME_INFORMAL",
    NameInformal:"AGENT ID:2 TYPE:FL NAME_INFORMAL",
    lastName:"AGENT ID:2 TYPE:FL LAST_NAME",
    firstName:"AGENT ID:2 TYPE:FL FIRST_NAME",
    midName:"AGENT ID:2 TYPE:FL MID_NAME",
    docType:"AGENT ID:2 TYPE:FL DOC_TYPE",
    Serial:"AGENT ID:2 TYPE:FL SERIAL",
    number:"AGENT ID:2 TYPE:FL NUMBER",
    whoGave:"AGENT ID:2 TYPE:FL WHO_GAVE",
    whenGave:"AGENT ID:2 TYPE:FL WHEN_GAVE",
    codeGave:"AGENT ID:2 TYPE:FL CODE_GAVE",
    addressGave:"AGENT ID:2 TYPE:FL ADRESS_GAVE",
    signature: "AGENT ID:2 TYPE:FL SIGNATURE"
  }
];


export default function(state = initialState,action){
    switch (action.type){
        case AGENTDIC_SELECT:
            return {...state,"currentDic":action.payload};
        case AGENTDIC_CREATE:
            const out = {...state,
                dics:[...state.dics,
                    {id:(state.dics[state.dics.length-1].id)+1,
                     name:Object.entries(action.payload)[0][1],
                     //name:action.payload,
                     data:action.payload
                    }
                ]
            }; 
            console.log("AGENTDIC_SELECT out : ", out);
            return out;
        default:        
            return state;
    };
};


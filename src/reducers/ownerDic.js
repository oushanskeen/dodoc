//import {state} from '../state.js';
import {
    OWNERDIC_SELECT,
    OWNERDIC_CREATE
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
{dics: 
  [
    {
      id:0,
      type:"YL",
      data:
        {
          compFullName:"Общество с ограниченной ответственностью 'Умный Климат Инжениринг'",
          compShortName: "ОOO 'Умный Климат Инжениринг'",
          FIO:"Лылова Дмитрия Павловича", 
          INN:"ORGИНН",
          KPP:"ORGКПП",
          OGRN:"ORGОГРН",
          OKPO:"ORGОКРО",
          GosRegDate:"ORGДАТА ГОС РЕГИСТРАЦИИ",
          YurAdress:"ORGЮРИДИЧЕСКИЙ АДРЕСС",
          FactAdress:"ORGФАКТИЧЕСКИЙ АДРЕСС",
          GenDirector:"ORGГЕН ДИРЕКТОР",
          Buhgalter:"ORGБУХГАЛТЕР",
          tel:"ORGТЕЛЕФОН",
          bankName:"ORGИМЯ БАНКА",
          BIK:"ORGБИК",
          BillOne:"ORGРАСЧЁТНЫЙ СЧЁТ",
          BillTwo:"ORGКОРРЕСПОНДЕНДТСКИЙ СЧЁТ"
        }
    },
    {
      id:1,
      type:"IP",
      data:
        {
          Name:"Индивидуальный предприниматель Попов Александр Петрович",
          FIO:"Попов Александр Петрович",
          INN:"IPИНН",
          OGRNIP:"317502700029527",
          OGRNIPDate:"2 мая 2017",
          OKPO:"IPОКРО",
          FactAdress:"IPФАКТИЧЕСКИЙ АДРЕСС",
          bankName:"IPИМЯ БАНКА",
          BIK:"IPБИК",
          BillOne:"IPРАСЧЁТНЫЙ СЧЁТ",
          BillTwo:"IPКОРЕСПОНДЕНТСКИЙ СЧЁТ"
        }
      },
      {
        id:2,
        type:"FL",
        data:
          {
            NameInformal:"FLНЕФОРМАЛЬНОЕ ИМЯ",
            lastName:"Попов",
            firstName:"Александр",
            midName:"Петрович",
            docType:"паспорт",
            Serial:"4512",
            number:"123421",
            whoGave:"ГУ МВД РОССИИ ПО Г.МОСКВЕ",
            whenGave:"25.01.2019",
            codeGave:"770-007",
            addressGave:"FLГДЕ ВЫДАН"
          }
      }
    ]
};


export default function(state = initialState,action){
  switch (action.type){
    case OWNERDIC_SELECT:
      return {...state,"currentDic":action.payload};
    case OWNERDIC_CREATE:
      const out = {...state,
        dics:[...state.dics,
          {id:(state.dics[state.dics.length-1].id)+1,
            name:Object.entries(action.payload)[0][1],
            data:action.payload
          }
        ]
      }; 
      console.log("OWNERDIC_SELECT out : ", out);
      return out;
    default:        
      return state;
    };
};


//import {state} from '../state.js';
import {
    OWNERDIC_SELECT,
    OWNERDIC_CREATE
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
{
    "currentDic":"some dic",
    "dics": 
        [
            { 
                id:0, 
                name:"ИП Попов",
                data:
                    {
                        CompName:"ИП Попов",
                        FIO:"Попов Александр Петрович",
                        INN: "1111111111111111",
                        OGRN: "11111111111111111",
                        yurAdress: "111111 Россия Домодедово г., 1 кв-л, 11", 
                        bank: "Сбербанк",
                        BIK: "1111111111111111",
                        firstBill: "111111111111111111111111",
                        secondBill: "1111111111111111111111111"
                    }                
            },
            { 
                id:1, 
                name:"ООО УКИ",
                data: 
                    {
                        CompName:"ООО УКИ",
                        FIO:"Клопов Алексей Ветрович",
                        INN: '222222222222',
                        OGRN: "22222222222222222222",
                        yurAdress: "22222222 Россия Довобродово г., 222 кв-л, 222", 
                        bank: "Сбедбанк",
                        BIK: "222222222",
                        firstBill: "222222222222222222222",
                        secondBill: "22222222222222222222222"                         
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


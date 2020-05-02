//import {state} from '../state.js';
import {
    DOGDIC_SELECT,
    DOGDIC_CREATE
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
{
    "currentDic":"some dic",
    "dics": 
        [
            { 
                id:0, 
                name:"Ноль",
                data:
                    {
                        objName:"имя объекта",
                        dogName:"имя договора",
                        zakazchikName: "имя заказчика",
                        postavshikName: "имя поставщика",
                        date: "дата", 
                        bank: "Сбербанк",
                        price: "цена",
                        status: "статус",
                        paid: "оплачено",
                        reponsible: "ответственный",
                        pdfScan: "ссылка на скан договора",
                        commebt: "комментарий"
                    }                
            },
            { 
                id:1, 
                name:"Ноль+",
                data:
                    {
                        objName:"имя объекта +",
                        dogName:"имя договора +",
                        zakazchikName: "имя заказчика +",
                        postavshikName: "имя поставщика +",
                        date: "дата +", 
                        bank: "Сбербанк +",
                        price: "цена +",
                        status: "статус +",
                        paid: "оплачено +",
                        reponsible: "ответственный +",
                        pdfScan: "ссылка на скан договора +",
                        commebt: "комментарий +"
                    }                
            }
        ]
};


export default function(state = initialState,action){
    switch (action.type){
        case DOGDIC_SELECT:
            return {...state,"currentDic":action.payload};
        case DOGDIC_CREATE:
            const out = {...state,
                dics:[...state.dics,
                    {id:(state.dics[state.dics.length-1].id)+1,
                     name:Object.entries(action.payload)[0][1],
                     data:action.payload
                    }
                ]
            }; 
            console.log("DOGDIC_SELECT out : ", out);
            return out;
        default:        
            return state;
    };
};


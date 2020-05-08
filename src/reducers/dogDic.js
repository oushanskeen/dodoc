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
                        dogName:"имя договора",
                        date: "дата",
                        objName:"Липки",
                        owner: "ИП Попов",
                        ownerId: 0,
                        agent: "ООО ПУКИ",
                        agentId: 0,
                        dogovorType:"Проектирование",
                        dogType: "IP",
                        systems: "1,2,3,4",
                        price: "цена"
                    }                
            },
            { 
                id:1, 
                name:"Ноль+",
                data:
                    {
                        dogName:"имя договора",
                        date: "дата",
                        objName:"Пипи",
                        owner: "ООО УКИ",
                        ownerId: 1,
                        agent: "ИП Попов",
                        agentId: 1,
                        dogovorType:"Поставка",
                        dogType: "FL",
                        systems: "1,2",
                        price: "цена"
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


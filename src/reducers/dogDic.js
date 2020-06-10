//import {state} from '../state.js';
import {
  DOGDIC_SELECT,
  DOGDIC_CREATE,
  DOGDIC_UPDATE,
  DOGDIC_DELETE
} from "../constants/actionTypes";

const initialState = (window.Cypress && window.initialState) || [
  {
    id: 0,
    name: "Договор проектирования №2019А04 от 15-апреля-2019",
    date: "15-апреля-2019",
    objName: "OBJECT ID:0 OBJECT_NAME",
    objId: 0,
    ownerName: "OWNER ID:0 TYPE:YL COMP_FULL_NAME",
    ownerId: 0,
    agentName: "AGENT ID:0 TYPE:YL COMP_FULL_NAME",
    agentId: 0,
    dogovorType: "Договор проектирования",
    systems: "вентиляция и кондиционирование",
    price: '200 (двести рублей)',
    srokDeistviya: '15-апреля-2019 / 15-августа-2019'
  },
  {
    id: 1,
    name: "Договор поставки №2018Б34 от 16-мая-2018",
    date: "16-мая-2018",
    objName: "OBJECT ID:1 OBJECT_NAME",
    objId: 1,
    ownerName: "OWNER ID:1 TYPE:IP FULL_NAME",
    ownerId: 1,
    agentName: "AGENT ID:1 TYPE:IP FULL_NAME",
    agentId: 1,
    dogovorType: "Договор поставки",
    systems: "вентиляция и кондиционирование,отопление",
    price: "300 (триста рублей)",
    srokDeistviya: '14-мая-2018 / 14-сентября-2018'
  },
  {
    id: 2,
    name: "Договор поставки №2020Б02 от 4-января-2020",
    date: "4-января-2020",
    objName: "OBJECT ID:2 OBJECT_NAME",
    objId: 2,
    ownerName: "OWNER ID:2 TYPE:FL NAME_INFORMAL",
    ownerId: 2,
    agentName: "AGENT ID:2 TYPE:FL NAME_INFORMAL",
    agentId: 2,
    dogovorType: "Договор поставки",
    systems: "вентиляция и кондиционирование,отопление,котельная",
    price: "400 (четыреста рублей)",
    srokDeistviya: '4-января-2020 / 4-апреля-2020'
  }
];

//--------------------------------------------------------------------

export default function(state = initialState, action) {
  switch (action.type) {
    case DOGDIC_CREATE:
      return [...state, { ...action.payload }];
    case DOGDIC_UPDATE:
      return state.map(e => (e.id === action.payload.id ? action.payload : e));
    case DOGDIC_DELETE:
      return state.filter(e => e.id != action.payload);
    default:
      return state;
  }
}

import ownerDic from "./ownerDic";
//import {state} from "../state.js";
//import {FORM_DATA_NEW} from "../constants/actionTypes";
import * as types from "../constants/actionTypes";

const initState = 
{
    "currentDic":"some dic",
    "dics": 
        [
            { id:0, name:"ООО УКИ"},
            { id:1, name:"ИП Попов"}
        ]
};

describe('ownerdic reducer', () => {
    it('should handle initial state', () => {
        expect(
            ownerDic(undefined, {})
        ).toEqual(initState);
    });
    it('should handle initial ownerdic selection', () => {
        expect(
            ownerDic(initState,{
                    type: types.OWNERDIC_SELECT,
                    payload: "IP Popov"
                })
        ).toEqual({...initState,currentDic: "IP Popov" });
    });
});

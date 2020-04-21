import formDataNew from "./formDataNew";
import {state} from "../state.js";
import {FORM_DATA_NEW} from "../constants/actionTypes";
import * as types from "../constants/actionTypes";

const initState = state;

describe('formDataNew reducer', () => {
    it('should handle initial state', () => {
        expect(
            formDataNew(undefined, {})
        ).toEqual("formDefaultData");
    });
    it('should handle FORM_NEW_DATA state', () => {
        expect(
            formDataNew({},{
                    type: types.FORM_DATA_NEW,
                    payload: {clientType: "Org", data: "som org data" }
                })
        ).toEqual({clientType: "Org", data: "som org data" });
    });
    /*
    it('should handle YURLITSO', () => {
        expect(home({yurlitso:"Dobrovent"}, 
                {
                    type: types.YURLITSO,
                    payload:"Dobrohod"
                })
        ).toEqual({yurlitso:"Dobrohod"});
    });
    it('should handle DOGOVOR_TYPE', () => {
        expect(home({dogovorType:"make"}, 
            {
                type: types.DOGOVOR_TYPE,
                payload:"sell"
            })
    ).toEqual({dogovorType:"sell"});
   */
  });

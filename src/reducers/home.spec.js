import home from './home';
import * as types from '../constants/actionTypes';
import {state} from "../state.js";

const initHomeState = state.hello;

describe('home reducer', () => {
    it('should handle initial state', () => {
        expect(
            home(undefined, {})
        ).toEqual(initHomeState);
    });

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
   
  });
/*
  it('should handle HATE', () => {
    expect(
      gallery([{id:"1",status:'unknown'}], {
        id: "1",
        type: types.HATE
      })
    ).toEqual([
      {
        id: "1",
        status:"Hate"
      }
    ]);
  });
*/
});

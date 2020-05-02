import * as types from "../constants/actionTypes";
import * as actions from "./index";

describe('Ownerdic page actions',()=>{
    it("ownerdic selector sends dictionary name",()=>{
        expect(actions.ownerDic("IP Popov")).toEqual({
            type: types.OWNERDIC_SELECT,
            payload: "IP Popov"
        })
    });
});

describe('Home page actions', () => {
  it('Yurlitso tab emits YURLITSO action', () => {
    expect(actions.yurlitso("Dobrovent")).toEqual({
      type: types.YURLITSO,
      payload: "Dobrovent"
    });
  });
  it('DogovorType tab emits DOGOVOR_TYPE action', () => {
    expect(actions.dogovorType("make")).toEqual({
      type: types.DOGOVOR_TYPE,
      payload: "make"
    });
  });
  it('Form one emits FORM_DATA_NEW action', () => {
    expect(actions.formDataNew({clientType:"Org",formDataNew: "some data"})).toEqual({
      type: types.FORM_DATA_NEW,
      payload: {clientType:"Org",formDataNew: "some data"}
    });
  });
});



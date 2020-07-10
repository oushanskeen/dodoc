// Objectdic.js
import React from "react";
import { DictionaryIO } from "../ELEMENTS/Elements";
import { connect } from "react-redux";
import * as actions from '../../actions/index';
import ObjectDic from '../../interfaces/ObjectDic.ts';
const checkKeys = (object, keymap) => {
  let givenKeys = Object.keys(object);
  return (givenKeys
    .map(e => keymap.includes(e))
    .filter(e => e === true)
    .length === givenKeys.length
  )
};

const Objectdic = ({ state }) => (
    2 == 2
    ? <>
      <div>Hello me empty div</div>
      <div>{JSON.stringify(state.objDic)}</div>
    </>
    : <DictionaryIO
      state={state}
      dictionaryName={"objDic"}
      buttons={["details", "edit", "delete"]}
      welcome={ 'СПРАВОЧНИК НАШИХ ОБЪЕКТОВ:' }
    />
);

const mapStateToProps = _state => ({
  state: _state
});
const mapDispatchToProps = _dispatch => ({
  //onObjDicSelection: data => _dispatch(actions.objDicSelect(data)),
  //onObjDicCreation: data => _dispatch(actions.objDicCreate(data))
  onGetObject: (() => _dispatch(actions.getObject('object')))()
});

export default connect(mapStateToProps, mapDispatchToProps)(Objectdic);

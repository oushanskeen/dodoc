// Objectdic.js
import React from "react";
import { DictionaryIO } from "../ELEMENTS/Elements";
import { connect } from "react-redux";

const Objectdic = ({ state }) => (
    <DictionaryIO
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Objectdic);

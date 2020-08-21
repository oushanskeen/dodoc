// Objectdic.js
import React from "react";
import { DictionaryIO } from "../ELEMENTS/Elements";
import { connect } from "react-redux";
import * as actions from '../../actions/index';
import typeCheck from "../../utils/typeCheck";

const ObjModel = {
  id: "number",
  name: "string",
  adress: "string",
  contactsFIO: "string",
  workRegime: "string"
};
const ObjSample = {
  id: 0,
  name: "string",
  adress: "string",
  contactsFIO: "string",
  workRegime: "string"
};

const Objectdic = ({ state }) => (
      <DictionaryIO
          state={state}
          dictionaryName={"objDic"}
          buttons={["details", "edit","delete"]}
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

// Objectdic.js
import React from "react";
import { DictionaryIO } from "../ELEMENTS/Elements";
import { connect } from "react-redux";
import * as actions from '../../actions/index';
import { ObjectDic } from '../../types/ObjectDic';
const typeCheck =  require('../../utils/typeCheck.js');

type ObjDicProps = {
  objDic: ObjectDic;
  state: any
};

const objectDicModel = {
  id: "string",
  name: "string",
  adress: "string",
  contactsFIO: "string",
  workRegime: "string"
};
//const Objectdic = ({objDic, state}) => {
const Objectdic: React.SFC<ObjDicProps> = 
  ({state, objDic}) => (
 // 2 == 2  
   // (typeof objDic[0] === "undefined") 
   // ||
    typeCheck(objectDicModel, objDic)
      ? <>
        {console.log(
    "typeCheck(objectDicModel, objDic)",
    typeCheck(objectDicModel, objDic)
        )}
        <div>Hello me empty div</div>
        <div>{JSON.stringify(objDic)}</div>
      </>
  : <DictionaryIO
      state={state}
      dictionaryName={"objDic"}
      buttons={["details", "edit", "delete"]}
      welcome={ 'СПРАВОЧНИК НАШИХ ОБЪЕКТОВ:' }
    />
);

const mapStateToProps = (_state: any) => ({
  state: _state,
  objDic: _state.objDic
});
const mapDispatchToProps = (_dispatch: any) => ({
  //onObjDicSelection: data => _dispatch(actions.objDicSelect(data)),
  //onObjDicCreation: data => _dispatch(actions.objDicCreate(data))
  onGetObject: (() => _dispatch(actions.getObject('object')))()
});

export default connect(mapStateToProps, mapDispatchToProps)(Objectdic);

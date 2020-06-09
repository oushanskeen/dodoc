// Dogovordics.js
import React from "react";
import { connect } from "react-redux";
import { DictionaryIO } from "../ELEMENTS/Elements";
import { DicHead } from '../BeautyList';

const Dogovordic = ({ state }) => (
    <DictionaryIO
      state={state}
      dictionaryName={"dogDic"}
      buttons={["details", "edit", "delete", "show"]}
      welcome = { 'СПРАВОЧНИК НАШИХ ДОГОВОРОВ: '}
    />
);

const mapStateToProps = _state => ({
  state: _state
});
const mapDispatchToProps = _dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dogovordic);

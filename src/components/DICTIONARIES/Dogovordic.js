// Dogovordics.js
import React from "react";
import { connect } from "react-redux";
import { DictionaryIO } from "../ELEMENTS/Elements";
import { DicHead } from '../BeautyList';
import * as actions from '../../actions/index';

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
const mapDispatchToProps = _dispatch => ({
  onGetDogovor: (() => _dispatch(actions.getDogovor('dogovor')))(),
  onGetOwner: (() => _dispatch(actions.getOwner('owner')))(),
  onGetAgent: (() => _dispatch(actions.getAgent('agent')))(),
  onGetObject: (() => _dispatch(actions.getObject('object')))(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dogovordic);

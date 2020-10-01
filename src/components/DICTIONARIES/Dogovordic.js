// Dogovordics.js
import React/*, {useState}*/ from "react";
import { connect } from "react-redux";
import { DictionaryIO } from "../ELEMENTS/Elements";
import * as actions from '../../actions/index';

const Dogovordic = ({ state }) => (
  <>
    <DictionaryIO
      state={state}
      dictionaryName={"dogDic"}
      buttons={["details", "edit", "delete", "show"]}
      welcome = { 'СПРАВОЧНИК НАШИХ ДОГОВОРОВ: '}
    />
  <div>editor</div>
  </>
);

const mapStateToProps = _state => ({
  state: _state
});
const mapDispatchToProps = _dispatch => ({
  onGetOwner: (() => _dispatch(actions.getOwner('owner')))(),
  onGetAgent: (() => _dispatch(actions.getAgent('agent')))(),
  onGetObject: (() => _dispatch(actions.getObject('object')))(),
  onGetDogovor: (() => _dispatch(actions.getDogovor('dogovor')))(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dogovordic);

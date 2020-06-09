import React from "react";
import { DictionaryIO } from "../ELEMENTS/Elements";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Agentdic = ({ state }) => (
    <DictionaryIO
      state={state}
      dictionaryName={"agentDic"}
      buttons={["details", "edit", "delete"]}
      welcome={ 'СПРАВОЧНИК НАШИХ КОНТРАГЕНТОВ: '}
    />
);

const mapStateToProps = _state => ({
  state: _state
});
const mapDispatchToProps = _dispatch => ({
  onAgentDicSelection: data => _dispatch(actions.agentDicSelect(data)),
  onAgentDicCreation: data => _dispatch(actions.agentDicCreate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Agentdic);

//export default Ownerdic;

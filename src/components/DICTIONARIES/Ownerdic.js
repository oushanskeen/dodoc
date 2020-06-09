import React  from "react";
import { DictionaryIO } from "../ELEMENTS/Elements";
import { connect } from "react-redux";

const Ownerdic = ({ state }) => (
    <DictionaryIO
      state={state}
      dictionaryName={"ownerDic"}
      buttons={["details", "edit", "delete"]}
      welcome={ 'СПРАВОЧНИК НАШИХ ФИРМ: '}
    />
);

const mapStateToProps = _state => ({ state: _state });
const mapDispatchToProps = _dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Ownerdic);

//export default Ownerdic;

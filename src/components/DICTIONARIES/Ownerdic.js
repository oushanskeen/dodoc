import React  from "react";
import { DictionaryIO } from "../ELEMENTS/Elements";
import { connect } from "react-redux";
import * as actions from '../../actions/index';

const Ownerdic = ({ state }) => (
    <DictionaryIO
      state={state}
      dictionaryName={"ownerDic"}
      buttons={["details", "edit","delete"]}
      welcome={ 'СПРАВОЧНИК НАШИХ ФИРМ: '}
      className="ownerDicComponent"
    />
);

const mapStateToProps = _state => ({ state: _state });
const mapDispatchToProps = _dispatch => ({
  onGetOwner: (() => _dispatch(actions.getOwner('owners')))()
});
export default connect(mapStateToProps, mapDispatchToProps)(Ownerdic);

//export default Ownerdic;

import React from "react";
import { connect } from "react-redux";
import EditManager from "./DICTIONARIES/EditManager";
import Dogovor from "./Dogovor";
import * as actions from "../actions/paperDogovor";
import ReactDOMServer from "react-dom/server";

const ShowBeauty = ({ store, id, onSave, onPrint }) => {
  console.log(`SHOW BEAUTY DOGONSAVE: ${JSON.stringify(store)}`)
  return(
  <EditManager
    inputComponent={
      ReactDOMServer.renderToString(
        <Dogovor state={store} id={id} />
      )
    }
    state={store.paperDogovor.dogOnSaveStatus} 
    onSave={onSave}
    onPrint={onPrint}
  />
)};
const mapStateToProps = _store => ({
  store: _store
});
const mapDispatchToProps = _dispatch => ({
  onSave: data =>
    //console.log(`{action:"SAVE_PAPER_DOGOVOR", payload: ${data}}`),
    _dispatch(actions.savePaperDogovor(data)),
  onPrint: data =>
    console.log(`{action:"PRINT_PAPER_DOGOVOR", payload: ${data}}`)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowBeauty);

//export default Dogovor;

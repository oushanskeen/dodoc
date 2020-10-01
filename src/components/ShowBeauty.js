import React from "react";
import { connect } from "react-redux";
import EditManager from "./DICTIONARIES/EditManager";
import Dogovor from "./Dogovor";
import * as actions from "../actions/paperDogovor";
import ReactDOMServer from "react-dom/server";

const ShowBeauty = ({ store, id, onSave, onPrint }) => {
  console.log(`SHOW BEAUTY DOGONSAVE: ${JSON.stringify(store)}`)
  const name = store.dogDic.data.filter(e => e.id === id)[0].name;
  console.log(`DOGOVOR TO PROCESS NAME: ${name}`);
  return(
  <EditManager
    inputComponent={
      ReactDOMServer.renderToString(
        <Dogovor state={store} id={id} />
      )
    }
    isWatchMode={true}
    name={name}
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
    //console.log(`{action:"PRINT_PAPER_DOGOVOR", payload: ${data}}`)
    _dispatch(actions.printPaperDogovor(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowBeauty);

//export default Dogovor;

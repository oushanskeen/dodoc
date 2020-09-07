import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/paperDogovor";
import PaperDogovor from "./DICTIONARIES/DogovorCVS/PaperDogovor";
import { Text, Button } from "rebass";
import PopUpModal from "./PopUpModal";
import { Modal } from "../Modal";
import useModal from "../useModalPlus";
import { DicBar } from "../components/BeautyList";
import EditManager from "./DICTIONARIES/EditManager";
/*
<>
<Button bg={'silver'} onClick={() => onShow({
  id: "0", name: "Dogovor proyekrotovaniya"})}>
  paper
 </Button>
 <div>{state}</div>
</>
*/
function getSafe(fn) {
  try {
    return fn();
  } catch (e) {
    return undefined;
  }
};
const secToDate = (_sec) => {
  console.log(`SECTODAT INPUT: ${_sec}`);
  const humanDate = new Date(+(_sec.split(".")[0]));
  return`${humanDate}`.split(" ").slice(0,5).join(" ")
};
const ShowPaper = ({
  store, state, onShowList, data, dogList, name, id, onShow, onSave
  }) => {
  let [showPaper, setShowPaper] = useState("");
  const { isShowing, toggle } = useModal(false);
  return (
    <>
      <Button
        bg={"silver"}
        onClick={() => {
          onShowList({ name: name });
          toggle(isShowing);
        }}
      >
        paper
      </Button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        data={
          state === "isLoaded" && dogList[name] !== undefined ? (
            <>
              <Text bg={"lightGrey"} p={"2"} m={"2"}>
                {name}<br/>{showPaper=== "" ? "" : ` версия от ${secToDate(showPaper)}`}
              </Text>
              <label for="paper-dogovor-select">Choose paper dogovor</label>
              <select
                name="paper-dogovors"
                value={showPaper}
                id="paper-dogovors"
                onChange={e => {
                  setShowPaper(e.target.value);
                  onShow({ id: e.target.value.split(".")[0], name: name });
                }}
              >
                <option> - - - - - </option>
                {dogList[name].map(e => (
                  <option value={e}>{e}</option>
                ))}
              </select>
              <div>
                {showPaper === "" ? (
                  <></>
                ) : (
                  <EditManager
                    inputComponent={getSafe(
                      () => store.paperDogovor.data[0].data
                    )}
                    state={store.paperDogovor.dogOnSaveStatus}
                    onSave={onSave}
                    onPrint={() => console.log("ON PRINT")}
                    name={name}
                  />
                )}
              </div>
            </>
          ) : (
            state
          )
        }
      />
    </>
  );
};
const mapStateToProps = _store => ({
  store: _store,
  state:
    _store.paperDogovor.paperDogovorIsLoading === true
      ? "isLoading"
      : _store.paperDogovor.error !== null
      ? "isError"
      : "isLoaded",
  data: _store.paperDogovor.data,
  dogList: _store.paperDogovor.dogList
});
const mapDispatchToProps = _dispatch => ({
  onShow: data => _dispatch(actions.getPaperDogovor(data)),
  onSave: data => _dispatch(actions.savePaperDogovor(data)),
  onShowList: data => _dispatch(actions.getPaperDogovorsList(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPaper);

//export default Dogovor;

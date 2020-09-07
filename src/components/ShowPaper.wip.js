import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/paperDogovor";
import PaperDogovor from "./DICTIONARIES/DogovorCVS/PaperDogovor";
import { Text, Button } from "rebass";
import PopUpModal from "./PopUpModal";
import { Modal } from "../Modal";
import useModal from "../useModalPlus";
import {DicBar} from "../components/BeautyList";
/*
<>
<Button bg={'silver'} onClick={() => onShow({
  id: "0", name: "Dogovor proyekrotovaniya"})}>
  paper
 </Button>
 <div>{state}</div>
</>
*/

const ShowPaper = ({ store, state, onShowList, data, dogList, name, id, onShow }) => {
  console.log(`SHOW PAPER DOGONSHOW: ${JSON.stringify(store)}`);
  // onShow({ id: "0", name: "Dogovor proyekrotovaniya" });
  const { isShowing, toggle } = useModal(false);
  //const name = "Dogovor proyekrotovaniya";
  console.log(`dogList.name: ${dogList[name]}`)
  return (
    <>
      <Button
        bg={"silver"}
        onClick={() => {
          onShowList({name: name });
          toggle(isShowing);
        }}
      >
        paper
      </Button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        data={
          state === "isLoaded" && dogList[name] !== undefined
          ? (<>
              <Text bg={"lightGrey"} p={"2"} m={"2"}>
                {name}
              </Text>
              <div>
              {dogList[name].map(e => (<PaperDogovor data={{
              dogVersion: e.split(".")[0] || "stubDogVersion",
              dogName: name || "stubName",
              component: dogList.data || "stubComponent",
              store:store
            }} onShow={onShow} />))
              }</div></>)
          : state
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
  onShow: (data) =>
    _dispatch(actions.getPaperDogovor(data)),
  onShowList: (data) =>_dispatch(actions.getPaperDogovorsList(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPaper);

//export default Dogovor;

import React, { useRef, useState } from "react";
import { Text, Box, Button } from "rebass";
import { DicButton, DicBar } from "../../BeautyList";
import { ThemeProvider } from "emotion-theming";
import theme from "../../../theme";
import EditManager from "../EditManager";
import * as actions from "../../../actions/paperDogovor";
import { connect } from "react-redux";
/*
          <DicButton 
            name={"show"} 
            action={[onShowHandler,{s:_state,ss:_setState}]}
          />
          <DicButton name={"compare"} />
*/
const PaperDogovor = ({
  data: {
    store,
    dogVersion,
    dogName,
    dogList,
    id,
    state = "ON_FOLD",
    component
  },
  onShow,
  onSave,
  onPrint
}) => {
  let [_state, _setState] = useState(state);
  //let sh = useRef(onShow({id:dogVersion,name:dogName}));
  const onShowHandler = ({ s, ss }) =>
    s === "ON_FOLD" ? ss("ON_SHOW") : ss("ON_FOLD");
  console.log(
    `STORE.DOGLIST IN PAPER DOGOVOR: ${JSON.stringify(store.paperDogovor.data)}`
  );
  console.log(`IN PAPER DOGOVOR ID INPUT: ${dogVersion}`);
  // .filter(e => e.id === dogVersion)[0].data

  return (
    <ThemeProvider theme={theme}>
      <DicBar
        barName={(new Date(+dogVersion)).toString().split(" ").slice(0,5).join(" ")}
        buttonsBar={
          <Button
            bg={"silver"}
            width={"20%"}
            onClick={() => {
              onShowHandler({ s: _state, ss: _setState });
            }}
          >
            show
          </Button>
        }
      />
      {Object.entries(store.paperDogovor.data).length === 0
        ? onShow({ id: dogVersion, name: dogName })
        : console.log("state is up to date")}
      {_state === "ON_SHOW" ? (
        <EditManager
          inputComponent={
            store.paperDogovor.data.filter(e => e.id === dogVersion)[0][
              "data"
            ] || "<div>stub component</div>"
          }
          state={store.paperDogovor.dogOnSaveStatus}
          onSave={onSave}
          onPrint={onPrint}
          name={dogName}
        />
      ) : (
        <></>
      )}
    </ThemeProvider>
  );
};

const mapStateToProps = _store => ({
  // store: _store,
  dogList: _store.dogList
});
const mapDispatchToProps = _dispatch => ({
  onShow: (data) => _dispatch(actions.getPaperDogovor(data)),
  onSave: (data) => _dispatch(actions.savePaperDogovor(data)),
  onPrint: (data) => console.log(`action:"PRINT_PAPER_DOGOVOR", payload: ${data}`)
});

export default connect(mapStateToProps, mapDispatchToProps)(PaperDogovor);
//export default PaperDogovor;

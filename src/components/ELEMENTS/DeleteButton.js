import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Button } from "rebass";
import { DicButton } from '../BeautyList';

// --------------------------------------------------------------------

const DeleteButtonEmptyDiv = ({
  dogovorId,
  onDelete,
  dictionaryName,
  onOwnerDelete,
  onAgentDelete,
  onObjDelete,
  onDogDelete
}) => {
  const dicDelete = dicName => {
    console.log("dicName", dicName);
    switch (dicName) {
      case "ownerDic":
        onOwnerDelete(dogovorId);
        break;
      case "agentDic":
        onAgentDelete(dogovorId);
        break;
      case "objDic":
        onObjDelete(dogovorId);
        break;
      case "dogDic":
        onDogDelete(dogovorId);
        break;
      default:
        console.log("nothing to delete");
    }
  };

  return (
    <Button
      bg='two'
      px={4}
      onClick={() => {
        if (
          window.confirm(
            `Are you sure you want to delete ${dictionaryName}'s ${dogovorId} ?`
          )
        )
          dicDelete(dictionaryName);
      }}
    >delete</Button> 
  );
};
const mapStateToProps = _state => ({});
const mapDispatchToProps = _dispatch => ({
  onDelete: data => _dispatch(actions.dogDicDelete(data)),
  onOwnerDelete: data => _dispatch(actions.ownerDicDelete(data)),
  onAgentDelete: data => _dispatch(actions.agentDicDelete(data)),
  onObjDelete: data => _dispatch(actions.objDicDelete(data)),
  onDogDelete: data => _dispatch(actions.dogDicDelete(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteButtonEmptyDiv);

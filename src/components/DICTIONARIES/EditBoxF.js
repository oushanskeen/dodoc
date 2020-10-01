import React, {useState} from "react";

export const createMessage = ( _actor, _data) => {
  return {
    type: `SAVE_${_actor.toUpperCase()}`,
    payload: _data
  }
};
const EditBoxF = () => {
  const [dogovorText, setEditableText] = useState("stub input text");
  return (
  <div id="editBox">
    <div 
      className="editableDiv" 
      contenteditable="true"
      onInput={(e) => setEditableText(e.target.value)}
    >
      {dogovorText}
    </div>
    <button id="pdf">PDF</button>
    <button id="save">SAVE</button>
  </div>
)};

export default EditBoxF;

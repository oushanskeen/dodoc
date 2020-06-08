import React, { useState } from "react";
import { selectForm } from "../FORMS/selectForm";
import DeleteButtonEmptyDiv from "./DeleteButton";
import Dogovor from "../Dogovor";
import PopUpModal from '../PopUpModal';

//  CONTENT -----------------------------------------------------------

//  0.0 PopUpWindow ::  PopUpModal -> content -> PopUpWindow
//  0.1 ShowHideButton :: ... -> content -> FoldableDiv
//      : ..., a -> (div a -> click -> "")
//      : ..., a -> (""    -> click -> div a)
//  0.2 DetailsButton ::
//      ^ShowHideButton -> data -> DetailsFoldableDiv
//      : ["a","b"] -> (div a -> click -> "") -> ""
//      : ["a","b"] -> ("" -> click -> div a) -> div a div b
//  0.3 EditButton ::
//      ^ShowHideButton -> ^formManager ->
//      dictionaryName  -> EditFoldableDiv
//  0.4 DeleteButton::
//      ^ShowHideButton -> dictionaryName -> articleId -> dictionary
//      : {1:"a",2:"b"} -> 2 -> {1:"a"}
//  0.5 ButtonSetSelector :: buttonSet -> div buttonSet
//      : ["read","update"] -> <DetailsButton/> <EditButton/>
//      : ["delete"] -> <DeleteButton/>

//  0.1
// ShowHideButton :: ... -> content -> FoldableDiv
// : ..., a -> (div a -> click -> "")
// : ..., a -> (""    -> click -> div a)

export const PopUpWindow =  ({
  name = ['show', 'hide'],
  content = 'content'
}) => (
  <PopUpModal name={name} data={content} />
);

export const ShowHideButton = ({
  name = ["show", "hide"],
  content = "content"
}) => {
  const [showHide, setShowHide] = useState(false);
  //console.log("ShowHideButton: ", showHide);
  //console.log("content: ", content);
  return (
    <span>
      <button onClick={() => setShowHide(!showHide)}>
        {showHide === false ? name[0] : name[1]}
      </button>
      {showHide === false ? "" : content}
    </span>
  );
};
//  0.2
// DetailsButton ::
//   data -> ShowHideButton -> DetailsFoldableDiv
// : ["a","b"] -> (div a -> click -> "") -> ""
// : ["a","b"] -> ("" -> click -> div a) -> div a div b
const DetailsButton = ({ owner }) => (
  <PopUpWindow
    name={'details'}
    content={Object.entries(owner).map(record => (
      <div>
        {record[0]} : {record[1]}
      </div>
    ))}
  />
);
//  0.3
// EditButton ::
//   formManager -> dictionaryName
//   -> ShowHideButton -> EditFoldableDiv
const EditButton = ({ owner, dictionaryName }) => (
  <PopUpWindow
    name='edit'
    content={
      <div>
        {console.log(
          "edit button owner,dictionaryName: ",
          owner,
          dictionaryName
        )}
        {selectForm(dictionaryName, owner.type, owner.id).form}
      </div>
    }
  />
);
//  0.4
// DeleteButton :: dictionaryName -> articleId -> dictionary
// : {1:"a",2:"b"} -> 2 -> {1:"a"}
const DeleteButton = ({ id, dictionaryName }) => (
  <DeleteButtonEmptyDiv dogovorId={id} dictionaryName={dictionaryName} />
);

// Selector :: formMananger -> dictName -> FormSelector
export const Selector = ({ selectForm, dictionaryName }) => {
  const [select, setSelect] = useState("");
  return (
    <div>
      <select onChange={e => setSelect(e.target.value)}>
        <option value="-">-------</option>
        {Object.entries(selectForm(dictionaryName, select).formDic).map(e => (
          <option value={e[0]}>{e[0]}</option>
        ))}
      </select>
      <div>
        {select === "" ? (
          ""
        ) : (
          <div>{selectForm(dictionaryName, select).form}</div>
        )}
      </div>
    </div>
  );
};

export const CreateDictionaryArticle = ({ dictionaryName, selectForm }) => {
  return (
    <ShowHideButton
      name={["создать договор", "скрыть"]}
      content={
        selectForm(dictionaryName).types[0] === "def" ? (
          selectForm(dictionaryName).form
        ) : (
          <Selector selectForm={selectForm} dictionaryName={dictionaryName} />
        )
      }
    />
  );
};
const ShowPrintReadyDogovor = ({ state, id }) => {
  return (
    <ShowHideButton
      name={["show beauty", "hide beauty"]}
      content={<Dogovor state={state} id={id} />}
    />
  );
};

const buttonSet = (state, owner, dictionaryName) => ({
  details: <DetailsButton owner={owner} />,
  edit: <EditButton owner={owner} dictionaryName={dictionaryName} />,
  delete: <DeleteButton id={owner.id} dictionaryName={dictionaryName} />,
  show: <ShowPrintReadyDogovor state={state} id={owner.id} />
});
//  1
// ShowDictionaryArticleData ::
// buttonSet -> div buttonSet
// : ["read","update"] -> <DetailsButton/><EditButton/>
// : ["delete"] -> <DeleteButton/>
export const ShowDictionaryArticleData = ({ state, dictionaryName, buttons }) =>
  state[dictionaryName].map(owner => (
    <div>
      {owner.name}
      {buttons.map(e => buttonSet(state, owner, dictionaryName)[e])}
    </div>
  ));

// DicitonaryIO :: state -> dicName ->
// HidableDivWithFormSelector+DictMappedToHidableDiv
export const DictionaryIO = ({ state, dictionaryName, buttons }) => (
  <div>
    <ShowDictionaryArticleData
      dictionaryName={dictionaryName}
      state={state}
      buttons={buttons}
    />
    <CreateDictionaryArticle
      dictionaryName={dictionaryName}
      selectForm={selectForm}
    />
  </div>
);

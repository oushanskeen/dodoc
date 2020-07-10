import React, { useState } from "react";
import { selectForm } from "../FORMS/selectForm";
import DeleteButtonEmptyDiv from "./DeleteButton";
import Dogovor from "../Dogovor";
import PopUpModal from "../PopUpModal";
import { Button, Flex } from "rebass";
import { Select } from '@rebass/forms';
import { DicBar, NewDic} from "../BeautyList";
import {SelectForm, FormName } from '../FORMS/selectForm';
//  CONTENT ----------------------------------------------------------
// @ts-ignore
export const PopUpWindow = (
  {name, content}:
  { name: string | string[], 
    content: string | Array<JSX.Element> | JSX.Element
  }):JSX.Element => 
    <PopUpModal name={name || ["show","hide"]} data={content || "content"} />;

export const ShowHideButton = ({
  name = ["show", "hide"],
  content = "content"
}) => {
  const [showHide, setShowHide] = useState(false);
  //console.log("ShowHideButton: ", showHide);
  //console.log("content: ", content);
  return (
    <span>
      <Button bg="two" onClick={() => setShowHide(!showHide)}>
        {showHide === false ? name[0] : name[1]}
      </Button>
      {showHide === false ? "" : content}
    </span>
  );
};
//  0.2
// DetailsButton ::
//   data -> ShowHideButton -> DetailsFoldableDiv
// : ["a","b"] -> (div a -> click -> "") -> ""
// : ["a","b"] -> ("" -> click -> div a) -> div a div b
const DetailsButton = ({ owner } : {owner:{}}):JSX.Element => (
  <PopUpWindow
    name={"details"}
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
type DictionaryName = "ownerDic"|"agentDic"|"objDic"|"dogDic";
const EditButton = ({ owner, dictionaryName}:
  {owner:any, dictionaryName:FormName}):JSX.Element => (
  <PopUpWindow
    name="edit"
    content={
      <div>
        {selectForm(dictionaryName, owner.type, owner.id).form}
      </div>
    }
  />
);
//  0.4
// DeleteButton :: dictionaryName -> articleId -> dictionary
// : {1:"a",2:"b"} -> 2 -> {1:"a"}
const DeleteButton = ({ id, dictionaryName }:{id:number,dictionaryName:FormName}):JSX.Element => (
  <DeleteButtonEmptyDiv dogovorId={id} dictionaryName={dictionaryName} />
);

// Selector :: formMananger -> dictName -> FormSelector
export const Selector = (
  { selectForm, dictionaryName }:
  {selectForm: SelectForm, dictionaryName:DictionaryName}
  ):JSX.Element => {
  const [select, setSelect] = useState("def");
  const some = selectForm(dictionaryName, select).formDic;
  return (
    <div>
      <Select 
        onChange={e => setSelect(e.target.value)}
      >
        <option value="-">-------</option>
        { 
          Object.entries(some)
          .map(e => <option value={ e[0] }> { e[0] } </option>)
        }
      </Select>
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

export const CreateDictionaryArticle = (
  { dictionaryName, selectForm }:{dictionaryName:string,selectForm:any}):JSX.Element => {
  return (
    <PopUpWindow
      name='создать запись'
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
const ShowPrintReadyDogovor = ({ state, id }:{state:{}, id:number}):JSX.Element => {
  return (
    <PopUpWindow
      name="show beauty"
      content={<Dogovor state={state} id={id} />}
    />
  );
};

const buttonSet = (state, owner, dictionaryName) => ({
  details: <DetailsButton owner={owner} />,
  edit: <EditButton owner={owner} dictionaryName={dictionaryName} />,
  delete: <DeleteButton id={'zero' || owner.id} dictionaryName={dictionaryName} />,
  show: <ShowPrintReadyDogovor state={state} id={'zero' || owner.id} />
});
//  1
// ShowDictionaryArticleData ::
// buttonSet -> div buttonSet
// : ["read","update"] -> <DetailsButton/><EditButton/>
// : ["delete"] -> <DeleteButton/>
export const ShowDictionaryArticleData = 
({ state, dictionaryName, buttons }) => {
  if (state[dictionaryName].data === undefined){return  <></>}
 console.log("STATE SOMEWHERE IN ELEMENTS.JS: ", state);
 console.log("DICTIONARY NAME FROM INPUT: ", dictionaryName);
 return (
  state[dictionaryName].data.map(owner => (
      <DicBar
        barName={'random name' || owner.name}
        buttonsBar={buttons.map(e => buttonSet(state, owner, dictionaryName)[e])}
      />
  )))};

// DicitonaryIO :: state -> dicName ->
// HidableDivWithFormSelector+DictMappedToHidableDiv
export const DictionaryIO = 
({ state, dictionaryName, buttons, welcome }) => (
  <div>
    <NewDic
      data={[welcome,
      <CreateDictionaryArticle
        dictionaryName={dictionaryName}
        selectForm={selectForm}
      />]
      }
    />
    <ShowDictionaryArticleData
      dictionaryName={dictionaryName}
      state={state}
      buttons={buttons}
    />
  </div>
);

import React, { useState } from "react";
import { selectForm } from "../FORMS/selectForm";
import DeleteButtonEmptyDiv from "./DeleteButton";
import Dogovor from "../Dogovor";
import PopUpModal from "../PopUpModal";
import { Button, Flex, Modal } from "rebass";
import { Select } from '@rebass/forms';
import { DicBar, NewDic} from "../BeautyList";

import {typeCheck} from '../../utils/typeCheck';
import objDic from "../../reducers/objDic";

const YL = {
  id:"string",
  name:"string",
  type:"string",
  compFullName:"string",
  compShortName:"string",
  INN:"string",
  KPP:"string",
  OGRN:"string",
  OKPO:"string",
  GosRegDate:"string",
  YurAdress:"string",
  FactAdress:"string",
  GenDirector:"string",
  Buhgalter:"string",
  tel:"string",
  bankName:"string",
  BIK:"string",
  RS:"String",
  KS:"string"
};
const IP = {
  id:"string",
  name:"string",
  type:"string",
  Name:"string",
  FIO:"string",
  INN:"string",
  OGRNIP:"string",
  OKPO:"string",
  FactAdress:"string",
  bankName:"string",
  BIK:"string",
  RS:"String",
  KS:"string"
};
const FL = {
  id:"string",
  name:"string",
  type:"string",
  NameInformal:"string",
  lastName:"string",
  midName:"string",
  docType:"string",
  Serial:"string",
  number:"string",
  whoGave:"string",
  whenGave:"string",
  codeGave:"string",
  addressGave:"string",
};
const DicModel = {
  ownerDic:{
    YL:YL,
    IP:IP,
    FL:FL
  },
  agentDic:{
    YL:YL,
    IP:IP,
    FL:FL
  },
  objDic:{
    id: "string",
    name:"string",
    adress:"string",
    contactsFIO:"string",
    workRegime:"string"
  }
}



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

export const PopUpWindow = ({
  name = ["show", "hide"],
  content = "content"
}) => <PopUpModal name={name} data={content} />;

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
const DetailsButton = ({ owner, state }) => {
  console.log(`OWNER OF A DETAILS BUTTON : `, owner);
  console.log(`STATE IN A DETAILS BUTTON: `, state);
  const updatedOwner = owner.map(e => ({
    ...e,
    agentName: state.agentDic.data.filter(el => el.id === e.agentId)[0].name
    //ownerName:
    //objectName:
  }
  ));
  console.log(`UPDATED OWNER: ${updatedOwner}`)
  return (
  <PopUpWindow
    name={"details"}
    content={Object.entries(owner).map(record => (
      <div>
        {record[0]} : {record[1]}
      </div>
    ))}
  >
  {console.log("DETAILS BUttoN IS RREADY WITH DATA: ", owner)}
  </PopUpWindow>
)};
//  0.3
// EditButton ::
//   formManager -> dictionaryName
//   -> ShowHideButton -> EditFoldableDiv
const EditButton = ({ owner, dictionaryName }) => (
  <PopUpWindow
    name="edit"
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
      <Select onChange={e => setSelect(e.target.value)}>
        <option value="-">-------</option>
        {Object.entries(selectForm(dictionaryName, select).formDic).map(e => (
          <option value={e[0]}>{e[0]}</option>
        ))}
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

export const CreateDictionaryArticle = ({ dictionaryName, selectForm }) => {
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
const ShowPrintReadyDogovor = ({ state, id }) => {
  return (
    <PopUpWindow
      name="show beauty"
      content={<Dogovor state={state} id={id} />}
    />
  );
};

const buttonSet = (state, owner, dictionaryName) => ({
  details: <DetailsButton owner={owner} state={state}/>,
  edit: <EditButton owner={owner} dictionaryName={dictionaryName} />,
  delete: <DeleteButton id={owner.id} dictionaryName={dictionaryName} />,
  show: <ShowPrintReadyDogovor state={state} id={owner.id} />
});
//  1
// ShowDictionaryArticleData ::
// buttonSet -> div buttonSet
// : ["read","update"] -> <DetailsButton/><EditButton/>
// : ["delete"] -> <DeleteButton/>
export const ShowDictionaryArticleData = 
  ({ state, dictionaryName, buttons }) => {
    {console.log("ShowDictionaryArticleData",
    "state: ", state, "dictionaryName", dictionaryName,
      "buttons", buttons)}
    if (state[dictionaryName].data === undefined){
      return  <></>
    }else{
    return ( 
      state[dictionaryName].data
        .map(owner => 
          <DicBar
            barName={owner.name}
            buttonsBar={buttons.map(e => 
                buttonSet(state, owner, dictionaryName)[e]
            )}
          />
        )
    )
  }
};



// DicitonaryIO :: state -> dicName ->
// HidableDivWithFormSelector+DictMappedToHidableDiv
export const DictionaryIO = 
({ state, dictionaryName, buttons, welcome }) => {
  const dicData = state[dictionaryName].data;
  console.log(`DICTIONARYNAME: ${dictionaryName}`);
  const validModel = (dicName, modelsDic) => (dicData) => {
    switch(dicName){
      case "ownerDic":
      case "agentDic":
        console.log(`
          1 dicName: ${dicName},
          1 modelsDic: ${JSON.stringify(modelsDic)},
          1 dicData: ${JSON.stringify(dicData)}
        return dicData["type"];
        `);
        return dicData["type"];
      case "objDic":
      case "dogDic":
        console.log(`
          2 dicName: ${dicName},
          2 modelsDic: ${JSON.stringify(modelsDic)},
          2 dicData: ${JSON.stringify(dicData)}
        `);
        //return modelsDic[dicName];
      default:
        return "pardon, unknown typeCheck error";
    } 
  }; 
  //const isObjData = dicData.map(e => typeCheck(ObjModel,e)
  //  ).filter(el => el.status === true).length > 0;
    //const isDicData = dicData.map(e => 
    //  typeCheck(validModel(dictionaryName,DicModel)(e),e)
    //  ).filter(el => el.status === true).length > 0;
  //const typeCheckLog = dicData.map(e => typeCheck(ObjModel,e));
  //console.log("typeCheckLog: ", typeCheckLog);
  //console.log("isObjData: ", isObjData);
    return (
      <>
        {console.log("STATE IN DICTIONARY IO: ", state)}
        <NewDic
          data={[welcome,
          <CreateDictionaryArticle
            dictionaryName={dictionaryName}
            selectForm={selectForm}
          />]}
        />
        <>
          { false//!isDicData
            //!isValid
            ? <></>
            : <ShowDictionaryArticleData
                dictionaryName={dictionaryName}
                state={state}
                buttons={buttons}
              />
          }
        </>
      </>
  )
};

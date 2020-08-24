// FormDog.js
import React, { useState, useEffect } from "react";
import * as actions from "../../actions";
import { Button } from "rebass";
import {
  ObjectSelect,
  AgentSelect,
  OwnerSelect,
  DogovorTypeSelect,
  SystemsSelect,
  PriceInput,
  SubmitButton
} from "./DogovorFormElements";
import { connect } from "react-redux";
import { createReturn } from "typescript";
import {OnSubmitNotifier} from "./OnSubmitNotifier";
import {makeNewDogovorName} from  '../../utils/nameGen';
const manageId = require("../../utils/manageId");
//const makeNewDogovorName = require("../../utils/nameGen");
const FormDog = ({
  state,
  dogovorId,
  onDogovorDicCreate,
  onDogovorDicUpdate
}) => {
  let [submitted, setSubmitted] = useState(false);
  let [dogName, setDogName] = useState("stubDogName");
  // -----------------------------------------------------------------
  // IMPORTS --------------------------------------------------------
  const importData = {
    dogovor: () => state.dogDic.data.filter(e => e.id === dogovorId)[0],
    owners: () => state.ownerDic.data.map(owner => owner.name),
    agents: () => state.agentDic.data.map(agent => agent.name),
    objects: () => state.objDic.data.map(object => object.name),
    systemsDataVector: () => state.home.systemsDataVector,
    dogovorTypes: () => state.home.dogovorTypes,
    initStateForNewDogovor: () => state.home.initStateForNewDogovor
  };
  console.log("formDog importData: ", importData);

  // FORM STATE MANAGEMENT -------------------------------------------

  const updateOwner = (_owner, _state) => (
       _state.agentDic.data.length !== 0
    && _state.ownerDic.data.length !== 0
    && _state.objDic.data.length   !== 0
    ?
      {  ..._owner,
        agentName: _state.agentDic.data
          .filter(el => el.id === _owner.agentId)
          [0].name,
        objName: _state.objDic.data
          .filter(el => el.id === _owner.objId)
          [0].name,
         ownerName: _state.ownerDic.data
        .filter(el => el.id === `${_owner.ownerId}`)
        [0].name,
      }
    : {..._owner}
);

  const [formData, setFormData] = useState({
    ...(dogovorId === undefined
      ?  {...importData.initStateForNewDogovor()}
      : updateOwner(
          importData.dogovor(),
          state
        )
     )
  });

  console.log("formData in dogovor: ", formData);
  const UpdateFormData = event => {
    console.log("event.target.name: ", event.target.name);
    console.log("event.target.value: ", event.target.value);
    console.log("formData: ", formData);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // CALCULATED DATA FOR THE FORM --------------------------------------------

  const Today = (addDuration = 0) => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1 + addDuration) +
      "-" +
      today.getDate();
    //return date;
    return formData.date === "-"
      ? date
      : state.dogDic.filter(e => e.date === formData.date)[0].date;
  };
  //console.log("Today: ", Today());
  const Id = () => {
    const out = manageId(formData, state.dogDic.data);
    console.log("new id in dogovor dict: ", out.out);
    console.log("input in dogovor dict: ", out.in);
    return out.out;
  };
  const Name = () => {
    console.log("formData name in name generator: ", formData.name);
    console.log("NAME GEN EMMITTED!");
    //const outTwo = makeNewDogovorName(
    //  formData.dogovorType,
    //  state.dogDic.data.map(e => e.name)
    //);
    const out =
      formData.name === "-" //undefined
        ? makeNewDogovorName(
            state.dogDic.data.map(e => e.name),
            formData.dogovorType
          )
        : formData.name;
    return out;
  };
  const ObjectId = () => {
    console.log(
      `IN DOGOVOR OBJECTID formData: ${JSON.stringify(formData)}`
    );
    const out = state.objDic.data.filter(e => 
      e.name === formData.objName
    )[0].id;
    console.log(`ObjectId: ${out}`);
    return out;
  };
  const AgentId = () => {
    const out =  state.agentDic.data.filter(e => 
      e.name === formData.agentName
    )[0].id;
    console.log(`AgentId: ${out}`);
    return out;
  };
  const OwnerId = () => {
    const out = state.ownerDic.data.filter(e => 
      e.name === `${formData.ownerName}`)[0]
      .id;
    console.log(`OwnerId: ${out}`);
    return out;
  };
  const srokDeistviya = () => {
    return `${Today()} / ${Today(4)}`;
  };
  //console.log("FormData: ", formData);
  const handleSubmit = e => {
    console.log(`formData on submit: ${formData}`);
    e.preventDefault();
    //setDogName(Name());
    //setFormData({...formData, name: Name()})
    dogovorId === undefined
      ? onDogovorDicCreate(
          // {...formData,
          {
            id: Id(),
            name: Name(),
            //name: formData.name,
            //name: dogName,
            date: Today(),
            dogovorType: formData.dogovorType,
            objId: ObjectId(),
            agentId: AgentId(),
            ownerId: OwnerId(),
            price: formData.price,
            systems: formData.systems,
            srokDeistviya: srokDeistviya()
          }
        )
      : onDogovorDicUpdate(
          //    {...formData, name: Name()}
          {
            id: formData.id,
            name: formData.name,
            date: formData.date,
            dogovorType: formData.dogovorType,
            objId: ObjectId(),
            agentId: AgentId(),
            ownerId: OwnerId(),
            price: formData.price,
            systems: formData.systems,
            srokDeistviya: formData.srokDeistviya
          }
        );
        setSubmitted(true);
    // );
  };
  // FORM ELEMENTS -------------------------------------------------
  return (
    <form>
      <br />
      <ObjectSelect
        importData={importData}
        formData={formData}
        updateFormData={UpdateFormData}
      />
      <AgentSelect
        importData={importData}
        formData={formData}
        updateFormData={UpdateFormData}
      />
      <OwnerSelect
        importData={importData}
        formData={formData}
        updateFormData={UpdateFormData}
      />
      <DogovorTypeSelect
        importData={importData}
        formData={formData}
        updateFormData={UpdateFormData}
      />
      <SystemsSelect
        importData={importData}
        formData={formData}
        updateFormData={UpdateFormData}
      />
      <PriceInput formData={formData} updateFormData={UpdateFormData} />
      <br />
      {console.log(`FORMDATA BEFORE OnSubmitNotifier: 
         ${JSON.stringify(formData)}`)}
      <OnSubmitNotifier 
        state={state}
        formName={'dogDic'}
        exactName={"name"}
        submitted={submitted}
        formData={formData}
        handleSubmit={handleSubmit}
       />
    </form>
  );
};

const mapStateToProps = _state => ({
  state: _state,
  dogovorData: _state.dogovorData
  //formOneState: _state.form.formOne
});
const mapDispatchToProps = _dispatch => ({
  onDataReady: data => _dispatch(actions.formDataNew(data)),
  onDogovorData: data => _dispatch(actions.dogovorData(data)),
  onDogovorDicCreate: data => _dispatch(actions.dogovorDicCreate(data)),
  onDogovorDicUpdate: data => _dispatch(actions.dogovorDicUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDog);

//export default FormDog;

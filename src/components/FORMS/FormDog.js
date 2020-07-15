// FormDog.js
import React, { useState, useEffect } from "react";
import * as actions from "../../actions";
import { Button } from "rebass";
import { makeNewDogovorName } from '../../utils/nameGen';
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
const manageId = require('../../utils/manageId');

const FormDog = ({
  state,
  dogovorId,
  onDogovorDicCreate,
  onDogovorDicUpdate
}) => {
  // --------------------------------------------------------------------
  // IMPORTS --------------------------------------------------------
  const importData = {
    dogovor: () =>  
      state.dogDic.data.filter(e => e.id === dogovorId)[0],
    owners: () =>
      state.ownerDic.data.map(owner => owner.name),
    agents: () =>
      state.agentDic.data.map(agent => agent.name),
    objects: () =>
      state.objDic.data.map(object => object.name),
    systemsDataVector: () =>
      state.home.systemsDataVector,
    dogovorTypes: () =>
      state.home.dogovorTypes,
    initStateForNewDogovor: () => 
      state.home.initStateForNewDogovor
  };
  console.log("formDog importData: ", importData);

  // FORM STATE MANAGEMENT ----------------------------------------------------

  const [formData, setFormData] = useState({
    ...(dogovorId === undefined
      ? { ...importData.initStateForNewDogovor() }
      : importData.dogovor())
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

  const Today = (addDuration=0) => {
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
    console.log('formData name in name generator: ', formData.name);
    const out =  formData === undefined 
      ? "undefined"    
      : "defined";
    console.log("formData out : ", out);
    return out;
//      || formData.name === "-"
     // ? "NAME"
    //
     // ? makeNewDogovorName(
     //   state.dogDic.data.filter(e => e.dogovorType === formData.dogovorType).pop().name
     // )
     // : state.dogDic.data.filter(e => e.name === formData.name)[0].name;
  };
  //console.log("ID count: ", Id());
  const ObjectId = () => {
    const out = 
    state.objDic.data.filter(e => e.name === formData.objName)[0].id;
    return out;
  };
  //console.log("objId in DormDog: ", formData.objId);
  //console.log("ObjectId: ", ObjectId());
  const AgentId = () => {
    return state.agentDic.data.filter(e => e.name === formData.agentName)[0].id;
  };
  //console.log("AfentId: ", AgentId());
  const OwnerId = () => {
    return state.ownerDic.data.filter(e => e.name === formData.ownerName)[0].id;
  };
  const srokDeistviya = () => {
    return `${Today()} / ${Today(4)}`
  };
  //console.log("FormData: ", formData);
  const handleSubmit = e => {
    console.log(
      `fromData on submit`
    );
    e.preventDefault();
    dogovorId === undefined
      ? onDogovorDicCreate(
        {...formData,
          id: Id(),
          name: Name(),
          date: Today(),
          objId: ObjectId(),
          agentId: AgentId(),
          ownerId: OwnerId(),
          srokDeistviya: srokDeistviya()
        })
      : onDogovorDicUpdate(formData);
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
      <SubmitButton handleSubmit={handleSubmit} />
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
  onDogovorDicCreate: data => _dispatch(actions
    .dogovorDicCreate(data)),
  onDogovorDicUpdate: data => _dispatch(actions
    .dogovorDicUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDog);

//export default FormDog;

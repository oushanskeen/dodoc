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

const FormDog = ({
  store,
  dogovorId,
  onDogovorDicCreate,
  onDogovorDicUpdate
}) => {
  // --------------------------------------------------------------------
  // IMPORTS --------------------------------------------------------
  const importData = {
    dogovor: store.dogDic.filter(e => e.id === dogovorId)[0],
    owners: store.ownerDic.map(owner => owner.name),
    agents: store.agentDic.map(agent => agent.name),
    objects: store.objDic.map(object => object.name),
    systemsDataVector: store.home.systemsDataVector,
    dogovorTypes: store.home.dogovorTypes,
    initStateForNewDogovor: store.home.initStateForNewDogovor
  };
  console.log("formDog importData: ", importData);

  // FORM STATE MANAGEMENT ----------------------------------------------------

  const [formData, setFormData] = useState({
    ...(dogovorId === undefined
      ? { ...importData.initStateForNewDogovor }
      : importData.dogovor)
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
    return formData.date === ""
      ? date
      : store.dogDic.filter(e => e.date === formData.date)[0].date;
  };
  //console.log("Today: ", Today());
  const Id = () => {
    console.log("formData in formDog: ", formData.id);
    return typeof formData.id === "number"
      ? formData.id
      : store.dogDic[store.dogDic.length - 1].id + 1;
  };
  const Name = () => {
    return formData.name === ""
     // ? "NAME"
      ? makeNewDogovorName(
        store.dogDic.filter(e => e.dogovorType === formData.dogovorType)[0].name
      )
      : store.dogDic.filter(e => e.name === formData.name)[0].name;
  };
  //console.log("ID count: ", Id());
  const ObjectId = () => {
    return store.objDic.filter(e => e.name === formData.objName)[0].id;
  };
  console.log("objId in DormDog: ", formData.objId);
  //console.log("ObjectId: ", ObjectId());
  const AgentId = () => {
    return store.agentDic.filter(e => e.name === formData.agentName)[0].id;
  };
  //console.log("AfentId: ", AgentId());
  const OwnerId = () => {
    return store.ownerDic.filter(e => e.name === formData.ownerName)[0].id;
  };
  const srokDeistviya = () => {
    return `${Today()} / ${Today(4)}`
  };
  //console.log("FormData: ", formData);
  const handleSubmit = e => {
    e.preventDefault();
    dogovorId === undefined
      ? onDogovorDicCreate(formData)
      : onDogovorDicUpdate(formData);
  };
  const handleSaveCountedData = () =>
    setFormData({
      ...formData,
      id: Id(),
      name: Name(),
      date: Today(),
      objId: ObjectId(),
      agentId: AgentId(),
      ownerId: OwnerId(),
      srokDeistviya: srokDeistviya()
    })
  
    console.log('fromData on Save: ', formData);
  const SaveButton = () => {
    return (
      <Button bg="two" onClick={handleSaveCountedData}>
        Save
      </Button>
    );
  };
  // FORM ELEMENTS ----------------------------------------------------------
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
      <SaveButton />
    </form>
  );
};

const mapStateToProps = _state => ({
  store: _state,
  dogovorData: _state.dogovorData
  //formOneState: _state.form.formOne
});
const mapDispatchToProps = _dispatch => ({
  onDataReady: data => _dispatch(actions.formDataNew(data)),
  onDogovorData: data => _dispatch(actions.dogovorData(data)),
  onDogovorDicCreate: data => _dispatch(actions.dogDicCreate(data)),
  onDogovorDicUpdate: data => _dispatch(actions.dogDicUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDog);

//export default FormDog;

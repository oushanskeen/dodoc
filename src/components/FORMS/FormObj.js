// FormObj.js
import React, { useState } from "react";
//import { Input } from "../../css/style.js";
import { Input } from '@rebass/forms';
import { Button } from 'rebass';
import * as actions from "../../actions";
import { connect } from "react-redux";

const FormObj = ({ onObjDicCreate, onObjDicUpdate, objectId, state }) => {
  const importData = {
    objectData: () => {
      return state.objDic.data.filter(e => e.id === objectId)[0]
     // console.log("STATE OBJDIC IN OBJDIC FORM: ", state.objDic);
     // console.log("STATE OBJDIC FILTERD: ", 
     //   state.objDic.data.filter(e => e.id === objectId)[0]
     // );
     // console.log("OBJECT ID: ", objectId);
    },
    objectName: () => state.objDic.map(object => object.name),
    initStateForNewObject: () => state.home.initStateForNewObject
  };
 // console.log("objDog importData: ", importData.objectData());
 // console.log("Object id: ", objectId);
  const [formData, setFormData] = useState({
    ...(objectId === undefined
      ? { ...importData.initStateForNewObject() }
      : importData.objectData())
  }
  );
  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  //  Calculated Data

  const Id = () => {
    //console.log("formData.id in formDog: ", formData.id);
    //console.log("dics informDog: ", 
    //  state.objDic
    //);
    //console.log("last dic in formDog: ", 
    //  state.objDic.data[state.objDic.data.length-1].id
    //);
    //return typeof formData.id === "string"
    //  ? formData.id
    //  : state.objDic[state.objDic.length - 1].id + 1;
    //if (formData.id === '-'){
    //  return 0;
    //}else{
    //  console.log("CURRENT OBJECT ID: ", state.objDic);
    //  return +state.objDic.data[state.objDic.data.length - 1].id + 1
    //}else{
    //  return 0;
    //}
    const out = formData.id === undefined
      ? formData.id ="-"
      : Date.now();
    return out;
  };

  // --------------------------------------------------------------------

  const handleSubmit = e => {
    console.log('handleSubmitEmitted');
    e.preventDefault();
    console.log('form content:', e.target);
//  !e.target.checkValidity() &&
    objectId === undefined
      ? onObjDicCreate({...formData, id: Id()})
      : onObjDicUpdate(formData);
    return null;
    //onObjDicCreate(formData);
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      <br />
      <label>
        {" "}
        name <br />
        <Input
          id="name"
          value={formData.name}
          onChange={e => updateFormData(e)}
          placeholder=" name"
          type="text"
          name="name"
          required
          maxlength="120"
        />
        <br />
      </label>
      <label>
        {" "}
        adress: <br />
        <Input
          id="adress"
          value={formData.adress}
          onChange={e => updateFormData(e)}
          placeholder=" adress "
          type="text"
          name="adress"
          required
          maxlength="120"
        />
        <br />
      </label>
      <label>
        {" "}
        Contact: <br />
        <Input
          id="contactsFIO"
          value={formData.contactsFIO}
          onChange={e => updateFormData(e)}
          placeholder=" FIO role ?contacts "
          type="text"
          name="contactsFIO"
          required
          maxlength="120"
        />
        <br />
      </label>

      <label>
        {" "}
        workRegime : <br />
        <Input
          id="workRegime"
          value={formData.workRegime}
          onChange={e => updateFormData(e)}
          placeholder=" workRegime "
          type="text"
          name="workRegime"
          required
          minlength="8"
          maxlength="8"
        />
        <br />
      </label>
      <Button bg='two' type='submit' 
      >Submit</Button>
    </form>
  );
};

const mapStateToProps = _state => ({
  state: _state,
  store: _state
  //dogovorData: _state.dogovorData
  //formOneState: _state.form.formOne
});
const mapDispatchToProps = _dispatch => ({
  onDataReady: data => _dispatch(actions.formDataNew(data)),
  onDogovorData: data => _dispatch(actions.dogovorData(data)),
  onObjDicCreate: data => _dispatch(actions.objectDicCreate(data)),
  onObjDicUpdate: data => _dispatch(actions.objectDicUpdate(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(FormObj);

// export default FormObj;

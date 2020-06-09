// FormObj.js
import React, { useState } from "react";
//import { Input } from "../../css/style.js";
import { Input } from '@rebass/forms';
import { Button } from 'rebass';
import * as actions from "../../actions";
import { connect } from "react-redux";

const FormObj = ({ onObjDicCreate, onObjDicUpdate, objectId, state }) => {
  const importData = {
    objectData: state.objDic.filter(e => e.id === objectId)[0],
    objectName: state.objDic.map(object => object.name),
    initStateForNewObject: state.home.initStateForNewObject
  };
  console.log("objDog importData: ", importData);

  const [formData, setFormData] = useState({
    ...(objectId === undefined
      ? { ...importData.initStateForNewObject }
      : importData.objectData)
  });
  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  //  Calculated Data

  const Id = () => {
    console.log("formData in formDog: ", formData.id);
    return typeof formData.id === "number"
      ? formData.id
      : state.objDic[state.objDic.length - 1].id + 1;
  };
  const handleSaveCountedData = () => setFormData({ ...formData, id: Id() });
  const SaveButton = () => {
    return <Button bg='two' onClick={handleSaveCountedData}>Save</Button>;
  };

  // --------------------------------------------------------------------

  const handleSubmit = e => {
    e.preventDefault();
    objectId === undefined
      ? onObjDicCreate(formData)
      : onObjDicUpdate(formData);
    //onObjDicCreate(formData);
  };
  return (
    <form>
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
      <Button bg='two' onClick={handleSubmit}>Submit</Button>
      <SaveButton />
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
  onObjDicCreate: data => _dispatch(actions.objDicCreate(data)),
  onObjDicUpdate: data => _dispatch(actions.objDicUpdate(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(FormObj);

// export default FormObj;

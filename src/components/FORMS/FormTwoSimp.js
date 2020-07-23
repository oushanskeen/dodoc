import React, { useState } from "react";
//import { Input } from "../../css/style.js";
import { Input } from '@rebass/forms';
import { Button } from 'rebass';
import * as actions from "../../actions";
import { connect } from "react-redux";

const FormTwoSimp = ({
  formName,
  ownerId,
  agentId,
  state,
  onOwnerDicCreate,
  onOwnerDicUpdate,
  onAgentDicCreate,
  onAgentDicUpdate
}) => {
  const actorId = formName => {
    switch (formName) {
      case "ownerDic":
        return ownerId;
      case "agentDic":
        return agentId;
      default:
        return "no actor id";
    }
  };

  const importData = (formName, actorId) => ({
    actorData: state[formName].data.filter(e => e.id === actorId)[0],
    actorName: state[formName].data.map(actor => actor.name),
    initStateForNewActor: state.home.initStateForNewActor("IP")
  });
  const currentImportData = () => importData(formName, actorId(formName));
  console.log("objDog importData: ", currentImportData());
  const [formData, setFormData] = useState({
    ...(actorId(formName) === undefined
      ? { ...currentImportData().initStateForNewActor }
      : currentImportData().actorData)
  });
  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    //setDataSent("OK");
    //console.log("form data : ", formData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    //ownerId===undefined || agentId===undefined
    if (formName === "ownerDic") {
      if (ownerId === undefined) {
        onOwnerDicCreate({...formData, id: Id(), name: Name()});
      } else {
        onOwnerDicUpdate({...formData, name: Name()});
      }
    } else {
      if (formName === "agentDic") {
        if (agentId === undefined) {
          onAgentDicCreate({...formData, id: Id(), name: Name()});
        } else {
          onAgentDicUpdate(formData);
        }
      }
    }
  };
  const Id = () => {
    console.log("formData in formDog: ", formData.id);
    //return typeof formData.id === "number"
    //  ? formData.id
    //  : state[formName][state[formName].length - 1].id + 1;
    const out = formData === undefined
      ? formData.id === "-"
      : Date.now();
    return out;
  };
  const Name = () => {
    // console.log("state[formName]:", state[formName]);
    console.log("formData: ", formData);
    return formData.name === "-"
      ? formData.ShortName
      : state[formName].data.filter(e => e.name === formData.name)[0].name;
  };

  //console.log("store in formTwo : ", store)
  return (
    <form>
      <br />
      <label>
        {" "}
        Название : <br />
        <Input
          id="ShortName"
          value={formData.ShortName}
          onChange={e => updateFormData(e)}
          placeholder=" Название "
          type="text"
          name="ShortName"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        ФИО : <br />
        <Input
          id="FIO"
          value={formData.FIO}
          onChange={e => updateFormData(e)}
          placeholder=" ФИО "
          type="text"
          name="FIO"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        ИНН : <br />
        <Input
          id="INN"
          value={formData.INN}
          onChange={e => updateFormData(e)}
          placeholder=" ИНН "
          type="text"
          name="INN"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        ОГРНИП : <br />
        <Input
          id="OGRNIP"
          value={formData.OGRNIP}
          onChange={e => updateFormData(e)}
          placeholder=" ОГРНИП "
          type="text"
          name="OGRNIP"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        ОКПО : <br />
        <Input
          id="OKPO"
          value={formData.OKPO}
          onChange={e => updateFormData(e)}
          placeholder=" ОКПО "
          type="text"
          name="OKPO"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        Фактический адрес : <br />
        <Input
          id="FactAdress"
          value={formData.FactAdress}
          onChange={e => updateFormData(e)}
          placeholder=" Фактический адрес "
          type="text"
          name="FactAdress"
          required
        />
        <br />
      </label>
      <br />
      Банковские реквизиты <br />
      <br />
      <label>
        {" "}
        Наименование банка : <br />
        <Input
          id="bankName"
          value={formData.bankName}
          onChange={e => updateFormData(e)}
          placeholder=" Наименование банка "
          type="text"
          name="bankName"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        БИК : <br />
        <Input
          id="BIK"
          value={formData.BIK}
          onChange={e => updateFormData(e)}
          placeholder=" BIK "
          type="text"
          name="BIK"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        Расчетный счёт : <br />
        <Input
          id="RS"
          value={formData.RS}
          onChange={e => updateFormData(e)}
          placeholder=" Расчетный счёт "
          type="text"
          name="RS"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        Корр. счёт : <br />
        <Input
          id="KS"
          value={formData.KS}
          onChange={e => updateFormData(e)}
          placeholder=" Корр. счёт "
          type="text"
          name="KS"
          required
        />
        <br />
      </label>
      <br />
      <Button bg='two' onClick={handleSubmit}>Submit</Button>
    </form>
  );
};

const mapStateToProps = _state => ({
  store: _state,
  state: _state,
  dogovorData: _state.dogovorData
});
const mapDispatchToProps = _dispatch => ({
  onOwnerDicCreate: data => _dispatch(actions.ownerDicCreate(data)),
  onOwnerDicUpdate: data => _dispatch(actions.ownerDicUpdate(data)),
  onAgentDicCreate: data => _dispatch(actions.agentDicCreate(data)),
  onAgentDicUpdate: data => _dispatch(actions.agentDicUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTwoSimp);

//    export default FormTwoSimp;

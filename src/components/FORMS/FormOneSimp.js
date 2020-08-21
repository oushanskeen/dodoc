import React, { useState } from "react";
//import { Input } from "../../css/style.js";
import { Input } from "@rebass/forms";
import { Button } from 'rebass';
import * as actions from "../../actions";
import { connect } from "react-redux";
import {OnSubmitNotifier} from "./OnSubmitNotifier";

const FormOneSimp = ({
  formName,
  ownerId,
  agentId,
  state,
  onOwnerDicCreate,
  onOwnerDicUpdate,
  onAgentDicCreate,
  onAgentDicUpdate
}) => {
  console.log("formName in FormOneSimp :", formName);
  console.log("state in FormOneSimp: ", state);
  let [submitted, setSubmitted] = useState(false);
  // state,formName,ownerId,agentId
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
    initStateForNewActor: state.home.initStateForNewActor("YL")
  });
  const currentImportData = () => importData(formName, actorId(formName));
  const [formData, setFormData] = useState({
    ...(actorId(formName) === undefined
      ? { ...currentImportData().initStateForNewActor }
      : currentImportData().actorData)
  });
  console.log("form data in formOneSimpo.owner somp:",
    formData
  )
  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const Name = () => {
    // console.log("state[formName]:", state[formName]);
    console.log("formData: ", formData);
    return (
      //formData.name === "-"
      //? 
      formData.compShortName
      //: state[formName].data.filter(e => e.name === formData.name)[0].name;
    )
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (formName === "ownerDic") {
      if (ownerId === undefined) {
        onOwnerDicCreate({
         // dicName: "owners",
         // dicData: {
            ...formData, id: Id(), name: Name()
         // }
        });
        setSubmitted(true)
        //setFormData({...formData});
      } else {
        onOwnerDicUpdate({
          //dicName: "owners",
          //dicData: {
            ...formData, name: Name()
          //}:
        });
        setFormData({...formData});
      }
    } else {
      if (formName === "agentDic") {
        if (agentId === undefined) {
          onAgentDicCreate({...formData, id: Id(), name: Name()});
        } else {
          onAgentDicUpdate({...formData, name: Name()});
        }
      }
    }
  };
  const Id = () => {
    //console.log("formData in formDog: ", formData.id);
    console.log("formData for Id: ", formData);
    console.log("formData for Id: ", formData.id);
    console.log(
        'typeof formData.id === "number"',
        typeof formData.id === "number"
    );
    //console.log()
    const out = formData === undefined 
      ? formData.id === "-" 
      : Date.now();
    console.log("out in owners or agents: ", out);
    return out; 
      //typeof formData.id === "number"
      //? formData.id
      //: state[formName].data.length == 0
      //  ? 0
      //  : state[formName].data[state[formName].data.length - 1].id + 1;
  };
//  const Name = () => {
    // console.log("state[formName]:", state[formName]);
//    console.log("formData: ", formData);
//    return (
      //formData.name === "-"
      //? 
//      formData.compShortName
      //: state[formName].data.filter(e => e.name === formData.name)[0].name;
//    )
//  };

  return (
    <form>
      <br />
      <label>
        {" "}
        Полное название организации : <br />
        <Input
          id="compFullName"
          value={formData.compFullName}
          onChange={e => updateFormData(e)}
          placeholder=" Полное название организации "
          type="text"
          name="compFullName"
          required
          maxlength="120"
        />
        <br />
      </label>
      <label>
        {" "}
        Краткое название организации : <br />
        <Input
          id="compShortName"
          value={formData.compShortName}
          onChange={e => updateFormData(e)}
          placeholder=" Краткое название организации "
          type="text"
          name="compShortName"
          required
          maxlength="120"
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
          minlength="10"
          maxlength="10"
        />
        <br />
      </label>
      <label>
        {" "}
        КПП : <br />
        <Input
          id="KPP"
          value={formData.KPP}
          onChange={e => updateFormData(e)}
          placeholder=" КПП "
          type="text"
          name="KPP"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        ОГРН : <br />
        <Input
          id="OGRN"
          value={formData.OGRN}
          onChange={e => updateFormData(e)}
          placeholder=" ОГРН "
          type="text"
          name="OGRN"
          required
          minlength="13"
          maxlength="13"
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
          minlength="8"
          maxlength="8"
        />
        <br />
      </label>
      <label>
        {" "}
        Дата государственной регистрации : <br />
        <Input
          id="GosRegDate"
          value={formData.GosRegDate}
          onChange={e => updateFormData(e)}
          placeholder=" Дата государственной регистрации "
          type="text"
          name="GosRegDate"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        Юридический адрес : <br />
        <Input
          id="YurAdress"
          value={formData.YurAdress}
          onChange={e => updateFormData(e)}
          placeholder=" Юридический адрес "
          type="text"
          name="YurAdress"
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
      <label>
        {" "}
        Ген. директор (ФИО) : <br />
        <Input
          id="GenDirector"
          value={formData.GenDirector}
          onChange={e => updateFormData(e)}
          placeholder=" Ген. директор (ФИО) "
          type="text"
          name="GenDirector"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        Бухгалтер (ФИО) : <br />
        <Input
          id="Buhgalter"
          value={formData.Buhgalter}
          onChange={e => updateFormData(e)}
          placeholder=" Бухгалтер (ФИО) "
          type="text"
          name="Buhgalter"
          required
        />
        <br />
      </label>
      <label>
        {" "}
        телефон : <br />
        <Input
          id="tel"
          value={formData.tel}
          onChange={e => updateFormData(e)}
          placeholder=" телефон "
          type="text"
          name="tel"
          required
        />
        <br />
      </label>
      <br />
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
      <OnSubmitNotifier 
        state={state}
        formName={formName}
        exactName={"compShortName"}
        submitted={submitted}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </form>
  );
};

const mapStateToProps = _state => ({
  state: _state
});
const mapDispatchToProps = _dispatch => ({
  onOwnerDicCreate: data => _dispatch(actions.ownerDicCreate(data)),
  onOwnerDicUpdate: data => _dispatch(actions.ownerDicUpdate(data)),
  onAgentDicCreate: data => _dispatch(actions.agentDicCreate(data)),
  onAgentDicUpdate: data => _dispatch(actions.agentDicUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormOneSimp);

//export default FormOneSimp;

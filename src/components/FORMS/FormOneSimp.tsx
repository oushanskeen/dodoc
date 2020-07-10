import React, { useState } from "react";
//import { Input } from "../../css/style.js";
import { Input } from "@rebass/forms";
import { Button } from 'rebass';
import * as actions from "../../actions";
import { connect } from "react-redux";


type DicRecord = {
    data:[
      {
        id: number,
        name: string
      }
    ]
};

type OrgType = "YL" | "FL" | "IP";
  type State = {
    home: {initStateForNewActor: (name: OrgType) => Object},
    ownerDic: DicRecord,
    agentDic: DicRecord,
    objDic: DicRecord,
    dogDic: DicRecord
  };
type FormName = "ownerDic" | "agentDic" | "objDic" | "dogDic";
type FormData = 
{
  id: number,
  name: string,
  type: string,
  compFullName: string,
  compShortName: string,
  INN: string,
  KPP: string,
  OGRN: string,
  OKPO: string,
  GosRegDate: string,
  YurAdress: string,
  FactAdress: string,
  GenDirector: string,
  Buhgalter: string,
  tel: string,
  bankName: string,
  BIK: string,
  RS: string,
  KS: string
};
 type SetFormData = (x:Object) => FormData;
  type CurrentImportData = {
    actorData: Object,
    actorName: Array<string>,
    initStateForNewActor: Object,
  };
const FormOneSimp = ({
  formName,
  ownerId,
  agentId,
  state,
  onOwnerDicCreate,
  onOwnerDicUpdate,
  onAgentDicCreate,
  onAgentDicUpdate
}:{
  formName?: FormName,
  ownerId?: number,
  agentId?: number,
  state?: State,
  onOwnerDicCreate?: (data:Object) => Object,
  onOwnerDicUpdate?: (data:Object) => Object,
  onAgentDicCreate?: (data:Object) => Object,
  onAgentDicUpdate?: (data:Object) => Object
}): JSX.Element => {
  // state,formName,ownerId,agentId
  const importData = (formName:FormName, actorId:number):CurrentImportData => {
    return {
      actorData: state[formName].data.filter((e) => e.id === actorId)[0],
      actorName: state[formName].data.map((actor) => actor.name),
      initStateForNewActor: state.home.initStateForNewActor("YL")
    }
    };
  const actorId = (formName: FormName): number => formName === "ownerDic" ? ownerId : agentId;
  const currentImportData = ():CurrentImportData => importData(formName, actorId(formName));
  let [formData, setFormData] = useState({
    ...(actorId(formName) === undefined
      ? { ...currentImportData().initStateForNewActor }
      : currentImportData().actorData)
    });
  const updateFormData = (event: React.SyntheticEvent):void => {
    let target = event.target as HTMLInputElement;
    setFormData({
      ...formData,
      [target.name]: target.value
    });
    };
  const handleSubmit = (e: React.SyntheticEvent):Object|undefined => {
    e.preventDefault();
    if (formName === "ownerDic") {
      if (ownerId === undefined) {
        onOwnerDicCreate({...formData, id: Id(), name: Name()});
      } else {
        onOwnerDicUpdate({...formData});
      }
    } else {
      if (formName === "agentDic") {
        if (agentId === undefined) {
          onAgentDicCreate({...formData, id: Id(), name: Name()});
        } else {
          onAgentDicUpdate(formData);
        }
      }
    };
    return;
    };
  const Id = ():number => Date.now(); 
  const Name = (_formData:FormData) => {
    return _formData.name === ""
      ? _formData.compShortName
      : state[formName].data.filter(e => e.name === _formData.name)[0].name;
    };
  const CompFullName = ({_formData}:{_formData:any}):JSX.Element => (
      <label>
        {" "}
        Полное название организации : <br />
        <Input
          id="compFullName"
          value={_formData.compFullName}
          onChange={(e:any) => updateFormData(e)}
          placeholder=" Полное название организации "
          type="text"
          name="compFullName"
          required
          maxlength="120"
        />
        <br />
      </label>
  );
  return (
    <form>
      <br />
      <CompFullName _formData={formData}/>
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
      <Button bg='two' onClick={handleSubmit}>Submit</Button>
    </form>
    );
};

const mapStateToProps = (_state: State) => ({
  state: _state
});
const mapDispatchToProps = (_dispatch: any):Object => ({
  onOwnerDicCreate: (data:Object):Object => _dispatch(actions.ownerDicCreate(data)),
  onOwnerDicUpdate: (data:Object):Object => _dispatch(actions.ownerDicUpdate(data)),
  onAgentDicCreate: (data:Object):Object => _dispatch(actions.agentDicCreate(data)),
  onAgentDicUpdate: (data:Object):Object => _dispatch(actions.agentDicUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormOneSimp);

//export default FormOneSimp;

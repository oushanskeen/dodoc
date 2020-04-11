   
    import React, {useState} from 'react';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Input,Button,link,naked,Selectable,ghost
    } from '../css/style.js';
    import * as actions from '../actions';
    import BeautyText from "./BeautyText";

    const FormOne = () => {
        const [formData, setFormData] = useState({
            compFullName: "",
            compShortName: "",
            INN: "",
            KPP:"",
            OGRN:"",
            OKPO:"",
            GosRegDate:"",
            YurAdress:"",
            FactAdress:"",
            GenDirector:"",
            Buhgalter:"",
            tel:"",
            bankName:"",
            BIK:"",
            BillOne:"",
            BillTwo:""
        });
        const formString = JSON.stringify(formData);
        const updateFormData = event => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value
            });
            //console.log("formData : ", formData);
        }
        const 
        { 
            compFullName, 
            compShortName,
            INN,
            KPP,
            OGRN,
            OKPO,
            GosRegDate,
            YurAdress,
            FactAdress,
            GenDirector,
            Buhgalter,
            tel,
            bankName,
            BIK,
            BillOne,
            BillTwo
        } = formData;
        const handleSubmit = e => {
            e.preventDefault();
            //onYur(formData);
            console.log("formData after submit: ", formData);
        };
    const FormReport = () => (
        <Text m={"2vmin"}>
            <div>
                {"FORM REPORT: coming soon"}
            </div>
        </Text>
      
    );
    return (
        <form>
            <br/>
                <label> Полное название организации : <br/>
                    <Input
                        id="compFullName"
                        value= {compFullName}
                        onChange={e => updateFormData(e)}
                        placeholder=" Полное название организации "
                        type="text"
                        name="compFullName"
                        required
                    /><br/>
               </label>
               <label> Краткое название организации : <br/>
                    <Input
                        id="compShortName"
                        value= {compShortName}
                        onChange={e => updateFormData(e)}
                        placeholder=" Краткое название организации "
                        type="text"
                        name="compShortName"
                        required
                    /><br/>
               </label>
               <label> ИНН : <br/>
                    <Input
                        id="INN"
                        value= {INN}
                        onChange={e => updateFormData(e)}
                        placeholder=" ИНН "
                        type="text"
                        name="INN"
                        required
                    /><br/>
               </label>
               <label> КПП : <br/>
                    <Input
                        id="KPP"
                        value= {KPP}
                        onChange={e => updateFormData(e)}
                        placeholder=" КПП "
                        type="text"
                        name="KPP"
                        required
                    /><br/>
               </label>
               <label> ОГРН : <br/>
                    <Input
                        id="OGRN"
                        value= {OGRN}
                        onChange={e => updateFormData(e)}
                        placeholder=" ОГРН "
                        type="text"
                        name="OGRN"
                        required
                    /><br/>
               </label>
               <label> ОКПО : <br/>
                    <Input
                        id="OKPO"
                        value= {OKPO}
                        onChange={e => updateFormData(e)}
                        placeholder=" ОКПО "
                        type="text"
                        name="OKPO"
                        required
                    /><br/>
               </label>
               <label> Дата государственной регистрации : <br/>
                    <Input
                        id="GosRegDate"
                        value= {GosRegDate}
                        onChange={e => updateFormData(e)}
                        placeholder=" Дата государственной регистрации "
                        type="text"
                        name="GosRegDate"
                        required
                    /><br/>
               </label>
               <label> Юридический адрес : <br/>
                    <Input
                        id="YurAdress"
                        value= {YurAdress}
                        onChange={e => updateFormData(e)}
                        placeholder=" Юридический адрес "
                        type="text"
                        name="YurAdress"
                        required
                    /><br/>
               </label>
               <label> Фактический адрес : <br/>
                    <Input
                        id="FactAdress"
                        value= {FactAdress}
                        onChange={e => updateFormData(e)}
                        placeholder=" Фактический адрес "
                        type="text"
                        name="FactAdress"
                        required
                    /><br/>
               </label>
               <label> Ген. директор (ФИО) : <br/>
                    <Input
                        id="GenDirector"
                        value= {GenDirector}
                        onChange={e => updateFormData(e)}
                        placeholder=" Ген. директор (ФИО) "
                        type="text"
                        name="GenDirector"
                        required
                    /><br/>
               </label>
               <label> Бухгалтер (ФИО) : <br/>
                    <Input
                        id="Buhgalter"
                        value= {Buhgalter}
                        onChange={e => updateFormData(e)}
                        placeholder=" Бухгалтер (ФИО) "
                        type="text"
                        name="Buhgalter"
                        required
                    /><br/>
               </label>
               <label> телефон : <br/>
                    <Input
                        id="tel"
                        value= {tel}
                        onChange={e => updateFormData(e)}
                        placeholder=" телефон "
                        type="text"
                        name="tel"
                        required
                    /><br/>
               </label><br/>
           <br/>
           Банковские реквизиты <br/>
           <br/>
               <label> Наименование банка : <br/>
                   <Input
                       id="bankName"
                       value= {bankName}
                       onChange={e => updateFormData(e)}
                       placeholder=" Наименование банка "
                       type="text"
                       name="bankName"
                       required
                   /><br/>
               </label>
               <label> БИК : <br/>
                   <Input
                       id="BIK"
                       value= {BIK}
                       onChange={e => updateFormData(e)}
                       placeholder=" BIK "
                       type="text"
                       name="BIK"
                       required
                   /><br/>
               </label>
               <label> Расчетный счёт : <br/>
                   <Input
                       id="BillOne"
                       value= {BillOne}
                       onChange={e => updateFormData(e)}
                       placeholder=" Расчетный счёт "
                       type="text"
                       name="BillOne"
                       required
                   /><br/>
               </label>
               <label> Корр. счёт : <br/>
                   <Input
                       id="BillTwo"
                       value= {BillTwo}
                       onChange={e => updateFormData(e)}
                       placeholder=" Корр. счёт "
                       type="text"
                       name="BillTwo"
                       required
                   /><br/>
               </label><br/>
           
          <button onClick={handleSubmit}>Submit</button>
          <div>
          </div>
            <div>
                <BeautyText text={formString}/>
            </div>
        </form>
    );
    };

        
    export default FormOne;

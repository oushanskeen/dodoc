   
    import React, {useState} from 'react';
    import {Input} from '../css/style.js';
    import * as actions from '../actions';
    import BeautyText from "./BeautyText";
    import {connect} from 'react-redux';
    import { Link } from 'react-router-dom';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,link
    } from '../css/style.js'

    const FormOneSimp = _props => {
    //    console.log("store visible in FormOne : ", store);
     //   console.log("onDataReady inside form one : ", onDataReady);
    //const [dataSent,setDataSent] = useState({is:"not ok"});
    //const [isOk, setIsOk] = useState("isNotOk")
        

        // _props.action

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
        const updateFormData = event => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value
            });
            //setDataSent("OK");
            //console.log("form data : ", formData);
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
            //onDogovorData({...dogovorData,formData:formData});
            _props.action(formData);
        };
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
                        maxlength="120"
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
                        maxlength="120"
                    /><br/>
               </label>
               <label> ИНН : <br/>
                    <Input
                        id="INN"
                        value= {INN}
                        onChange={e => updateFormData(e)}
                        placeholder=" ИНН "
                        type="number"
                        name="INN"
                        required
                        minlength="10"
                        maxlength="10"
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
                        type="number"
                        name="OGRN"
                        required
                        minlength="13"
                        maxlength="13"
                    /><br/>
               </label>
               <label> ОКПО : <br/>
                    <Input
                        id="OKPO"
                        value= {OKPO}
                        onChange={e => updateFormData(e)}
                        placeholder=" ОКПО "
                        type="number"
                        name="OKPO"
                        required
                        minlength="8"
                        maxlength="8"
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
  
             
        </form>
    );
    };
    /*
    const mapStateToProps = _state => ({
        store: _state,
        dogovorData: _state.dogovorData
        //formOneState: _state.form.formOne
    });
    const mapDispatchToProps = _dispatch => ({
        onDataReady: data => _dispatch(actions.formDataNew(data)),
        onDogovorData: data => _dispatch(actions.dogovorData(data))
    });

    export default connect (
        mapStateToProps,
        mapDispatchToProps
    )(FormOne);  
    */
    export default FormOneSimp; 

    

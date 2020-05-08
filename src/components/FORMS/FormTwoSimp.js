   
    import React, {useState} from 'react';
    import {Input} from '../../css/style.js';
    import * as actions from '../../actions';    
    import BeautyText from "../PRINT/BeautyText";
    import {connect} from 'react-redux';
    import { Link } from 'react-router-dom';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,link
    } from '../../css/style.js'

    const FormTwoSimp = _props  => {
        const [formData, setFormData] = useState({
            Name: "",
            FIO: "",
            INN: "",
            OGRNIP:"",
            OKPO:"",
            FactAdress:"",
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
            //console.log("formData : ", formData);
        }
        const 
        { 
            Name, 
            FIO,
            INN,
            OGRNIP,
            OKPO,
            FactAdress,
            bankName,
            BIK,
            BillOne,
            BillTwo
        } = formData;
        const handleSubmit = e => {
            e.preventDefault();
            //onYur(formData);
            //onDataReady(formData);
            //onDogovorData({...dogovorData,formData:formData});
            //console.log("formData after submit: ", formData);
            _props.action(formData);
        };
    //console.log("store in formTwo : ", store)
    return (
        <form>
            <br/>
                <label> Название : <br/>
                    <Input
                        id="Name"
                        value= {Name}
                        onChange={e => updateFormData(e)}
                        placeholder=" Название "
                        type="text"
                        name="Name"
                        required
                    /><br/>
               </label>
               <label> ФИО : <br/>
                    <Input
                        id="FIO"
                        value= {FIO}
                        onChange={e => updateFormData(e)}
                        placeholder=" ФИО "
                        type="text"
                        name="FIO"
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
               <label> ОГРНИП : <br/>
                    <Input
                        id="OGRNIP"
                        value= {OGRNIP}
                        onChange={e => updateFormData(e)}
                        placeholder=" ОГРНИП "
                        type="text"
                        name="OGRNIP"
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
    //yurlitzas: _state.home.yurlitzas,
    //dogovorTypes: _state.home.dogovorTypes,
    //dialects: _state.home.varDialects,
    //formData: _state.home.formData
});
const mapDispatchToProps = _dispatch => ({
    //onYur: data => _dispatch(actions.yurlitso(data))
    onDataReady: data =>
        _dispatch(actions.zakazchikTypeTwoData(data)),
    onDogovorData: data => _dispatch(actions.dogovorData(data))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormTwo); 
*/
        
    export default FormTwoSimp;

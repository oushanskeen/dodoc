   
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

    const FormThree = ({store,onDataReady,dogovorData,onDogovorData}) => {
    const Dogovors = () => (
        <button>
            <Link 
                to="/dodoc/montaj"
                style={link}
            >
                CОЗДАТЬ ДОГОВОР
            </Link>
        </button>  
    );
        const [formData, setFormData] = useState({
            NameInformal: "",
            lastName: "",
            firstName: "",
            midName:"",
            docType:"",
            Serial:"",
            number:"",
            whoGave:"",
            whenGave:"",
            codeGave:"",
            addressGave:""
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
            NameInformal, 
            lastName,
            firstName,
            midName,
            docType,
            Serial,
            number,
            whoGave,
            whenGave,
            codeGave,
            addressGave
        } = formData;
        const handleSubmit = e => {
            e.preventDefault();
            //onYur(formData);
            onDogovorData({...dogovorData,formData:formData});
            console.log("formData after submit: ", formData);
        };
    console.log("store in formThree : ", store)
    return (
        <form>
            <br/>
                <label> Название (неформальное) : <br/>
                    <Input
                        id="NameInformal"
                        value= {NameInformal}
                        onChange={e => updateFormData(e)}
                        placeholder=" Название (неформальное) "
                        type="text"
                        name="NameInformal"
                        required
                    /><br/>
               </label>
               <label> Фамилия : <br/>
                    <Input
                        id="lastName"
                        value= {lastName}
                        onChange={e => updateFormData(e)}
                        placeholder=" Фамилия "
                        type="text"
                        name="lastName"
                        required
                    /><br/>
               </label>
               <label> Имя : <br/>
                    <Input
                        id="firstName"
                        value= {firstName}
                        onChange={e => updateFormData(e)}
                        placeholder=" Имя "
                        type="text"
                        name="firstName"
                        required
                    /><br/>
               </label>
               <label> Отчество : <br/>
                    <Input
                        id="midName"
                        value= {midName}
                        onChange={e => updateFormData(e)}
                        placeholder=" Отчество "
                        type="text"
                        name="midName"
                        required
                    /><br/>
               </label>
               <label> Вид документа : <br/>
                    <Input
                        id="docType"
                        value= {docType}
                        onChange={e => updateFormData(e)}
                        placeholder=" Вид документа "
                        type="text"
                        name="docType"
                        required
                    /><br/>
               </label>
               <label> Серия : <br/>
                    <Input
                        id="Serial"
                        value= {Serial}
                        onChange={e => updateFormData(e)}
                        placeholder=" Серия "
                        type="text"
                        name="Serial"
                        required
                    /><br/>
               </label>
               <label> Номер : <br/>
                   <Input
                       id="number"
                       value= {number}
                       onChange={e => updateFormData(e)}
                       placeholder=" Номер "
                       type="text"
                       name="number"
                       required
                   /><br/>
               </label>
               <label> Кем выдан : <br/>
                   <Input
                       id="whoGave"
                       value= {whoGave}
                       onChange={e => updateFormData(e)}
                       placeholder=" Кем выдан "
                       type="text"
                       name="whoGave"
                       required
                   /><br/>
               </label>
               <label> Дата выдачи : <br/>
                   <Input
                       id="whenGave"
                       value= {whenGave}
                       onChange={e => updateFormData(e)}
                       placeholder=" Дата выдачи "
                       type="text"
                       name="whenGave"
                       required
                   /><br/>
               </label>
               <label> Код подразделения : <br/>
                   <Input
                       id="codeGave"
                       value= {codeGave}
                       onChange={e => updateFormData(e)}
                       placeholder=" Код подразделени "
                       type="text"
                       name="codeGave"
                       required
                   /><br/>
               </label>
               <label> Адрес прописки : <br/>
                   <Input
                       id="addressGave"
                       value= {addressGave}
                       onChange={e => updateFormData(e)}
                       placeholder=" Адрес прописки "
                       type="text"
                       name="addressGave"
                       required
                   /><br/>
               </label><br/>
           
          <button onClick={handleSubmit}>Submit</button>
            <Dogovors/>
         
            <div>
                <BeautyText text={JSON.stringify(store)}/>
            </div>
         
        
        </form>
    );
    };

        const mapStateToProps = _state => ({
     store: _state,
     dogovorData: _state.dogovorData
    });
    const mapDispatchToProps = _dispatch => ({
       onDogovorData: data => _dispatch(actions.dogovorData(data))
    });

    export default connect (
        mapStateToProps,
        mapDispatchToProps
    )(FormThree); 

        
    //export default FormThree;

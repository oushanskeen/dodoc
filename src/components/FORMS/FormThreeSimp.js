   
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

    const FormThreeSimp =     
    ({formName,ownerId,agentId,state,
      onOwnerDicCreate,onOwnerDicUpdate,
      onAgentDicCreate,onAgentDicUpdate}) => {
 const actorId = formName => {
            switch(formName){
                case "ownerDic":
                    return ownerId;
                case "agentDic":
                    return agentId;
                default:
                    return "no actor id";
                };
        };
        const importData = (formName, actorId) => ({
          actorData:
            state[formName]
            .filter(e => e.id===actorId)[0],
          actorName: 
             state[formName]
             .map(actor => actor.name),
          initStateForNewActor: 
              state.home.initStateForNewActor("FL")
            });
        const currentImportData = () => (
            importData(
                formName,
                actorId(formName))
                );
        console.log("objDog importData: ", currentImportData);
        const [formData, setFormData] = useState(
           {...(actorId(formName) === undefined 
                ? {...currentImportData().initStateForNewActor} 
                : currentImportData().actorData)
                }     
                );
        const updateFormData = event => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
                });
                };

        const handleSubmit = e => {
            e.preventDefault();
            //ownerId===undefined || agentId===undefined 
            if(formName==="ownerDic"){
                if(ownerId === undefined){ 
                    onOwnerDicCreate(formData)
                    }else{
                    onOwnerDicUpdate(formData)
                    }
                    }
            else{
            if(formName==="agentDic"){
                 if(agentId === undefined){
                    onAgentDicCreate(formData)
                    }else{
                    onAgentDicUpdate(formData)
                    }
                    }
                    }
               
        };

            const Id = 
    () => {
        console.log("formData in formDog: ", formData.id);
        return (typeof formData.id==="number" 
            ? formData.id 
            : state[formName][state[formName].length-1].id+1
            );  
            };
    const Name = 
    () => {
       // console.log("state[formName]:", state[formName]);
        console.log("fprmData: ", formData);
        return (formData.name==="" 
            ? formData.NameInformal
            : state[formName]
              .filter(e => e.name===formData.name)[0].name
        ); 
    };
      const handleSaveCountedData =
      ()=> 
          setFormData({...formData,
            id:Id(),
            name:Name()
        });
    const SaveButton = () => {
        return <button onClick={handleSaveCountedData}>Save</button>    
    };
           
    return (
        <form>
            <br/>
                <label> Название (неформальное) : <br/>
                    <Input
                        id="NameInformal"
                        value= {formData.NameInformal}
                        onChange={e => updateFormData(e)}
                        placeholder=" Название (неформальное) "
                        type="text"
                        name="NameInformal"
                        required
                        />
                        <br/>
                        </label>
               <label> Фамилия : <br/>
                    <Input
                        id="lastName"
                        value= {formData.lastName}
                        onChange={e => updateFormData(e)}
                        placeholder=" Фамилия "
                        type="text"
                        name="lastName"
                        required
                        />
                        <br/>
                        </label>
               <label> Имя : <br/>
                    <Input
                        id="firstName"
                        value= {formData.firstName}
                        onChange={e => updateFormData(e)}
                        placeholder=" Имя "
                        type="text"
                        name="firstName"
                        required
                        />
                        <br/>
                        </label>
               <label> Отчество : <br/>
                    <Input
                        id="midName"
                        value= {formData.midName}
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
                        value= {formData.docType}
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
                        value= {formData.Serial}
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
                       value= {formData.number}
                       onChange={e => updateFormData(e)}
                       placeholder=" Номер "
                       type="text"
                       name="number"
                       required
                       />
                       <br/>
               </label>
               <label> Кем выдан : <br/>
                   <Input
                       id="whoGave"
                       value= {formData.whoGave}
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
                       value= {formData.whenGave}
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
                       value= {formData.codeGave}
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
                       value= {formData.addressGave}
                       onChange={e => updateFormData(e)}
                       placeholder=" Адрес прописки "
                       type="text"
                       name="addressGave"
                       required
                   /><br/>
               </label><br/>
           
          <button onClick={handleSubmit}>Submit</button>
        <SaveButton/>
           
        </form>
    );
    };

    const mapStateToProps = _state => ({
     store: _state,
     state: _state,
     dogovorData: _state.dogovorData
    });
    const mapDispatchToProps = _dispatch => ({
        onOwnerDicCreate: 
            data => _dispatch(actions.ownerDicCreate(data)),
        onOwnerDicUpdate: 
            data => _dispatch(actions.ownerDicUpdate(data)),
        onAgentDicCreate: 
            data => _dispatch(actions.agentDicCreate(data)),
        onAgentDicUpdate: 
            data => _dispatch(actions.agentDicUpdate(data))
    });

    export default connect (
        mapStateToProps,
        mapDispatchToProps
    )(FormThreeSimp); 

        

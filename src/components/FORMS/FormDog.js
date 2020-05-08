   
  // FormDog.js
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

  const FormDog = _props => {
    //const {store} = _props;
    const [formData, setFormData] = useState({
      objName: "",
      dogType: "",
      systems:"",
      dogName: "",
      zakazchikName: "",
      postavshikName:"",
      date:"",
      bank:"",
      price:"",
      status:"",
      paid:"",
      reponsible:"",
      textLink:"",
      comment:"",
    });
    const updateFormData = event => {
      console.log("updateFormData :", formData);
      console.log("event.target.name :", event.target.name);
      console.log("event.target.value :", event.target.value);
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };

    const 
      { 
        objName,
        dogType,
        systems,
        dogName,
        zakazchikName,
        postavshikName,
        date,
        bank,
        price,
        status,
        paid,
        reponsible,
        textLink,
        comment,
      } = formData;
      const handleSubmit = e => {
        e.preventDefault();
        _props.action(formData);
      };
   const systemsDataVector = [
      "Вентиляция и кондиционирование",
      "Отопление",
      "Котельная",
      "Водоснабжение и канализация",
      "ЭОМ",
      "Слаботочные сети",
      " Автоматизация"
    ];
    const owners =  _props.store.ownerDic.dics.map(e => e.name);
    const agents =  _props.store.agentDic.dics.map(e => e.name);
    const objects =  _props.store.objDic.dics.map(e => e.name);
    const dogTypes = ["YL","IP","FL"];
    const Today = () => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date;
    };


  
    return (
      <form>
        <br/>
          <label> objName : 
            <select
              id="objName"
              value= {objName}
              onChange={e => updateFormData(e)}
              placeholder=" objName "
              type="text"
              name="objName"
              required
              maxlength="120"
            ><br/>
            <option>------------</option>
	        {objects.map(e => 
	         <option value={e}>{e}</option>)}
	        </select><br/>
          </label>
          <label> dogType : 
            <select
              id="dogType"
              value= {dogType}
              onChange={e => updateFormData(e)}
              placeholder=" dogType "
              type="text"
              name="dogType"
              required
              maxlength="120"
            ><br/>
            <option>------------</option>
	        {dogTypes.map(e => 
	         <option value={e}>{e}</option>)}
	        </select><br/>
          </label>


         <label> zakazchikName :
           <select
             id="zakazchikName"
             value= {zakazchikName}
             onChange={e => updateFormData(e)}
             placeholder=" zakazchikName "
             type="number"
             name="zakazchikName"
             required
             minlength="10"
             maxlength="10"
           >
           <option>------------</option>
           {agents.map(e => <option value={e}>{e}</option>)}
           </select><br/>
         </label>

         <label> postavshikName :
           <select
             id="postavshikName"
             value= {postavshikName}
             onChange={e => updateFormData(e)}
             placeholder=" postavshikName"
             type="number"
             name="postavshikName"
             required
             minlength="10"
             maxlength="10"
           >
           <option>------------</option>
           {owners.map(e => <option value={e}>{e}</option>)}
           </select><br/>
         </label>
        
                          <label> dogName: 
           <span>generative<br/></span>
         </label>

        
        <label> systems :
            {systemsDataVector.map(e => 
                (<div>                    
                    <input
                        value={systems.concat(", " + e)}
                        name="systems"
                        type="checkbox"
                        onChange={e => updateFormData(e)}
                    /><label>{e}</label>
                </div>)
             )}<br/> 
        </label>



         <label> date : <br/>
           <Input
             id="date"
             value= {date}
             onChange={e => updateFormData(e)}
             placeholder={Today()}
             type="number"
             name="date"
             required
             minlength="13"
             maxlength="13"
           /><br/>
         </label>

         <label> bank : <br/>
           <Input
             id="bank"
             value= {bank}
             onChange={e => updateFormData(e)}
             placeholder=" bank "
             type="number"
             name="bank"
             required
             minlength="8"
             maxlength="8"
           /><br/>
         </label>

         <label> price : <br/>
           <Input
             id="price"
             value= {price}
             onChange={e => updateFormData(e)}
             placeholder=" price "
             type="text"
             name="price"
             required
           /><br/>
         </label>

         <label> status : <br/>
           <Input
             id="status"
             value= {status}
             onChange={e => updateFormData(e)}
             placeholder=" 0 "
             type="text"
             name="status"
             required
           /><br/>
         </label>

         <label> paid : <br/>
           <Input
             id="paid"
             value= {paid}
             onChange={e => updateFormData(e)}
             placeholder=" 0 "
             type="text"
             name="paid"
             required
           /><br/>
         </label>

         <label> reponsible : <br/>
           <Input
             id="reponsible"
             value= {reponsible}
             onChange={e => updateFormData(e)}
             placeholder=" whoever "
             type="text"
             name="reponsible"
             required
           /><br/>
         </label>

         <label> text link : <br/>
           <Input
             id="textLink"
             value= {textLink}
             onChange={e => updateFormData(e)}
             placeholder=" textLink "
             type="text"
             name="textLink"
             required
           /><br/>
         </label>

         <label> comment : <br/>
           <Input
             id="comment"
             value= {comment}
             onChange={e => updateFormData(e)}
             placeholder=" comment "
             type="text"
             name="comment"
             required
           /><br/>
         </label><br/>

         <br/>
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
  export default FormDog; 

    

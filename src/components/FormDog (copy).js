   
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

  const FormDog = _props => {
    const [formData, setFormData] = useState({
      objName: "",
      dogName: "",
      zakazchikName: "",
      postavshikName:"",
      date:"",
      bank:"",
      price:"",
      status:"",
      paid:"",
      reponsible:"",
      pdfScan:"",
      comment:"",
    });
    const updateFormData = event => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
    const 
      { 
        objName,
        dogName,
        zakazchikName,
        postavshikName,
        date,
        bank,
        price,
        status,
        paid,
        reponsible,
        pdfScan,
        comment,
      } = formData;
      const handleSubmit = e => {
        e.preventDefault();
        _props.action(formData);
      };
    return (
      <form>
        <br/>
          <label> objName : <br/>
            <Input
              id="objName"
              value= {objName}
              onChange={e => updateFormData(e)}
              placeholder=" objName "
              type="text"
              name="objName"
              required
              maxlength="120"
            /><br/>
          </label>
          <label> dogName : <br/>
            <Input
             id="dogName"
             value= {dogName}
             onChange={e => updateFormData(e)}
             placeholder=" dogName "
             type="text"
             name="dogName"
             required
             maxlength="120"
           /><br/>
         </label>
         <label> zakazchikName <br/>
           <Input
             id="zakazchikName"
             value= {zakazchikName}
             onChange={e => updateFormData(e)}
             placeholder=" zakazchikName "
             type="number"
             name="zakazchikName"
             required
             minlength="10"
             maxlength="10"
           /><br/>
         </label>
         <label> postavshikName <br/>
           <Input
             id="postavshikName"
             value= {postavshikName}
             onChange={e => updateFormData(e)}
             placeholder=" postavshikName "
             type="text"
             name="postavshikName"
             required
           /><br/>
         </label>
         <label> date : <br/>
           <Input
             id="date"
             value= {date}
             onChange={e => updateFormData(e)}
             placeholder=" date "
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
             placeholder=" status "
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
             placeholder=" paid "
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
             placeholder=" reponsible "
             type="text"
             name="reponsible"
             required
           /><br/>
         </label>
         <label> pdfScan : <br/>
           <Input
             id="pdfScan"
             value= {pdfScan}
             onChange={e => updateFormData(e)}
             placeholder=" pdfScan "
             type="text"
             name="pdfScan"
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

    

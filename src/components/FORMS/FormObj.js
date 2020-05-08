   
  // FormObj.js
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

  const FormObj = _props => {
    const [formData, setFormData] = useState({
      name: "",
      adress: "",
      contacts: "",
      workRegime:""
    });
    const updateFormData = event => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
    const 
      { name,
        adress,
        contacts,
        workRegime,
      } = formData;
    const handleSubmit = e => {
      e.preventDefault();
      _props.action(formData);
    };
    return (
      <form>
        <br/>
          <label> name <br/>
            <Input
              id="name"
              value= {name}
              onChange={e => updateFormData(e)}
              placeholder=" name"
              type="text"
              name="name"
              required
              maxlength="120"
            /><br/>
          </label>
          <label> adress: <br/>
            <Input
              id="adress"
              value= {adress}
              onChange={e => updateFormData(e)}
              placeholder=" adress "
              type="text"
              name="adress"
              required
              maxlength="120"
            /><br/>
          </label>
	 <label> Contact: <br/>
            <Input
              id="contacts"
              value= {contacts}
              onChange={e => updateFormData(e)}
              placeholder=" FIO role ?contacts "
              type="text"
              name="contacts"
              required
              maxlength="120"
            /><br/>
          </label>

          <label> workRegime : <br/>
            <Input
              id="workRegime"
              value= {workRegime}
              onChange={e => updateFormData(e)}
              placeholder=" workRegime "
              type="number"
              name="workRegime"
              required
              minlength="8"
              maxlength="8"
            /><br/>
          </label>
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
  export default FormObj; 

import React, {useState, useEffect} from 'react';
import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Input,Button,link,naked,Selectable,ghost
} from '../css/style.js';
import * as actions from '../actions';
import {connect} from 'react-redux';
import { useForm } from "react-hook-form";

function Shit() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="name">Name</label>
      <input type="text" id="name" ref={register({ required: true, maxLength: 30 })} />
      <input type="submit" />
    </form>
  );
}
//{errors.name && errors.name.type === 'required' && <span>This is required</span>}
  //    {errors.name && errors.name.type === 'maxLength' && <span>Max length exceeded</span> }

/*
const makeEditable = (_content,_setState,_editable) => {
    return (
        <b
            contentEditable={_editable}
            onInput={e => _setState(e.currentTarget.textContent)}
        >
         {_content}
        </b>
   );
};
*/
    /*
    const doState = _initialValue => {
      var val = _initialValue 
      const state = () => val; 
      const setState = newVal => val = newVal
      return [state, setState] 
    };
    var [foo, doFoo] = doState(0);
    console.log(foo());
    doFoo(1);
    console.log(foo());
    const doGen = _name => {
        let namer = _name;
        let setter =  ("" + _name);
        return [namer,setter] = doState("who knows")
    };
    doGen("han");
    console.log("doGen makes : ", han());
    */
        
    
    

//yurlitzas.map(e => (<div>{" | "}{e}{" | "}</div>))}<br/>
const Home = ({store,home,yurlitzas,dogovorTypes,dialects,onYur}) => { 

    const [yurlitso,setYurlitso] = useState("unknown");
    const [dogType,setDogType] = useState("unknown");
    const [outerdata,setOuterdata] = useState("formDataDefault");

    let vars = ["one","two","three","four"];

    // ["a"] => editable "a" + [a,doA]
    const [variables,setVariables] = useState("someValues");    
    const Editable = _props => (
            <b contentEditable="true" >
                {_props.data}{"  "}
            </b>
    );   
    const [local,setLocal] = useState(vars);
    //console.log("local : ", local);
    const EdList = () => {
        //const [local,setLocal] = useState(vars);
        //console.log("local : ", local);
        const handleChange = e => {
            setLocal(e.currentTarget.textContent);
            console.log("local : ", local);
        };
        return (
            <div 
                //onInput={e => setLocal(e.currentTarget.textContent)}
                onChange={handleChange}
            >
                {vars.map( e => <Editable data={e}/>)}
            </div>
        );
    };

    
    const Form = () => {
        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        });
        const updateFormData = event => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value
            });
            //console.log("formData : ", formData);
        }
        const { firstName, lastName, email, password } = formData;
        const handleSubmit = e => {
            e.preventDefault();
            //onYur(formData);
            //setOuterdata(formData);
            console.log("formData after submit: ", formData);
            console.log("outer data : ", outerdata)       
            //return ;
        };
    const Input = _props => (
        <label> {_props.value} : <br/>
                <input
                    value={_props.value}
                    onChange={e => updateFormData(e)}
                    placeholder={_props.value}
                    type="text"
                    name={_props.value}
                    required
                /><br/>
        </label>
    );
    return (
        <form>
            <Input value={"some name"}/>
            <label> first name : <br/>
                <input
                    value={firstName}
                    onChange={e => updateFormData(e)}
                    placeholder="first name"
                    type="text"
                    name="firstName"
                    required
                />
            </label><br/>
              <input
            value={lastName}
            onChange={e => updateFormData(e)}
            placeholder="Last name"
            type="text"
            name="lastName"
            required
          />
          <input
            value={email}
            onChange={e => updateFormData(e)}
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
          <input
            value={password}
            onChange={e => updateFormData(e)}
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
    );
};

        
    const Elem = _props => {
        const handleClick = () => {
            console.log("data : ", _props.data);
            _props.set(_props.data);
        };
        return (<b onClick={handleClick}>{_props.data}{" | "}</b>
    )};
    const YurTab = () => (
        <Text m={"2vmin"}>
            <div id="yurfacesPanel">
                ЮРЛИЦО: <b>{yurlitso}</b> <br/>
                {yurlitzas.map(e => <Elem data={e} set={setYurlitso}/>)}<br/>  
            </div>
        </Text>
    ); 
    const DogTab = () => (
        <Text m={"2vmin"}>
            <div id="contractTypesPanel">
                ТИП ДОГОВОРА: <b>{dogType}</b> <br/>
                {dogovorTypes.map(e => <Elem data={e} set={setDogType}/>)}<br/>  
            </div>
        </Text>
    );
    const DialTab = () => {
        //console.log("dialects : ", dialects);
        let current = () => { 
            return ((dogType == "проектирование") ? [...dialects.make] :
                (dogType == "поставка") ? [...dialects.sell] :
                dialects.basic
            );
        };
        //console.log("current : ", current());
        return (
            <Text m={"2vmin"}>
                <div id="varsPanel">
                    НАБОР ПЕРЕМЕННЫХ: <b>{dogType}</b> <br/>
                    {current().map(e => <b>{e}{" | "}</b>)}
                </div>
            </Text>
    )};
    const PrimInput = () => (
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
    ); 

    /*
    const Edtbl = () => {
    const [a,setA] = useState("unknown");
    return(
        <span
            contentEditable="true"
            onInput={e => setA(e.currentTarget.textContent)}
        >
        {a}
        </span>
    )};
    */

      const [extravar,setExtravar] = useState("default");
      const NameForm = _props => {
          const [form, setForm] = useState('default');
          const handleChange = event => setForm({value: event.target.value});
          const handleSubmit = event => {
            console.log('A name was submitted: ' + form.value);
            event.preventDefault();
            //onYur(form.value);
            setExtravar(form.value);
            console.log("extraVar : ", extravar);
          }
            return (
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={form.value} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            );
          }
    /*
        const editableText = _vars => {
           _vars.map(e => <Edtbl data={e}/>)
        };
  
    */
    

  return (
    <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                <AreaBox g={[2,2,5,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                            <YurTab/>
                            <DogTab/>
                            <DialTab/>
                        </Text>
                    </TextBox>
                </AreaBox>
                <AreaBox g={[5,2,10,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Form/><br/>
                        {/*<Text m={"2vmin"} id="dogovorText">
                           <b> {currentVars[0]} </b>, 
                           именуемое в дальнейшем «Поставщик», в лице 
                           <b> {currentVars[1]} </b>, 
                           действующего на основании Устава, с одной стороны,
                           <b> {currentVars[2]} </b>, в лице
                           генерального директора <b> {currentVars[3]} </b>
                           именуемое в дальнейшем «Покупатель»,                         
                        </Text>*/}
                    </TextBox>
                </AreaBox>
            </Grid>
        </Container>    
    </div>
  );
}

//const mapStateToProps = state => ({
//    store: state.home
//},console.log("mapState state : ", state));
const mapStateToProps = _state => ({
    store: _state,
    home: _state.home,
    yurlitzas: _state.home.yurlitzas,
    dogovorTypes: _state.home.dogovorTypes,
    dialects: _state.home.varDialects
});
const mapDispatchToProps = _dispatch => ({
    onYur: data => _dispatch(actions.yurlitso(data))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Home);

//export default Home;


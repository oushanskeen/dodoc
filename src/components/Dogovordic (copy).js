 
  // Dogovordix.js
  import React, {useState,useEffect} from 'react';
  import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,ParamBox,naked,
    NavbarDropdown,NavbarDropdownContent,link
  } from '../css/style.js';
  import FormDog from "./FormDog";
  import {connect} from 'react-redux';
  import * as actions from '../actions';

  const Selector = props => {
    const [newdic,setNewdic] = useState(false);
    return(
      <div>
        <button 
	  onClick={()=>setNewdic(!newdic)}>добавить договор
	</button>
        {newdic===false ? "" : <FormDog action={props.action}/>}
      </div>
    );
  };
  const Pselector = props => {
    const [select,setSelect] = useState("");
    const [newdic,setNewdic] = useState(false);
    const [hub,setHub] = useState({});
    const updateHub = event => {
      const target = event.target;      
      const value = target.value === "on" 
        ? target.checked : !target.checked;
      const name = target.name;
      setHub({...hub,[name]: value});
    };
    const [formData, setFormData] = useState({
      owner:"",
      agent:"",
      object:"",
      dogType:"",
      systems:"",
      price:""
    });
    const updateFormData = event => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
    const 
      { 
        owner,
        agent,
        object,
        dogTYpe,
        systems,
        price,
      } = formData;
    const handleSubmit = e => {
      e.preventDefault();
      //_props.action(formData);
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
   const SystemSelector = () => (
     <div>
       {systemsDataVector.map(e => 
         ( <div>                    
             <input
               checked={hub[`${e}`]}
                 name={`${e}`}
                 type="checkbox"
                 onChange={e =>updateHub(e)}
               /><label>{`${e}`}</label>
           </div>)
       )}          
     </div>
   );
    const owners =  props.content.ownerDic.dics.map(e => e.name);
    const agents =  props.content.agentDic.dics.map(e => e.name);
    const objects =  props.content.objDic.dics.map(e => e.name);
    const dogTypes = ["YL","IP","FL"];
    const MenuItem = props => (
      <label> {props.name}: <br/>
	<select
	    
              onChange={e => updateFormData(e)}
	    >
	  {props.value.map(e => (
            <option value={e}>{e}</option>
	  ))}
	</select><br/>
      </label>
    );
    return(
      <form><br/>
        <MenuItem name={"наша фирма"} value={owners}/>
	<MenuItem name={"контрагент"} value={agents}/>
	<MenuItem name={"объект"} value={objects}/>
	<MenuItem name={"тип договора"} value={dogTypes}/>
        <SystemSelector/>
          <label> price <br/>
            <input
              id="price"
              value= {price}
              onChange={e => updateFormData(e)}
              placeholder="price"
              type="text"
              name="price"
              required
              maxlength="120"
            /><br/>
          </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
   );

  const extractor = _name => props.content[_name].dics.map(e => e.name);
  const input = {
    value1:"name1", 
    value2:"name2", 
    value3:"name3",
    value4:"name4"
  };
    return(
      <div>
       <button onClick={()=>setNewdic(!newdic)}> 
         добавить что-то 
       </button>
       <select  onChange={e => setSelect(e.target.value)}>
         <option value="-">-------</option>
         { Object
	     .entries(input)
		 .map(e => <option value={e[0]}>{e[1]}</option>)
	 }
	    </select>
     </div>
   );
 };
  const Article = _props => {
    const [fold,setFold] = useState(false);
    const buttonHandler = () => setFold(!fold);
    return (
      <div>
        <div>{_props.name}{" "}
          <button 
	    onClick={buttonHandler}>
	      {fold === false ? "open" : "close"}
	  </button>            
        </div>
        {fold === false ? "" : <div>{_props.content}</div>}
        <br/>
      </div>        
    );
  };
  const Exhisting = props => (
    <div>
      {/*props.content.dics.map(e => 
        <Article 
          key={e.id} 
          name={e.name}
          content={
	    Object.entries(e.data)
	    .map(e => <div>{e[0]} : {e[1]}</div>)
          } 
        />)
      */}   
    </div>
  );
  const Dogovordic = (
    { majorStore, 
      store, 
      onDogDicSelection, 
      onDogDicCreation
    }) => (
    <div>
      <GlobalStyle/>
      <Container>
        <Grid>
          <AreaBox g={[2,2,10,5]} fd="row"> 
            <TextBox w={"80%"}>
              <Text>
                <div>СПРАВОЧНИК НАШИХ ДОГОВОРОВ:</div><br/>
                 <Exhisting content={store}/>
                 <Selector 
	           content={majorStore} 
	           action={onDogDicCreation}
	         />
	    { <Pselector content={majorStore}/>}
              </Text>
            </TextBox>             
          </AreaBox>
        </Grid>
      </Container>
    </div>
  );

  const mapStateToProps = _state => ({
    store: _state.dogDic,
    majorStore: _state
  });
  const mapDispatchToProps = _dispatch => ({
    onDogDicSelection: data => _dispatch(actions.dogDicSelect(data)),
    onDogDicCreation: data => _dispatch(actions.dogDicCreate(data))
  });

  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Dogovordic);

  //export default Ownerdic;


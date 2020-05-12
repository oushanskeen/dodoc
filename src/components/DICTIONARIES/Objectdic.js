  
  // Objectdic.js
  import React, {useState,useEffect} from 'react';
  import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,ParamBox,naked,
    NavbarDropdown,NavbarDropdownContent,link
  } from '../../css/style.js';
  import FormObj from "../FORMS/FormObj";
  import {connect} from 'react-redux';
  import * as actions from '../../actions';

  const Selector = props => {
    const pool = props.content.home.dogTypes;
    const formSet = <FormObj action={props.action}/>
    const [select,setSelect] = useState("");
    //console.log("select:", select);
    const [newdic,setNewdic] = useState(false);
    return(
      <div>
       <button 
         onClick={()=>setNewdic(!newdic)}
       >
         добавить объект
       </button>
         {newdic===false ? "" : formSet}
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
            onClick={buttonHandler}
	  >
		        {fold === false ? "open" : "close"}
		    </button>            
                </div>
                {fold === false ? "" : <div>{_props.content}</div>}
                <br/>
            </div>        
        );
    }
    const Objectdic =( 
      { majorStore, 
        store,
        onObjDicSelection,
        onObjDicCreation}) => (
          <div>
          <GlobalStyle/>
            <Container>
              <Grid>
                <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
                  <TextBox w={"80%"}>
                    <Text>
                      <div>СПРАВОЧНИК НАШИХ ОБЪЕКТОВ:</div><br/>
                      {store.objDic.map(object => 
                        <Article 
                          key={object.id} 
                          name={object.name}
                          content={Object.entries(object)
	                        .map(record => <div>{record[0]} : {record[1]}</div>)} 
                        />)} 
                      <Selector 
		                content={majorStore} 
		                action={onObjDicCreation}/>
                    </Text>
                  </TextBox>             
                </AreaBox>
              </Grid>
            </Container>
          </div>
        );

  const mapStateToProps = _state => ({
    store: _state,
    majorStore: _state
  });
  const mapDispatchToProps = _dispatch => ({
    onObjDicSelection: data => _dispatch(actions.objDicSelect(data)),
    onObjDicCreation: data => _dispatch(actions.objDicCreate(data))
  });

  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Objectdic);

  //export default Ownerdic;


 
  // Dogovordics.js
  import React, {useState,useEffect} from 'react';
  import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,ParamBox,naked,
    NavbarDropdown,NavbarDropdownContent,link
  } from '../css/style.js';
  import FormDog from "./FormDog";
  import {connect} from 'react-redux';
  import * as actions from '../actions';

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
  const Selector = props => {
    const [newdic,setNewdic] = useState(false);
    return(
      <div>
        <button 
	        onClick={()=>setNewdic(!newdic)}>добавить договор
	    </button>
        {newdic===false ? "" : <FormDog action={props.action} store={props.content}/>}
      </div>
    );
  };
  
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
          <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
            <TextBox w={"80%"}>
              <Text>
                <div>СПРАВОЧНИК НАШИХ ДОГОВОРОВ:</div><br/>
                 {/*<Exhisting content={store}/>*/}
                 {store.dics.map(e => 
                        <Article 
                          key={e.id} 
                          name={e.name}
                          content={Object.entries(e.data)
	                        .map(e => <div>{e[0]} : {e[1]}</div>)} 
                        />)} 
                 <Selector 
	                content={majorStore} 
	                action={onDogDicCreation}
	             />

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


 
  // Dogovordics.js
  import React, {useState,useEffect} from 'react';
  import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,ParamBox,naked,Input,
    NavbarDropdown,NavbarDropdownContent,link
  } from '../../css/style.js';
  import FormDog from "../FORMS/FormDog";
  import {connect} from 'react-redux';
  import * as actions from '../../actions';
  import { Link,useParams } from 'react-router-dom';

  //  


  const FoldButton = ({setValue,value,name}) => (
    <button onClick={() => setValue(!value)}>
      {value === false ? name[0] : name[1]}
    </button> 
  );
  const ShowButton = ({goto}) => (
    <button>
      <Link to={goto} style={link}>
        show
      </Link>
    </button>
  );
  const BipolarButton = ({setValue,value,name}) => (
    <button onClick={()=>setValue(!value)}>
      {name}
    </button>
  );
  const Article = ({store,id,rawData,name,createDogovor,updateDogovor}) => {
    console.log("id in article : ", id);
    const [fold,setFold] = useState(false);
    const [edit,setEdit] = useState(false);
    const [editable,setEditable] = useState(false);
    return (
      <div>
        <div>{name}{" "}
          <FoldButton setValue={setFold} value={fold} name={["open","close"]}/>
          <ShowButton goto={`/dodoc/dogdic/${id}`}/>
          <BipolarButton setValue={setEditable} value={editable} name={"edit"}/>
        </div>
            {fold === false ? "" : 
              <div>
              
                    {editable===true 
                      ? <FormDog
                          action={updateDogovor}
                          store={store}
                          dogovorId={id}/>
                      : Object.entries(rawData)
                           .map(e => <div> {e[0]} : {e[1]} </div>)
                    }
            </div>}<br/>
      </div>        
    );
  };


  const Selector = ({content,createDogovor}) => {
    console.log("onDogDicCreation in selector: ", createDogovor);
    const [newdic,setNewdic] = useState(false);
    return(
      <div>
        <button 
	        onClick={()=>setNewdic(!newdic)}>добавить договор
	    </button>
        {newdic===false ? "" : <FormDog store={content} action={createDogovor}/>}
      </div>
    );
  };
  
  const Dogovordic = (
    { majorStore, 
      store, 
      onDogDicSelection, 
      onDogDicCreation,
      onDogDicUpdate
    }) => (
    <div>
      <GlobalStyle/>
      <Container>
        <Grid>
          <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
            <TextBox w={"80%"}>
              <Text>
                <div>СПРАВОЧНИК НАШИХ ДОГОВОРОВ:</div><br/>
                 {store.dogDic.map(dogovor => 
                        <Article
                          createDogovor={onDogDicCreation}
                          updateDogovor={onDogDicUpdate} 
                          
                          key={dogovor.id} 
                          id={dogovor.id}
                          name={dogovor.name}
                          rawData={dogovor}
                          store={majorStore}
                          content={Object.entries(dogovor)
                          
	                        .map(record => <div>{record[0]} : {record[1]}</div>)} 
                        />)} 
                 <Selector 
	                content={majorStore} 
	                createDogovor={onDogDicCreation}
	             />

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
    onDogDicSelection: data => _dispatch(actions.dogDicSelect(data)),
    onDogDicCreation: data => _dispatch(actions.dogDicCreate(data)),
    onDogDicUpdate: data => _dispatch(actions.dogDicUpdate(data))
  });

  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Dogovordic);

  //export default Ownerdic;


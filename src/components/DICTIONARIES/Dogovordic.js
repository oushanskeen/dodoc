 
  // Dogovordics.js
  import React, {useState,useEffect} from 'react';
  import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,ParamBox,naked,Input,
    NavbarDropdown,NavbarDropdownContent,link
  } from '../../css/style.js';
  import FormDog from "../FORMS/FormDog";
  import Dogovor from "../Dogovor";
  import {ShowHideButton,ListOfItemsDiv,ShowDictionaryArticleData} from "../ELEMENTS/Elements";
  import {connect} from 'react-redux';
  import * as actions from '../../actions';
  import { Link,useParams } from 'react-router-dom';
  import {DictionaryIO} from "../ELEMENTS/Elements";

  const Article = ({state,action,name,content,id}) => (
    <div>
        <ShowHideButton header={name} name={["open","close"]} content={content}/>
        <ShowHideButton header={""} name={["edit","stop"]} content={<FormDog
                          action={action}
                          store={state}
                          dogovorId={id}
                        />}/>
        <ShowHideButton header={""} name={["show","hide"]} content={<Dogovor state={state} id={id}/>}/>          
    </div>
  );
  //const ListOfItemsDiv = (list) => (
  //  Object.entries(list).map(record => <div>{record[0]} : {record[1]}</div>)
  //);
  //const DictionaryArticles = ({dictionary,state,action}) => (
  //  dictionary.map(owner => 
  //    <Article 
  //      state={state}
  //      action={action}
  //      name={owner.name}
  //      content={ListOfItemsDiv(owner)} 
  //      id={owner.id}
  //    />)          
  //);

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

   const Dogovordic = ({state}) => (
        <div>
          <GlobalStyle/>
          <Container>
            <Grid>
              <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
                <TextBox w={"80%"}>
                  <Text>
                    <div>СПРАВОЧНИК НАШИХ ФИРМ:</div><br/>
                    <DictionaryIO state={state} dictionaryName={"dogDic"}/>
                  </Text>
                </TextBox>             
              </AreaBox>
            </Grid>
          </Container>
        </div>
    );
  /*
  const Dogovordic = (
    { majorStore, 
      state, 
      dogDic,
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
                  <ShowDictionaryArticleData dictionary={dogDic}/>
                 {/*store.dogDic.map(dogovor => 
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
                        />)}*/ 
                /*{ <Selector 
	                content={majorStore} 
	                createDogovor={onDogDicCreation}
	             />}*/
/*
              </Text>
            </TextBox>             
          </AreaBox>
        </Grid>
      </Container>
    </div>
  );
  */
  const mapStateToProps = _state => ({
    state: _state,
    majorStore: _state,
    dogDic: _state.dogDic
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


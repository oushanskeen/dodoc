  
  // Objectdic.js
  import React, {useState,useEffect} from 'react';
  import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,ParamBox,naked,
    NavbarDropdown,NavbarDropdownContent,link
  } from '../../css/style.js';
  import {DictionaryIO} from "../ELEMENTS/Elements";
  import FormObj from "../FORMS/FormObj";
  import {connect} from 'react-redux';
  import * as actions from '../../actions';

    const Objectdic = ({state}) => (
        <div>
          <GlobalStyle/>
          <Container>
            <Grid>
              <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
                <TextBox w={"80%"}>
                  <Text>
                    <div>СПРАВОЧНИК НАШИХ ОБЪЕКТОВ:</div><br/>
                    <DictionaryIO 
                        state={state} 
                        dictionaryName={"objDic"}
                        buttons={["details","edit","delete"]}
                        />
                  </Text>
                </TextBox>             
              </AreaBox>
            </Grid>
          </Container>
        </div>
    );
    
  const mapStateToProps = _state => ({
    state: _state
  });
  const mapDispatchToProps = _dispatch => ({
    //onObjDicSelection: data => _dispatch(actions.objDicSelect(data)),
    //onObjDicCreation: data => _dispatch(actions.objDicCreate(data))
  });

  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Objectdic);


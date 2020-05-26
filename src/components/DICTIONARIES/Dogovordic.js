 
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

   const Dogovordic = ({state}) => (
        <div>
          <GlobalStyle/>
          <Container>
            <Grid>
              <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
                <TextBox w={"80%"}>
                  <Text>
                    <div>СПРАВОЧНИК НАШИХ ДОГОВОРОВ:</div><br/>
                    <DictionaryIO 
                        state={state} 
                        dictionaryName={"dogDic"}
                        buttons={["details","edit","delete","show"]}
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
  const mapDispatchToProps = _dispatch => ({});

  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Dogovordic);


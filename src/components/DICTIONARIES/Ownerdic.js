   
  import React, {useState,useEffect} from 'react';
  import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,ParamBox,naked,
    NavbarDropdown,NavbarDropdownContent,link
  } from '../../css/style.js';
  import {DictionaryIO} from "../ELEMENTS/Elements";
  import {connect} from 'react-redux';
  import * as actions from '../../actions';

  const Ownerdic = ({state}) => (
    <div>
      <GlobalStyle/>
      <Container>
        <Grid>
          <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
            <TextBox w={"80%"}>
              <Text>
                <div>СПРАВОЧНИК НАШИХ ФИРМ:</div><br/>
                <DictionaryIO state={state} dictionaryName={"ownerDic"}/>
              </Text>
            </TextBox>             
          </AreaBox>
        </Grid>
      </Container>
    </div>
  );

  const mapStateToProps = _state => ({ state: _state });
  const mapDispatchToProps = _dispatch => ({ });
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Ownerdic);
  
  //export default Ownerdic;


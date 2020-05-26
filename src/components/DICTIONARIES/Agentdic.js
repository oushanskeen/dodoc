   
    import React, {useState,useEffect} from 'react';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,
        NavbarDropdown,NavbarDropdownContent,link
    } from '../../css/style.js';
    import FormOneSimp from "../FORMS/FormOneSimp";
    import FormTwoSimp from "../FORMS/FormTwoSimp";
    import FormThreeSimp from "../FORMS/FormThreeSimp";
    import {DictionaryIO} from "../ELEMENTS/Elements";
    import { Link } from 'react-router-dom';
    import {connect} from 'react-redux';
    import * as actions from '../../actions';
    
    const Agentdic = ({state}) => (
        <div>
          <GlobalStyle/>
          <Container>
            <Grid>
              <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
                <TextBox w={"80%"}>
                  <Text>
                    <div>СПРАВОЧНИК НАШИХ КОНТРАГЕНТОВ:</div><br/>
                    <DictionaryIO 
                        state={state} 
                        dictionaryName={"agentDic"}
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
        onAgentDicSelection: data => _dispatch(actions.agentDicSelect(data)),
        onAgentDicCreation: data => _dispatch(actions.agentDicCreate(data))
    });

    export default connect (
        mapStateToProps,
        mapDispatchToProps
    )(Agentdic);

    //export default Ownerdic;


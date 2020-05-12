   
    import React, {useState,useEffect} from 'react';
    import { Link,useParams } from 'react-router-dom';
    import {connect} from 'react-redux';
    import assert from '../utils/assert';
    import {
      GlobalStyle,Container,Grid,AreaBox,Text,
      TextBox,Button,ParamBox,naked,
      NavbarDropdown,NavbarDropdownContent,link
    } from '../css/style.js';
    const makeDogovorHeadIO = require
      ('../NOTEBOOK/Doghead/makeDogovorHeadIO');
    //const dogfoot = require('../NOTEBOOK/Dogfoot/footOut');
    const dicData = (_state,_dicName,_id) => _state[_dicName].dics.filter(e => e.id===_id)[0].data

    const Dogovor = ({state,store}) => {
//    console.log("state in dogovor: ", state);
      let {dogovor} = useParams();
//  Get proper dogovor data
    //const dicData = (_dicName, _id) => 
    
    console.log("makeDogovorHeadIO:", makeDogovorHeadIO(state,dogovor));

      return(
        <div onLoad={console.log(`dogovorId: ${dogovor}`)}>
        <GlobalStyle/>
        <Container>
          <Grid>
            <AreaBox g={[2,2,11,5]} fd="column" style={naked}>
              <TextBox h={"100%"} w={"auto%"}>
                <Text m={"2vmin"}>
                  <div>
                   {/*{dogHeadOut}*/}
                  </div>
                  <div>makeDogovorHeadIO<br/>
                    {makeDogovorHeadIO(state,dogovor)}
                  </div>

                  <div><br/>

                  </div>
                </Text>
              </TextBox>
            </AreaBox>
          </Grid>
        </Container>
        </div>
      )
    };


  const mapStateToProps = _state => ({
    state: _state,
    store: _state.dogDic.dics,
    //dic: _state.dogDic.dics,
    //owner: _state.ownerDic,
    //agent: _state.agentDic,
    //home: _state.home,
    //formData: _state.formDataNew,
    //dogovorData: _state.dogovorData
  });
  const mapDispatchToProps = _dispatch => ({
    //onDogovorData: data => _dispatch(actions.dogovorData(data)),
    //onLoad: data => _dispatch(actions.setCurrentDogovor(data))
  });

  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Dogovor);

  //export default Dogovor;


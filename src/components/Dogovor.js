   
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
    //const dicData = (_state,_dicName,_id) => _state[_dicName].dics.filter(e => e.id===_id)[0].data

    const Dogovor = ({state,id}) => {
      let {dogovor} = useParams();
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
                    {makeDogovorHeadIO(state,id)}
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


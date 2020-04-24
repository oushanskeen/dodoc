   
    import React from 'react';
    import MontajBody from "./MontajBody";
    import {connect} from 'react-redux';
    import store from '../store';
    import * as actions from '../actions';
    //import store from '../store';
    import { Link } from 'react-router-dom';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,link
    } from '../css/style.js';
    import HeadFootOut from "./HeadFoot";
    import MontajDefault from "./MontajDefault";

    const divStyle = {width:'75vw',wordWrap:'break-word',fontFamily:'Roboto Mono'};
    const headStyle = {textAlign:'center'};
 
    
    // HEADER COMPOSER -------------------------------------------------
    //const MontajHead = _p => (
    //    <div>{ setDogType(_p.serverType,_p.clientType).head }</div>
    //);
        const MontajHead = () => (

            <HeadFootOut/>

    );  
    // FOOTER ELEMENTS --------------------------------------------------------

    // FOOTER COMPOSER ----------------------------------------------


    // "varOne", "IP", formData -> {header,footer}
 

    //setDogType("varOne","IP",formIPDataSample);
    //${setDogType(clientType,serverType,data).head}
    //console.log(montaj("varOne","IP",formIPDataSample));
    
    // OUTPUT -----------------------------------------
    const Montaj = ({store,dogovorData}) => (
        <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                 <AreaBox g={[3,2,11,5]} fd="row" style={naked}>
                    <ParamBox>
                        <TextBox h={"100%"} w={"80%"}>
                            <Text m={"2vmin"} style={divStyle}>
                                {/*Object.keys(dogovorData.formData).map(e
                                 =>(<div>{dogovorData.formData[e]}</div>))}<br/>*/}
                                {/*JSON.stringify(dogovorData.selectors)*/}<br/>
                                {/*JSON.stringify(dogovorData.formData)*/}<br/>
                                {/*JSON.stringify(store.home)*/}
                                <MontajHead />
                                {/*<MontajFoot/>*/}
                            </Text>
                        </TextBox>
                    </ParamBox>
                </AreaBox>
            </Grid>
        </Container>
        </div>
    );

    const mapStateToProps = _state => ({
        store: _state,
        dogovorData:_state.dogovorData
        //home: _state.home,
        //yurlitzas: _state.home.yurlitzas,
        //dogovorTypes: _state.home.dogovorTypes,
        //formOneData: _state.form.formOne,
        //formTwoData: _state.form.formTwo,
        //formThreeData: _state.form.formThree
    });
    //const mapDispatchToProps = _dispatch => ({
    //    onYur: data => _dispatch(actions.yurlitso(data))
    //});

    export default connect (
        mapStateToProps//,
        //mapDispatchToProps
    )(Montaj);

    //export default Montaj;

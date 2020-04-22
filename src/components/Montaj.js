   
    import React from 'react';
    import MontajBody from "./MontajBody";
    import {connect} from 'react-redux';
    import { Link } from 'react-router-dom';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,link
    } from '../css/style.js';
    import {
        dogSampleData,
        formOrgDataSample,
        formIPDataSample,
        formFLDataSample,
        ServerData} 
        from "./MontajSampleData";
    import {
        dogData,
        ClientOrgData,
        ClientIPData,
        ClientFLData,} 
        from "./MontajAPI";
    import {
        OrgHeader,
        IPHeader,
        FLHeader,
        ClientOrgFooter,
        ClientIPFooter,
        ClientFLFooter,
        setDogType} 
        from "./HeadFoot";

    const divStyle = {width:'75vw',wordWrap:'break-word',fontFamily:'Roboto Mono'};
    const headStyle = {textAlign:'center'};
 
    // HEADER COMPOSER --------------------------------------------------------------------------
    const MontajHead = () => (
        <div >
            <div>{ setDogType("varOne","Org",formOrgDataSample).head }</div>
            <br/>
            <div>{ setDogType("varOne","IP",formIPDataSample).head }</div>
            <br/>
            <div>{ setDogType("varOne","FL",formFLDataSample).head }</div>
            <br/>
            <div>{ setDogType("varTwo","Org",formOrgDataSample).head }</div>
            <br/>
            <div>{ setDogType("varTwo","IP",formIPDataSample).head }</div>
            <br/>
            <div>{ setDogType("varTwo","FL",formFLDataSample).head }</div>
            <br/>
        </div>
    );

    // FOOTER ELEMENTS -------------------------------------------------------------------------

    // FOOTER COMPOSER --------------------------------------------------------------------------
    const MontajFoot = () => (
        <div style={divStyle}>
            <div>{ setDogType("varOne","Org",formOrgDataSample).foot }</div>
            <br/>
            <div>{ setDogType("varOne","IP",formIPDataSample).foot }</div>
            <br/>
            <div>{ setDogType("varOne","FL",formFLDataSample).foot }</div>
            <br/>
            <div>{ setDogType("varTwo","Org",formOrgDataSample).foot }</div>
            <br/>
            <div>{ setDogType("varTwo","IP",formIPDataSample).foot }</div>
            <br/>
            <div>{ setDogType("varTwo","FL",formFLDataSample).foot }</div>
            <br/>
        </div>
    );

    // "varOne", "IP", formData -> {header,footer}
 

    //setDogType("varOne","IP",formIPDataSample);
    //${setDogType(clientType,serverType,data).head}
    //console.log(montaj("varOne","IP",formIPDataSample));
    
    // OUTPUT ------------------------------------------------------------------------------------------
    const Montaj = ({store,dogovorData}) => (
        <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                 <AreaBox g={[3,2,11,5]} fd="row" style={naked}>
                    <ParamBox>
                        <TextBox h={"100%"} w={"80%"}>
                            <Text m={"2vmin"} style={divStyle}>
                                Hello
                                {console.log("state in montaj : ", store)}
                                {Object.keys(dogovorData.formData).map(e =>(<div>{dogovorData.formData[e]}</div>))}<br/>
                                <MontajHead/>
                                <MontajFoot/>
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

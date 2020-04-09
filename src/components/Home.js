import React, {useState, useEffect} from 'react';
import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Input,Button,link,naked,Selectable,ghost
} from '../css/style.js';
import * as actions from '../actions';
import {connect} from 'react-redux';
import { useForm } from "react-hook-form";
import * as data from "./datavector";
import FormOne from "./FormOne";
const inData = data.datavectorOne;
console.log("inData : ", inData);



const Home = ({store,home,yurlitzas,dogovorTypes,dialects,onYur}) => { 

    const [yurlitso,setYurlitso] = useState("unknown");
    const [dogType,setDogType] = useState("unknown");
    const [outerdata,setOuterdata] = useState("formDataDefault");
    const [zakazchik,setZakazchik] = useState("unknown");
    
    
    
    const Elem = _props => {
        const handleClick = () => {
            console.log("data : ", _props.data);
            _props.set(_props.data);
        };
        return (<b onClick={handleClick}>{_props.data}{" | "}</b>
    )};
    const YurTab = () => (
        <Text m={"2vmin"}>
            <div id="yurfacesPanel">
                ЮРЛИЦО: <b>{yurlitso}</b> <br/>
                {yurlitzas.map(e => <Elem data={e} set={setYurlitso}/>)}<br/>  
            </div>
        </Text>
    ); 
    const DogTab = () => (
        <Text m={"2vmin"}>
            <div id="contractTypesPanel">
                ТИП ДОГОВОРА: <b>{dogType}</b> <br/>
                {dogovorTypes.map(e => <Elem data={e} set={setDogType}/>)}<br/>  
            </div>
        </Text>
    );
    const DialTab = () => {
        //console.log("dialects : ", dialects);
        let current = () => {
            return ((dogType == "проектирование") ? [...dialects.make] :
                (dogType == "поставка") ? [...dialects.sell] :
                dialects.basic
            );
        };
        //console.log("current : ", current());
        return (
            <Text m={"2vmin"}>
                <div id="varsPanel">
                    НАБОР ПЕРЕМЕННЫХ: <b>{dogType}</b> <br/>
                    {current().map(e => <b>{e}{" | "}</b>)}
                </div>
            </Text>
    )};

    const zakTypes = ["organ","IP","fizlitso"];
    const Zakazchik = () => (
        <Text m={"2vmin"}>
            <div id="zakazchik">
                ТИП ЗАКАЗЧИКА: <b>{zakazchik}</b> <br/>
                {zakTypes.map(e => <Elem data={e} set={setZakazchik}/>)}<br/>  
            </div>
        </Text>        
    );

  return (
    <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                <AreaBox g={[2,2,5,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                            <YurTab/>
                            <DogTab/>
                            <DialTab/>
                            <Zakazchik/>
                        </Text>
                    </TextBox>
                </AreaBox>
                <AreaBox g={[5,2,10,5]} fd="row">
                    <TextBox h={"100%"}>
                        {zakazchik==="organ"
                                ? <FormOne/> 
                                : zakazchik==="IP"
                                    ? "IP form" 
                                    : zakazchik==="fizlitso"
                                        ? "Fizlitso form" 
                                        : "who knows"
                        }<br/>
                    </TextBox>
                </AreaBox>
            </Grid>
        </Container>    
    </div>
  );
}

//const mapStateToProps = state => ({
//    store: state.home
//},console.log("mapState state : ", state));
const mapStateToProps = _state => ({
    store: _state,
    home: _state.home,
    yurlitzas: _state.home.yurlitzas,
    dogovorTypes: _state.home.dogovorTypes,
    dialects: _state.home.varDialects
});
const mapDispatchToProps = _dispatch => ({
    onYur: data => _dispatch(actions.yurlitso(data))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Home);

//export default Home;


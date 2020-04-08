import React, {useState, useEffect} from 'react';
import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,link,naked,Selectable,ghost
} from '../css/style.js';
import * as actions from '../actions';
import {connect} from 'react-redux';

/*
const makeEditable = (_content,_setState,_editable) => {
    return (
        <b
            contentEditable={_editable}
            onInput={e => _setState(e.currentTarget.textContent)}
        >
         {_content}
        </b>
   );
};
*/

//yurlitzas.map(e => (<div>{" | "}{e}{" | "}</div>))}<br/>
const Home = ({store,home,yurlitzas,dogovorTypes,dialects}) => { 

    const [yurlitso,setYurlitso] = useState("unknown");
    const [dogType,setDogType] = useState("unknown");
        
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
                        </Text>
                    </TextBox>
                </AreaBox>
                <AreaBox g={[5,2,10,5]} fd="row">
                    <TextBox h={"100%"}>
                        {/*<Text m={"2vmin"} id="dogovorText">
                           <b> {currentVars[0]} </b>, 
                           именуемое в дальнейшем «Поставщик», в лице 
                           <b> {currentVars[1]} </b>, 
                           действующего на основании Устава, с одной стороны,
                           <b> {currentVars[2]} </b>, в лице
                           генерального директора <b> {currentVars[3]} </b>
                           именуемое в дальнейшем «Покупатель»,                         
                        </Text>*/}
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
//const mapDispatchToProps = _dispatch => ({
//    onYur: data => _dispatch(actions.yurlitso(data))
//});

export default connect (
    mapStateToProps//,
    //mapDispatchToProps
)(Home);

//export default Home;


import React, {useState} from 'react';
import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox
} from '../css/style.js';
import * as actions from '../actions';
import {connect} from 'react-redux';
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import Carousel from "./Carousel";
const {newDogGen,nameExtractor} = require("../utils/dognums");

const Home = (
    {
        store,
        home,
        yurlitzas,
        dogovorTypes,
        dialects,
        onYur,
        formData
    }) => { 

    const [obj,setObj] = useState("unknown");
    const [yurlitso,setYurlitso] = useState("unknown");
    const [dogType,setDogType] = useState("unknown");
    const [zakazchik,setZakazchik] = useState("unknown");
    const [dogsList,setDogsList] = useState(nameExtractor());
    const [dogs, setDogs] = useState("unknown");
    console.log("store : ", store);
    console.log("home :" , home);
    console.log("formData : ", formData);
    const objects = ["Липки","Пипки","Ципки"];
    
    const Elem = _props => {
        const handleClick = () => {
            console.log("data : ", _props.data);
            _props.set(_props.data);
        };
        return (<b onClick={handleClick}>{_props.data}{" | "}</b>
    )};
    const YurTab = () => (
        <Text m={"2vmin"}>
            <div >
                ОБЪЕКТ: <b>{obj}</b> <br/>
                {objects.map((e,i) => <Elem key={i} data={e} set={setObj}/>)}<br/>  
            </div>
        </Text>
    ); 
    const DogTab = () => (
        <Text m={"2vmin"}>
            <div id="contractTypesPanel">
                ТИП ДОГОВОРА: <b>{dogType}</b> <br/>
                {dogovorTypes.map((e,i) => <Elem key={i} data={e} set={setDogType}/>)}<br/>  
            </div>
        </Text>
    );
    const DialTab = () => {
        //console.log("dialects : ", dialects);
        let current = () => {
            return ((dogType === "проектирование") ? [...dialects.make] :
                (dogType === "поставка") ? [...dialects.sell] :
                dialects.basic
            );
        };
        //console.log("current : ", current());
        return (
            <Text m={"2vmin"}>
                <div id="varsPanel">
                    НАБОР ПЕРЕМЕННЫХ: <b>{dogType}</b> <br/>
                    {current().map((e,i) => <b key={i} >{e}{" | "}</b>)}
                </div>
            </Text>
    )};

    const zakTypes = ["организация","ИП","физическое лицо"];
    const Zakazchik = () => (
        <Text m={"2vmin"}>
            <div id="zakazchik">
                ТИП ЗАКАЗЧИКА: <b>{zakazchik}</b> <br/>
                {zakTypes.map((e,i) => <Elem key={i} data={e} set={setZakazchik}/>)}<br/>  
            </div>
        </Text>        
    );
    const ZakData = () => (
        <TextBox h={"100%"}>
            {zakazchik==="организация"
                    ? <FormOne/> 
                    : zakazchik==="ИП"
                        ? <FormTwo/>
                        : zakazchik==="физическое лицо"
                            ? <FormThree/> 
                            : "who knows"
            }<br/>
        </TextBox>
    );
    const dogTypesData  = [
        "Договор проектирования",
        "Договор поставки",
        "Договор монтажа",
        "Договор сервисного обслуживания",
        "Договор субподряда"
    ];
    const Dogovors = () => {
        const newdogHandler = () => {
            setDogsList(dogsList.concat(newDogGen(dogs)));
            console.log("new dog : ", newDogGen(dogs));
        };
        return(
            <Text m={"2vmin"}>
                <div>
                    СОЗДАТЬ ДОГОВОР: <b onClick={newdogHandler}>{dogs}</b> <br/>
                    {dogTypesData.map((e,i) => <Elem key={i} data={e} set={setDogs}/>)}
                </div>
            </Text>        
        )
    };
    const DogsData = () => (
        <Text m={"2vmin"}>
            <div>
                СПИСОК ДОГОВОРОВ:
                <br/><br/>
                {dogsList.map(e => (<div><b>{e}</b></div>))}
            </div>
        </Text> 
    );
    
    const components = 
    [
        <YurTab/>,<DogTab/>   
    ];

    const Basic = () => (
    <div>
    <GlobalStyle/>
        <Container>
            <Grid>
                <AreaBox g={[2,2,3,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                            <YurTab/>
                            <DogTab/>
                            <DialTab/>
                            <Zakazchik/>
                            <Dogovors/>
                        </Text>
                    </TextBox>
                </AreaBox>
                <AreaBox g={[3,2,10,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                            <Carousel components={components}/>
                            {zakazchik==="unknown" 
                            ? <div></div> : <ZakData/>}
                            {dogs==="unknown" ? <div></div> 
                            : <DogsData/>}
                        </Text>
                    </TextBox>
                </AreaBox>
                
            </Grid>
        </Container>
    </div>
  );
  return (
    <div>
        <Basic/>   
    </div>
  );
}

const mapStateToProps = _state => ({
    store: _state,
    home: _state.home,
    yurlitzas: _state.home.yurlitzas,
    dogovorTypes: _state.home.dogovorTypes,
    dialects: _state.home.varDialects,
});
const mapDispatchToProps = _dispatch => ({
    onYur: data => _dispatch(actions.yurlitso(data))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Home);

//export default Home;


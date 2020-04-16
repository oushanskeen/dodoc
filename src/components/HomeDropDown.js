import React, {useState} from 'react';
import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,ParamBox,naked,
    NavbarDropdown,NavbarDropdownContent,
} from '../css/style.js';
import * as actions from '../actions';
import {connect} from 'react-redux';
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import Carousel from "./Carousel";
const {newDogGen,nameExtractor} = require("../utils/dognums");

const steps = [
    "Выбери объект, к которому нужно создать документ",
    "Выбери тип договора",
    "Выбери своё юрлицо",
    "Выбери тип контр-агента и заполни его данные",
    "Ты сделал всё что мог, отдохни"
];

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

    const idScope = steps.map((e,i) => i);
   console.log("idScope : ", idScope);
   const [count,setCount] = useState(idScope[0]);
    const [obj,setObj] = useState("unknown");
    const [yurlitso,setYurlitso] = useState("unknown");
    const [dogType,setDogType] = useState("unknown");
    const [zakazchik,setZakazchik] = useState("unknown");
    const [dogsList,setDogsList] = useState(nameExtractor());
    const [dogs, setDogs] = useState("unknown");
    const [zakazchikData, setZakazhikData] = useState("unknown");
    const choiceState = [obj,dogType,dogs,yurlitso,zakazchik];

    const StatusBar = () => (    
        <TextBox h={"100%"}>
            <Text m={"2vmin"}>
            {"То что ты выбрал : "}<br/>
            <br/>
            <b>ОБЪЕКТ: {obj}</b><br/>
            <b>ТИП ДОГОВОРА: {dogType}</b><br/>
            {dogType==="проектирование"
                ? (<b>ТИП ТИПА ДОГОВОРА: {dogs}<br/></b>):''
            }
            <b>ЮРЛИЦО: {yurlitso}</b><br/>
            <b>КОНТРАГЕНТ: {zakazchik}</b><br/>
            <b>ДАННЫЕ КОНТРАГЕНТА: {zakazchikData}</b><br/>

            
                    </Text>
        </TextBox>
    );

    console.log("store : ", store);
    console.log("home :" , home);
    console.log("formData : ", formData);
    const objects = ["Липки","Пипки","Ципки"];
    
    const Elem = _props => {
        console.log("here must be the count");
        console.log("cnt : ", count);
        const handleClick = () => {
            console.log("data : ", _props.data);
            console.log("cnt : ", count);
            _props.set(_props.data);
            
        };
        return (<b onClick={handleClick}>{_props.data}{" | "}</b>
    )};
    const ObjTab = () => (
      <div>
            
                {objects.map((e,i) => <Elem key={i} data={e} set={setObj}/>)}<br/>  
            
     </div>
    ); 
    
    const YurTab = () => (
        <Text m={"2vmin"}>
            <div id="contractTypesPanel">
                ЮРЛИЦО: <b>{yurlitso}</b> <br/>
                {yurlitzas.map((e,i) => <Elem key={i} data={e} set={setYurlitso}/>)}<br/>  
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

    const FormTab = () => {
        return (zakazchik==="организация"
                    ? <FormOne/> 
                    : zakazchik==="ИП"
                        ? <FormTwo/>
                        : zakazchik==="физическое лицо"
                            ? <FormThree/> 
                            : "who knows"
            );
    };
    const zakTypes = ["организация","ИП","физическое лицо"];
    const Zakazchik = () => (
        <Text m={"2vmin"}>
            <div id="zakazchik">
                ТИП ЗАКАЗЧИКА: <b>{zakazchik}</b> <br/>
                {zakTypes.map((e,i) => <Elem key={i} data={e} set={setZakazchik}/>)}<br/>  
            </div>
            
            <FormTab/>
            
        </Text>        
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
                <div>
                    СОЗДАТЬ ДОГОВОР: 
                    <b onClick={newdogHandler}>{dogs}</b> <br/>
                    {dogTypesData.map((e,i) => 
                    <Elem key={i} data={e} set={setDogs}/>)}
                </div>   
        )
    };
    const DogTab = () => (
        <TextBox h={"100%"}>
        <Text m={"2vmin"}>
            <div id="contractTypesPanel">
                ТИП ДОГОВОРА: <b>{dogType}</b> <br/>
                {dogovorTypes.map((e,i) => <Elem key={i} data={e} set={setDogType}/>)}<br/>  
            </div>
        
            
            {dogType === "проектирование" 
                ? <Dogovors/>
                : ""            
            }
           </Text> 
        </TextBox>
    );
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
    [<ObjTab/>,<DogTab/>,<YurTab/>,<Zakazchik/>];

    let handlePrev = _stepId => {
        setCount(count-1);
    };
    let handleNext = _stepId => {
        setCount(count+1);
    };

        const PrevButton = () => (
        <Button>
            <div onClick={handlePrev}> 
                PREVIOUS 
            </div>
        </Button>     
    );
    const NextButton = () => (
        <Button>
            <div onClick={handleNext}> 
                NEXT 
            </div>
        </Button>
    );
    /*
    const ButtonsBox = () => (
        <AreaBox g={[7,2,8,5]} fd="row">
            <PrevButton/>
            <NextButton/>
        </AreaBox>
    );
    */
    
    const ButtonsBox = () => (
        <ParamBox>
            <PrevButton/>
            <NextButton/>
        </ParamBox>
    );
    const Navbar = _props => (
        <NavbarDropdown>
            <span>{_props.name}</span>
                <NavbarDropdownContent>
                    {_props.comp}
            </NavbarDropdownContent>
        </NavbarDropdown>
    );
   
    const Basic = () => (
    <div>
    <GlobalStyle/>
    <Container>
        <Grid>
             <AreaBox g={[2,2,4,5]} fd="row">
                <StatusBar/>
            </AreaBox>
              <AreaBox g={[4,2,8,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                            <Navbar
                                name={"ОБЪЕКТЫ"}
                                data={objects}          
                                comp={<ObjTab/>}   
                            />
                            {/*<!--Carousel 
                            components={components}
                            steps={steps}
                            count={count}
                            /-->*/}
                            
                        </Text>
                    </TextBox>
                </AreaBox>
            <AreaBox g={[8,2,10,5]} fd="row">

                <ButtonsBox/>
     
            </AreaBox>
            
                {/*<!--AreaBox g={[2,2,3,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                            <YurTab/>
                            <DogTab/>
                            <DialTab/>
                            <Zakazchik/>
                            <Dogovors/-->
                        </Text>
                    </TextBox>
                </AreaBox-->*/}
              
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


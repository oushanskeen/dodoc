import React, {useState,useEffect} from 'react';
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

const Home = (
    {
        store,
        home,
        yurlitzas,
        dogovorTypes,
        dialects,
        onYur,
        formOneData,
        formTwoData,
        formThreeData
    }) => { 

//  COMPONENT STATES AND STATE SETTERS -------------------------

    const [obj,setObj] = useState(" - ");
    const [yurlitso,setYurlitso] = useState(" - ");
    const [dogType,setDogType] = useState(" - ");
    const [zakazchik,setZakazchik] = useState(" - ");
    const [dogsList,setDogsList] = useState(nameExtractor());
    const [dogs, setDogs] = useState(" - ");
    const [dogProj, setDogProj] = useState(" - ");
    const [zakazchikData, setZakazhikData] = useState(" - ");
    const [formData,setFormData] = useState(
        {formOneData,formTwoData,formThreeData}
    );
    const choiceState = [obj,dogType,dogs,yurlitso,zakazchik];
    

//  LOCAL UTIL FUNCTIONS ---------------------------------------
    
    const noFormData = () => {
        return(
            (formOneData===formTwoData &&
             formTwoData===formThreeData)
             ===false ? "ECТЬ" : "НЕТ")
    };
    const isAllData = () => {
        return(
            (
            obj !== " - " 
            && 
            dogType !== " - "
            &&
            dogProj !== " - "  
            && 
            yurlitso !== " - " 
            &&
            zakazchik !== " - " 
            &&
            noFormData() !== "НЕТ"
            ) 
            ? "OK" : "HZ"
        );
    };

    // 1 ELEM --------------------------------------------------
    const Elem = _props => {
        const handleClick = () => _props.set(_props.data);
        return <b onClick={handleClick}>{_props.data}<br/></b>;
    };
    // 2 TAB ---------------------------------------------------
    const Tab = _props => (
        <div>
            {_props.vals.map((e,i) => 
                <Elem 
                    key={i} 
                    data={e} 
                    set={_props.setter}
                />)
            }<br/>   
        </div>    
    );
    // 3 NAVBAR -----------------------------------------------
    const Navbar = _props => (
        <div>
            <NavbarDropdown>
                <span>{_props.name} : {_props.v}</span>
                    <NavbarDropdownContent>
                        {_props.comp}
                </NavbarDropdownContent><br/><hr/>
            </NavbarDropdown>
        </div>
    );

//  SAMPLE HARDCODED DATA --------------------------------------

    const objects = ["Липки","Лапки","Пипки"];
    const dogas  = [
        "Договор проектирования",
        "Договор поставки",
    ];
    const dogProjData  = [
        "Договор проектирования",
        "Договор поставки",
        "Договор монтажа",
        "Договор сервисного обслуживания",
        "Договор субподряда"
    ];
    const zakTypes = ["организация","ИП","физическое лицо"];

//  UI TABS ----------------------------------------------------

    const YurTab = () => (
        <Tab vals={yurlitzas} setter={setYurlitso}/>
    );
    const ObjTab = () => (
        <Tab vals={objects} setter={setObj}/>
    ); 
    const DogTab = () => (
        <Tab vals={dogas} setter={setDogType}/>
    );
    const DogProjTab = () => (
        <Tab vals={dogProjData} setter={setDogProj}/>
    );
    const ZakTab = () => (
        <Tab vals={zakTypes} setter={setZakazchik}/>  
    );

//  MENU DATA HUB ----------------------------------------------

    const menuData = [
        ["ИМЯ ОБЪЕКТА", obj, objects, <ObjTab/>],
        ["ТИП ДОГОВОРА", dogType, dogas, <DogTab/>],
        ["ТИП ТИПА ДОГОВОРА", dogProj,dogProjData,<DogProjTab/>],
        ["ЮРЛИЦО", yurlitso, yurlitzas, <YurTab/>],
        ["КОНТРАГЕНТ",zakazchik,zakTypes,<ZakTab/>],
        ["ДАННЫЕ КОНТРАГЕНТА", formOneData ]
    ];

//  ROOT COMOPOSER -------------------------------------------

    const StatusBar = () => (    
        <TextBox h={"100%"}>
            <Text m={"2vmin"}>
                <Navbar
                    name={menuData[0][0]}
                    v={menuData[0][1]}
                    data={menuData[0][2]}          
                    comp={menuData[0][3]}   
                />
                <Navbar
                    name={menuData[1][0]}
                    v={menuData[1][1]}
                    data={menuData[1][2]}          
                    comp={menuData[1][3]}   
                />
                {dogType==="Договор проектирования"
                  ? (<Navbar
                        name={menuData[2][0]}
                        v={menuData[2][1]}
                        data={menuData[2][2]}          
                        comp={menuData[2][3]}   
                    />)
                  : ""
                }
                <Navbar
                    name={menuData[3][0]}
                    v={menuData[3][1]}
                    data={menuData[3][2]}          
                    comp={menuData[3][3]}   
               />
                <Navbar
                    name={menuData[4][0]}
                    v={menuData[4][1]}
                    data={menuData[4][2]}          
                    comp={menuData[4][3]}   
                />  
                <div>
                    ДАННЫЕ КОНТРАГЕНТА: {noFormData()}
                </div><br/>            
            </Text>
        </TextBox>
    );

    const FormTab = _props => {
        return (zakazchik==="организация"
                    ? <FormOne data={_props.data}/> 
                    : zakazchik==="ИП"
                        ? <FormTwo data={_props.data}/>
                        : zakazchik==="физическое лицо"
                            ? <FormThree data={_props.data}/> 
                            : "тип контрагента не выбран"
            );
    };  
    /*
    const Dogovors = () => {
        const newdogHandler = () => {
            setDogsList(dogsList.concat(newDogGen(dogs)));
            console.log("new dog : ", newDogGen(dogs));
        };
        return(
                <div>
                    СОЗДАТЬ ДОГОВОР: 
                    <b onClick={newdogHandler}>{dogs}</b> <br/>
                    {dogProjData.map((e,i) => 
                    <Elem key={i} data={e} set={setDogs}/>)}
                </div>   
        )
    };
    */
   
//  OUTPUT COMPONENT ------------------------------------------

    const Basic = () => (
        <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                 <AreaBox g={[2,2,5,5]} fd="row" style={naked}>
                    <ParamBox>
                        <StatusBar/>
                    </ParamBox>
                    <ParamBox>
                    {console.log("is all data : ", isAllData())}
                    {    isAllData()==="OK"?
                        <Button>{"CОЗДАТЬ ДОГОВОР"}</Button>
                        : ""
                    }
                    </ParamBox>
                 </AreaBox>
                 <AreaBox g={[5,2,11,5]} fd="row" style={naked}>
                    <ParamBox>
                        <TextBox h={"100%"}>
                            <Text m={"2vmin"}>
                                <FormTab/>
                            </Text>
                        </TextBox>
                    </ParamBox>
                </AreaBox>
            </Grid>
        </Container>
        </div>
        );
        return <Basic/>;
}

const mapStateToProps = _state => ({
    store: _state,
    home: _state.home,
    yurlitzas: _state.home.yurlitzas,
    dogovorTypes: _state.home.dogovorTypes,
    formOneData: _state.form.formOne,
    formTwoData: _state.form.formTwo,
    formThreeData: _state.form.formThree
});
const mapDispatchToProps = _dispatch => ({
    onYur: data => _dispatch(actions.yurlitso(data))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Home);

//export default Home;


   
    import React, {useState,useEffect} from 'react';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,
        NavbarDropdown,NavbarDropdownContent,link
    } from '../css/style.js';
    import { Link } from 'react-router-dom';
    import * as actions from '../actions';
    import {connect} from 'react-redux';
    import FormOne from "./FormOne";
    import FormTwo from "./FormTwo";
    import FormThree from "./FormThree";
    import Montaj from "./Montaj";
    import Ownerdic from "./Ownerdic";
    const {newDogGen,nameExtractor} = require("../utils/dognums");

    const Home = (
        {
            store,
            home,
            formData,
            newDogData,
            onDogovorData,
            dogovorData
        }) => { 
        console.log("store inside home : ", store);
        console.log("form data : ", formData);
        console.log("new dogovor data : ", newDogData);

//  STATE -------------------------------------------------------------
    
    
    // INIT
    const [selection, setSelection] = useState({
        objNameSel:"",
        dogTypeSel:"",
        sysTypeSel:"",
        servTypeSel:"",
        clientTypeSel:""    
    });
    const [hub,setHub] = useState({});
    const output = {...dogovorData,selectors:{...selection,hub}};
    
    console.log("output : ", output);

//  REDUCERS ---------------------------------------------------------

    const updateSelection = event => {
        setSelection({
          ...selection,
          [event.target.name]: event.target.value
        });
        onDogovorData(output);
        console.log("updateSelection : ", selection);
    }; 
    const updateHub = event => {
        const target = event.target;      
        const value = target.value === "on" ? target.checked : !target.checked;
        const name = target.name;
        setHub({...hub,[name]: value});
    }; 
    const { objNameSel,
            dogTypeSel,
            sysTypeSel,
            servTypeSel,
            clientTypeSel,
            } = selection;

//  SAMPLE HARDCODED DATA VECTORS ------------------------------------ 

    const objectsDataVector = ["Липки","Лапки","Пипки"];
    const dogovorsDataVector  = [
        "Договор проектирования",
        "Договор поставки",
        "Договор монтажа",
        "Договор сервисного обслуживания",
        "Договор субподряда"
    ];
    const systemsDataVector = [
        "Вентиляция и кондиционирование", 
        "Отопление",  
        "Котельная",  
        "Водоснабжение и канализация",  
        "ЭОМ", 
        "Слаботочные сети",
        " Автоматизация"
    ];
    const serversDataVector = ["сервер один", "сервер два"];
    const clientDataVector = ["организация","ИП","физ лицо"];

// ----------------------------------------------------------------------------------------------------------

    const ObjectSelector = () => (
        <label for="pet-select"> выбери объект : <br/> 
        <select
            value={objNameSel} 
            id="objNameSel" 
            name="objNameSel" 
            onChange={e =>updateSelection(e)}
        >
            <option value=""> - - - - - - - - - - - - - - - </option>
            {objectsDataVector.map(e => (<option value={`${e}`}> {e} </option> ))}
        </select><br/>
        </label>
    );
    const DogovorSelector = () => (
       <label for="pet-select"> выбери тип договора : <br/>
        <select
            value={dogTypeSel} 
            id="dogTypeSel" 
            name="dogTypeSel" 
            onChange={e =>updateSelection(e)}
        >
            <option value=""> - - - - - - - - - - - - - - - </option>
            {dogovorsDataVector.map(e => (<option value={`${e}`}> {e} </option> ))}
        </select><br/> 
        </label>
    );
    const ServerSelector = () => (
        <div>
            <label for="pet-select"> выбери тип сервера : </label><br/>
            <select
                value={servTypeSel} 
                id="servTypeSel" 
                name="servTypeSel" 
                onChange={e =>updateSelection(e)}
            >
                <option value=""> - - - - - - - - - - - - - - - </option>
                {serversDataVector.map(e => (<option value={`${e}`}> {e} </option> ))}
            </select><br/>
        </div>
    );

    const ClientSelector = () => (
        <div>
           <label for="pet-select"> выбери тип клиента : </label><br/>
            <select
                value={clientTypeSel} 
                id="clientTypeSel" 
                name="clientTypeSel" 
                onChange={e =>updateSelection(e)}
            >
                <option value=""> - - - - - - - - - - - - - - - </option>
                {clientDataVector.map(e => (<option value={`${e}`}> {e} </option> ))}
            </select><br/> 
        </div>
    );
    const SystemSelector = () => (
        <div>
            {systemsDataVector.map(e => 
                (<div>                    
                <input
                    checked={hub[`${e}`]}
                    name={`${e}`}
                    type="checkbox"
                    onChange={e =>updateHub(e)}
                /><label>{`${e}`}</label>
                </div>)
             )}          
        </div>
    );

    const FormTab = _props => {
        return (clientTypeSel==="организация"
                    ? <FormOne/> 
                    : clientTypeSel==="ИП"
                        ? <FormTwo/>
                        : clientTypeSel==="физ лицо"
                            ? <FormThree/> 
                            : "тип контрагента не выбран"
            );
    };
    const [dataSent,setDataSent] = useState(false);
    const Dogovors = () => (
        <button type="button" disabled="false">
            <Link 
                to="/dodoc/montaj"
                style={link}
            >
                CОЗДАТЬ ДОГОВОР
            </Link>
        </button>  
    );
 
     
   
//  OUTPUT COMPONENT ------------------------------------------

    const Basic = () => (
        <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                 <AreaBox g={[2,2,6,4]} fd="column" style={naked}>  
                     <TextBox h={"100%"}>
                         <Text m={"2vmin"}>
	    		    ЧТО-ТО ТУТ ДОЛЖНО БЫТЬ,<br/>
	    		    А ПОКА МОЖЕШЬ ПРОЙТИСЬ ПО МЕНЮ
                         </Text>
                     </TextBox>
                    
                 </AreaBox>
                 <AreaBox g={[6,2,11,5]} fd="row" style={naked}>
                    <ParamBox>
                        <TextBox h={"100%"}>
                            <Text m={"2vmin"}>
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
    formData: _state.formDataNew,
    dogovorData: _state.dogovorData
});
const mapDispatchToProps = _dispatch => ({
    onDogovorData: data => _dispatch(actions.dogovorData(data))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Home);

//export default Home;


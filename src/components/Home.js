import React, {useState, useEffect} from 'react';
import {
    GlobalStyle,Container,Grid,AreaBox,Text,
    TextBox,Button,link,naked,Selectable,ghost
} from '../css/style.js';

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
    
/*
    {makeEditable(vars[0],varStates[0],"true")}
    {makeEditable(vars[1],varStates[1],"true")}
    {makeEditable(vars[2],varStates[2],"true")}
*/
    
const localVars = [
      "our company name",
      "our director name",
      "their company name",
      "their director name",
  ];
  

function Home() {
  let vars = [" ONE "," TWO "," THREE "]
  const [one,setOne] = useState(vars[0]);
  const [two,setTwo] = useState(vars[1]);
  const [three,setThree] = useState(vars[2]);
  const varStates = [setOne,setTwo,setThree];
    
  const [yurlitso, setYurlitso] = useState("не выбрано");
  console.log("yurlitso : ", yurlitso);
  const [dogovorType, setDogovorType] = useState("не выбрано");
  console.log("dogovorType : ", dogovorType);
  const [localVarsRu, setLocalVarsRu] = useState([
      "имя нашей компании",
      "имя директора нашей компании",
      "имя их компании",
      "имя директора их компании",
  ]);
  
  useEffect(() => console.log("localVarsRu : ", localVarsRu));

  const localVarsProcessor = () => {
      const varOne = [
          "подрядчик",
          "имя директора подрядчика",
          "звквзчик",
          "имя директора заказчика",
      ];
      const varTwo = [
          "поставщик",
          "имя директора поставщика",
          "покупатель",
          "имя директора покупатель",
      ];
      (dogovorType === "проектирование") 
      ? setLocalVarsRu(varOne)  
      : setLocalVarsRu(varTwo);
  };


  const [our_company_name,set_Our_company_name] = useState(localVarsRu[0]);
  const [our_director_name,set_Our_director_name] = useState(localVarsRu[1]);
  const [their_company_name,set_Their_company_name] = useState(localVarsRu[2]);
  const [their_director_name,set_Their_director_name] = useState(localVarsRu[3]);

  const localVarStates = 
  [
      set_Our_company_name,
      set_Our_director_name,
      set_Their_company_name,
      set_Their_director_name
  ];

  const yurlitzs = [ "Добровент", "Доброклад", "Доброход" ];
  const dogovorTypes = ["проектирование","поставка"];

  const Choice = _props => {
      const handleClick = () => {
            localVarsProcessor();
           _props.setter(_props.name);
           console.log("name :", _props.name);
      };
      return (
          <span onClick={handleClick} style={ghost}>
              {_props.name}{" | "}
          </span>
      ); 
  };

  return (
    <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                <AreaBox g={[2,2,5,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                            ЮРЛИЦО: <b>{yurlitso}</b> <br/>
                                {yurlitzs.map(e => 
                                    <Choice name={e} setter={setYurlitso}/>
                                )}<br/>
                            ТИП ДОГОВОРА: <b>{dogovorType}</b> <br/>
                                {dogovorTypes.map(e => 
                                    <Choice name={e} setter={setDogovorType}/>
                                )}<br/>
                            ПЕРЕМЕННЫЕ:<br/>
                                {makeEditable(localVarsRu[0],localVarStates[0],"true")}{" | "}
                                {makeEditable(localVarsRu[1],localVarStates[1],"true")}{" | "}
                                {makeEditable(localVarsRu[2],localVarStates[2],"true")}{" | "} 
                                {makeEditable(localVarsRu[3],localVarStates[3],"true")} 
                        </Text>
                    </TextBox>
                </AreaBox>
                <AreaBox g={[5,2,10,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                           <b> {our_company_name} </b>, 
                           именуемое в дальнейшем «Поставщик», в лице 
                           <b> {our_director_name} </b>, 
                           действующего на основании Устава, с одной стороны,
                           <b> {their_company_name} </b>, в лице
                           генерального директора <b> {their_director_name} </b>
                           именуемое в дальнейшем «Покупатель»,                         
                        </Text>
                    </TextBox>
                </AreaBox>
            </Grid>
        </Container>    
    </div>
  );
}

export default Home;


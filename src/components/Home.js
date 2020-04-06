import React, {useState} from 'react';
import {GlobalStyle,Container,Grid,AreaBox,Text,TextBox,Button,link,naked} from '../css/style.js';

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
    
    
    

function Home() {
  let vars = [" ONE "," TWO "," THREE "]
  const [one,setOne] = useState(vars[0]);
  const [two,setTwo] = useState(vars[1]);
  const [three,setThree] = useState(vars[2]);
  const varStates = [setOne,setTwo,setThree];
    
  return (
    
    <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                <AreaBox g={[2,2,4,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                            VARIABLES:<br/> 
                                {makeEditable(vars[0],varStates[0],"true")}
                                {makeEditable(vars[1],varStates[1],"true")}
                                {makeEditable(vars[2],varStates[2],"true")}  
                        </Text>
                    </TextBox>
                </AreaBox> 
                <AreaBox g={[4,2,10,5]} fd="row">
                    <TextBox h={"100%"}>
                        <Text m={"2vmin"}>
                            Hello, i have <u>{ one }</u> and 
                            <u> {two} </u> and <u> {three} </u>.
                            Hello, i have <u>{ one }</u> and 
                            <u> {two} </u> and <u> {three} </u>.
                            Hello, i have <u>{ one }</u> and 
                            <u> {two} </u> and <u> {three} </u>.
                            Hello, i have <u>{ one }</u> and 
                            <u> {two} </u> and <u> {three} </u>.
                        </Text>
                    </TextBox>
                </AreaBox>
            </Grid>
        </Container>    
    </div>
  );
}

export default Home;


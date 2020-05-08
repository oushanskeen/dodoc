   
    import React, {useState,useEffect} from 'react';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,
        NavbarDropdown,NavbarDropdownContent,link
    } from '../../css/style.js';
    import FormOneSimp from "../FORMS/FormOneSimp";
    import FormTwoSimp from "../FORMS/FormTwoSimp";
    import FormThreeSimp from "../FORMS/FormThreeSimp";
    import {connect} from 'react-redux';
    import * as actions from '../../actions';

    const Selector = props => {
        const pool = props.content.home.dogTypes;
        const formSet = 
            {
                YL:<FormOneSimp action={props.action}/>,
                IP:<FormTwoSimp action={props.action}/>,
                FL:<FormThreeSimp action={props.action}/>
            };
        const [select,setSelect] = useState("");
        console.log("select:", select);
        const [newdic,setNewdic] = useState(false);
        return(
            <div>
                <button onClick={()=>setNewdic(!newdic)}>добавить агента</button>
                {newdic===false ? "" : 
                    <div>
                        <select onChange={e => setSelect(e.target.value)}>
                            <option value="-">-------</option>
                            {Object.entries(pool).map(e => <option value={e[0]}>{e[0]}</option>)}
                        </select>
                        {select==="" ? "" : <div> {formSet[select]} </div> }
                    </div>
                }
            </div>
        );
    };
    const Article = _props => {
        const [fold,setFold] = useState(false);
        const buttonHandler = () => setFold(!fold);
        return (
            <div>
                <div>{_props.name}{" "}
                    <button onClick={buttonHandler}>{fold === false ? "open" : "close"}</button>            
                </div>
                {fold === false ? "" : <div>{_props.content}</div>}
                <br/>
            </div>        
        );
    }
    const Agentdic = ({majorStore, store,onAgentDicSelection,onAgentDicCreation}) => (
            <div>
            <GlobalStyle/>
            <Container>
                <Grid>
                    <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
                        <TextBox w={"80%"}>
                            <Text>
                                <div>СПРАВОЧНИК НАШИХ КОНТРАГЕНТОВ:</div><br/>
                                {store.dics.map(e => 
                                    <Article 
                                        key={e.id} 
                                        name={e.name}
                                        content={Object.entries(e.data).map(e => <div>{e[0]} : {e[1]}</div>)} 
                                    />)
                                } 
                             <Selector content={majorStore} action={onAgentDicCreation}/>
                            </Text>
                        </TextBox>             
                    </AreaBox>
                </Grid>
            </Container>
            </div>
        );

    const mapStateToProps = _state => ({
        store: _state.agentDic,
        majorStore: _state
    });
    const mapDispatchToProps = _dispatch => ({
        onAgentDicSelection: data => _dispatch(actions.agentDicSelect(data)),
        onAgentDicCreation: data => _dispatch(actions.agentDicCreate(data))
    });

    export default connect (
        mapStateToProps,
        mapDispatchToProps
    )(Agentdic);

    //export default Ownerdic;


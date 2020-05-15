   
    import React, {useState,useEffect} from 'react';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,
        NavbarDropdown,NavbarDropdownContent,link
    } from '../../css/style.js';
    import FormOneSimp from "../FORMS/FormOneSimp";
    import FormTwoSimp from "../FORMS/FormTwoSimp";
    import FormThreeSimp from "../FORMS/FormThreeSimp";
    import {DictionaryIO} from "../ELEMENTS/Elements";
    import { Link } from 'react-router-dom';
    import {connect} from 'react-redux';
    import * as actions from '../../actions';
    

    const AddAgent = props => {
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
                <button onClick={()=>setNewdic(!newdic)}>
                  добавить агента
                </button>
                {newdic===false ? "" : 
                  <div>
                    <select onChange={e => setSelect(e.target.value)}>
                      <option value="-">-------</option>
                        {Object.entries(pool).map(e => <option value={e[0]}>{e[0]}</option>)}
                    </select>
                    {select==="" ? "" : 
                       <div> {formSet[select]} </div> 
                    }
                  </div>
                }
            </div>
        );
    };
    const Article = _props => {
        const [fold,setFold] = useState(false);
        const buttonHandler = () => setFold(!fold);
        console.log("Article prtops: ", _props);
        /*
        
        */
        return (
          <div>
            <div>{_props.name}{" "}
              <button onClick={buttonHandler}>
                {fold === false ? "open" : "close"}
              </button>  
              {/*<button onClick={()=>console.log(_props.id)}>
                <Link 
                  to={`/dodoc/dogdic/${_props.id}`}
                   style={link}
                >
                watchme
                </Link>
              </button>*/}         
            </div>
              {fold === false ? "" : 
                <div>{_props.content}</div>
              }<br/>
          </div>        
        );
    };
    const nameExtractor = _x => {
        switch (_x.companyType){
            case "YL" : return _x.compFullName;
            case "IP" : return _x.FullName;
            case "FL" : return _x.NameInformal;
            default: return "unknown";              
        };
    };
    const recordDiv = _x => Object.entries(_x).map(record => <div>{record[0]} : {record[1]}</div>);
    const Agentdic = ({state}) => (
        <div>
          <GlobalStyle/>
          <Container>
            <Grid>
              <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
                <TextBox w={"80%"}>
                  <Text>
                    <div>СПРАВОЧНИК НАШИХ ФИРМ:</div><br/>
                    <DictionaryIO state={state} dictionaryName={"agentDic"}/>
                  </Text>
                </TextBox>             
              </AreaBox>
            </Grid>
          </Container>
        </div>
    );
    /*
    const Agentdic = ({majorStore, store,onAgentDicSelection,onAgentDicCreation}) => (
            <div>
            <GlobalStyle/>
            <Container>
                <Grid>
                    <AreaBox g={[2,2,10,5]} fd="row" style={naked}> 
                        <TextBox w={"80%"}>
                            <Text>
                                <div>СПРАВОЧНИК НАШИХ КОНТРАГЕНТОВ:</div><br/>
                                {console.log("store.dics: ", store.dics)}
                                {store.dics.map(agent => 
                                    <Article 
                                        key={agent.id} 
                                        id={agent.id}
                                        name={nameExtractor(agent.data)}
                                        content={recordDiv(agent.data)} 
                                    />)
                                } 
                             <AddAgent content={majorStore} action={onAgentDicCreation}/>
                            </Text>
                        </TextBox>             
                    </AreaBox>
                </Grid>
            </Container>
            </div>
        );
    */

    const mapStateToProps = _state => ({
        state: _state,
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


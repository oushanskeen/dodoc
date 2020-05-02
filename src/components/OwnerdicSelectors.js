   
    import React, {useState,useEffect} from 'react';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,
        NavbarDropdown,NavbarDropdownContent,link
    } from '../css/style.js';
    import {connect} from 'react-redux';
    import * as actions from '../actions';

    const Select = props => {
        //const handleDics = () => {
        //    const accum = [];
        //    for (let [key, value] of Object.entries(props.store.dics)) {accum.push([key,value])};
        //    return accum;
        //};
        console.log("store in select : ", props.store);
        const handleSelect = _value => {
            console.log("hell");
            props.handler(_value)
        };
        return (
            <select id="ownerDicSelector" onChange={e => handleSelect(e.target.value)}>
                {props.store.dics.map(e => 
                    <option
                        key={e.id}
                        value={e.name}> 
                            {e.name} 
                    </option>)}                
            </select>
        );
    };
    const Ownerdic = ({store,onOwnerDicSelection}) => (
        <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                <AreaBox g={[2,2,10,5]} fd="column"> 
                    <div>СПРАВОЧНИК НАШИХ ФИРМ:</div>
                    <Select store={store} handler={onOwnerDicSelection}/>
                    
                        <select id="dogDicSelector">
                            <option value="ЮЛ">ЮЛ</option>
                            <option value="ИП">ИП</option>
                            <option value="ФЛ">ФЛ</option>
                        </select>
                    {store.dics.map(e => <div key={e.id}>{e.name}</div>)}
                    
                </AreaBox>
            </Grid>
        </Container>
        </div>
    );

    const mapStateToProps = _state => ({
        store: _state.ownerDic
    });
    const mapDispatchToProps = _dispatch => ({
        onOwnerDicSelection: data => _dispatch(actions.ownerDic(data))
    });

    export default connect (
        mapStateToProps,
        mapDispatchToProps
    )(Ownerdic);

    
    //export default Ownerdic;


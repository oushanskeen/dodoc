   
    import React, {useState,useEffect} from 'react';
    import { Link,useParams } from 'react-router-dom';
    import {connect} from 'react-redux';
    import assert from '../utils/assert';
    const doghead = require('../NOTEBOOK/Doghead/doghead');
    //import {getHeader} from './HEADER&FOOTERS/getHeader';

    const Dogovor = ({state,store}) => {
      console.log("state in dogovor: ", state);
      let {dogovor} = useParams();

//  Get dogovor data

    const getDogData = (_state,_id) => _state.dogDic.dics.filter(e => e.id===_id)[0].data;
    const dogData = getDogData(state,+dogovor);
    assert(
      "Get dogovor data form endpoint param",
       getDogData(state,+dogovor).dogName,
       "имя договора"           
    );

// Get holders data

   const getHoldersData = (_state,_oid,_aid) => (
     {
       owner:_state.ownerDic.dics.filter(e => e.id===_oid)[0].data,
       agent:_state.agentDic.dics.filter(e => e.id===_aid)[0].data  
     }
   );
   const holdersData = getHoldersData( state, dogData.ownerId, dogData.agentId );
   assert(
     "Get OWNER and AGENT data by id extracted form dogovor data for param===0",
      getHoldersData( state, dogData.ownerId, dogData.agentId ).owner.CompName,
     "ИП Попов"           
   );
   assert(
      "headOut processer works for YLYL",
      doghead(state, dogData.ownerId, dogData.agentId, dogData.dogovorType),
     "Общество с ограниченной ответственностью 'Умный Климат Инжениринг', в лице генерального директора Лылова Дмитрия Павловича, действующего на основании Устава, именуемое в дальнейшем 'Исполнитель', с одной стороны, и Общество с ограниченной ответственностью 'Аксинель', в лице генерального директора Царевского Анатолия Михайловича, действующего на основании Устава, именуемое в дальнейшем 'Заказчик', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: "           
   );
   const dogHeadOut = doghead(state, dogData.ownerId, dogData.agentId, dogData.dogovorType);
   
      
      //console.log("dogovor data: ", data(importData,state,IDs(curDogData(dogovor))));
      /*
      const currentOwner = JSON.stringify(); 
      const ext = {        
        owner: currentDog.owner,
        ownerId: currentDog.ownerId,
        agent: currentDog.agent,
        agentId: currentDog.agentId,
        dogType: currentDog.dogType,
        dogovorName: currentDog.dogName,
        date: currentDog.date,
        price: currentDog.price,
        systems: currentDog.systems
      };
      console.log("ext : ", ext);
      */
      //const importData = (_dic,_name) => _dic.filter(e => e.name===_name);

/*
      console.log(
        "owner data: ", data(importData,state,IDs(currentDog)).owner);
      console.log(
        "agent data: ", data(importData,state,IDs(currentDog)).agent);
      
  */    
      const header = (_getHeader,_dogType,_oData,_aData) => {
        _getHeader(_oData,_aData,_dogType);
      };
      const footer = (_getFooter,_dogType,_oData,_aData) => {
        agentFooter:  _getFooter[_dogType](_aData);
        ownerFooter:  _getFooter[_dogType](_oData); 
      }; 
      console.log("store in dogovor: ", store[dogovor]);

      return(
        <div>
          <div>current dogovor #: {dogovor}</div>
          <div>
            {dogHeadOut}
          </div>
          <div>
           ownersData : {JSON.stringify(holdersData.owner)}<br/>
           agentData :  {JSON.stringify(holdersData.agent)}
          </div>
            
        </div>)
    };


  const mapStateToProps = _state => ({
    state: _state,
    store: _state.dogDic.dics,
    //dic: _state.dogDic.dics,
    //owner: _state.ownerDic,
    //agent: _state.agentDic,
    //home: _state.home,
    //formData: _state.formDataNew,
    //dogovorData: _state.dogovorData
  });
  const mapDispatchToProps = _dispatch => ({
    //onDogovorData: data => _dispatch(actions.dogovorData(data))
  });

  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Dogovor);

  //export default Dogovor;


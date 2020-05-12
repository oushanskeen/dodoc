   
    import React, {useState,useEffect} from 'react';
    import { Link,useParams } from 'react-router-dom';
    import {connect} from 'react-redux';
    import assert from '../utils/assert';
    import {
      GlobalStyle,Container,Grid,AreaBox,Text,
      TextBox,Button,ParamBox,naked,
      NavbarDropdown,NavbarDropdownContent,link
    } from '../css/style.js';
    const makeDogovorHead = require
      ('../NOTEBOOK/Doghead/makeDogovorHead');
    const dogfoot = require('../NOTEBOOK/Dogfoot/footOut');
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
      makeDogovorHead(state, dogData.ownerId, dogData.agentId, dogData.dogovorType),
     "Общество с ограниченной ответственностью 'Умный Климат Инжениринг', в лице генерального директора Лылова Дмитрия Павловича, действующего на основании Устава, именуемое в дальнейшем 'Исполнитель', с одной стороны, и Общество с ограниченной ответственностью 'Аксинель', в лице генерального директора Царевского Анатолия Михайловича, действующего на основании Устава, именуемое в дальнейшем 'Заказчик', совместно именуемые в дальнейшем 'Стороны', или каждая в отдельности 'Сторона', заключили настоящий Договор, далее именуемый 'Договор', о нижеследующем: "           
   );

   const agentFoot = dogfoot(state , "agentDic" , dogData.agentId );
   console.log("agentFoot: ", agentFoot);
   assert(
    "agent foot",
    agentFoot,
    "ИП Колыхан Карина Олеговна ИНН: 343902925395 ОГРНИП: 317344300061296 Юр.адрес: Волгоградская область г.Фролово Банк: ПАО 'СБЕРБАНК РОССИИ' г.Москва БИК: 044525225 р/c: 40702810970010127006 к/с: 80101810645250000092 ИП Колыхан Карина Олеговна Колыхан.К.О"
);
  const ownerFoot = dogfoot(state , "ownerDic" , dogData.agentId );
  console.log(ownerFoot);  
   const dogHeadOut = makeDogovorHead   (state, dogData.ownerId, dogData.agentId, dogData.dogovorType);
   assert(
    "owner foot",
    ownerFoot,
    "Заказчик: undefined ИНН: IPИНН ОГРНИП: 317502700029527 Юр.адрес: undefined Банк: IPИМЯ БАНКА БИК: IPБИК р/c: IPРАСЧЁТНЫЙ СЧЁТ к/с: IPКОРЕСПОНДЕНТСКИЙ СЧЁТ undefined undefined"
);
  
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
        <GlobalStyle/>
        <Container>
          <Grid>
            <AreaBox g={[2,2,11,5]} fd="column" style={naked}>
              <TextBox h={"100%"} w={"auto%"}>
                <Text m={"2vmin"}>
                  <div>current dogovor #: {JSON.stringify(getDogData(state,+dogovor))}</div>
                  <div>
                   {dogHeadOut}
                  </div>
                  <div><br/>
                    owner foot : {JSON.stringify(ownerFoot)}<br/>
                    agent foot : {JSON.stringify(agentFoot)}
                  </div>

                  <div><br/>
                    ownersData : {JSON.stringify(holdersData.owner)}<br/>
                    agentData :  {JSON.stringify(holdersData.agent)}
                  </div>
                </Text>
              </TextBox>
            </AreaBox>
          </Grid>
        </Container>
        </div>
      )
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


    
import React from 'react';
import {
    dogSampleData,
    formOrgDataSample,
    formIPDataSample,
    formFLDataSample,
    serverData
    } 
    from "./MontajSampleData";
import {ClientDataORG,ClientDataIP,ClientDataFL} from './FormMap';
import {OrgHeader,IPHeader,FLHeader,ClientOrgFooter,ClientIPFooter,ClientFLFooter,ServerFooter} from './HsFs';
import * as actions from '../actions';
//import store from '../store';
import {connect} from 'react-redux';

const HeadFootOut = ({store}) => {
    const Store = store;
        
    const input = _store => {
        const Selector = _store.dogovorData.selectors;
        const FormData = _store.dogovorData.formData;
        return ((Selector === undefined && FormData === undefined) 
            ? 
            {
                clientType: "FL",
                clientData: formFLDataSample,
                serverType: "varOne"
            } :
            {
                clientType: (Selector.clientTypeSel === "организация") ? "ORG" : 
                (Selector.clientTypeSel == "физ лицо") ? "FL" : "IP",
                clientData: FormData,
                serverType: (Selector.servTypeSel === "сервер один") 
                    ? "varOne" : "varTwo" ,
            } 
        );
    };

    const a1 = input(Store).clientType;
    const b1 = input(Store).clientData;
    const c1 = input(Store).serverType;
    const d1 = serverData;

    // 1 
    const ClientType = _clientType => _clientType; 
    // 2
    const ClientData = (_clientType,_clientData) => {
        console.log("_clientType", _clientType);
        console.log("_clientData", _clientData);
        const chooseData = {
            ORG:_clientData => ClientDataORG(_clientData),
            IP:_clientData => ClientDataIP(_clientData),
            FL:_clientData => ClientDataFL(_clientData)
        };
        return chooseData[_clientType](_clientData);        
    };
    // 3
    const ServerData = (_serverType,_serverData) => {
        return  _serverData[_serverType];
    };
    // 4
    const DogData = _d => {
        return {
            name:_d.name,
            start:_d.start,
            end:_d.end,
            money:_d.money,
            systems:_d.systems 
        };
    };
    const ClientTypeOut = ClientType(a1);
    const ClientDataOut = ClientData(a1,b1);
    const ServerDataOut = ServerData(c,d);
    const DogDataOut = DogData(d); 

    // INPUT:
    const aa = ClientTypeOut;
    const bb = ClientDataOut;
    const cc = ServerDataOut;
    const HF = {
        ORG: (_b,_c) => [OrgHeader(_b,_c),ClientOrgFooter(_b,_c),ServerFooter(_c)[c]],
        IP:(_b,_c) => [IPHeader(_b,_c),ClientIPFooter(_b,_c),ServerFooter(_c)[c]],
        FL:(_b,_c) => [FLHeader(_b,_c),ClientFLFooter(_b,_c),ServerFooter(_c)[c]]       
    };
    const HeadFoot = (_a,_b,_c) => HF[_a](_b,_c);
    return(
        <div>
            <div>{HeadFoot(aa,bb,cc)[0]}</div>
            <hr/>
            <div>{HeadFoot(aa,bb,cc)[1]}</div>
            <hr/>
            <div>{HeadFoot(aa,bb,cc)[2]}</div>
        </div>
    );
    };

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
    )(HeadFootOut);

    

    
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
import assert from "../utils/assert";

const HeadFootOut = ({store,selectors,formData}) => {



    const DataMapper = () => {
        const Cmap = {
            "организация":"ORG",
            "ИП":"IP",    
            "физ лицо":"FL",
            "-":"-"
        };
        const Smap = {
            "сервер один":"varOne",
            "cервер два":"varTwo",
            "-":"-"        
        };
        const actualInput = {ct:selectors.clientTypeSel, cd:formData ,st:selectors.servTypeSel };
        const defaultInput = {ct:"FL", cd:formFLDataSample ,st:"varOne"};
        const input = (ai,di,cmap,smap) => {
            const DefaultData = () => di;
            const ActualData = () => {
                return {
                ct: cmap[ai.ct],
                cd: ai.cd,
                st: smap[ai.st]             
                }
            };
            //return (ai.ct === ai.cd) ? DefaultData() : ActualData();
            return (ai.ct === "-" && ai.cd === "-") ? DefaultData() : ActualData();
        };/*
        assert("Input is properly mapped to relevant object fields",
            input(
                {ct:"организация", cd:"actualTestData" ,st:"сервер один"},
                {ct:"FL", cd:"defaultTestData" ,st:"varOne"},
                Cmap,
                Smap),
            {ct: "ORG",cd: "actualTestData",st: "varOne"}
        );
        */
        return {
            a : input(actualInput,defaultInput,Cmap,Smap).ct,
            b : input(actualInput,defaultInput,Cmap,Smap).cd,
            c : input(actualInput,defaultInput,Cmap,Smap).st
        };
    };

    const a = DataMapper().a;
    const b = DataMapper().b;
    const c = DataMapper().c;
    const d = serverData;

    // 1 
    const HFROuter = () => {
        const ClientType = _clientType => _clientType; 
        // 2
        const ClientData = (_clientType,_clientData) => {
            const chooseData = {
                ORG:_clientData => ClientDataORG(_clientData),
                IP:_clientData => ClientDataIP(_clientData),
                FL:_clientData => ClientDataFL(_clientData),
                "-":_clientData => ClientDataFL(_clientData),
            };
            return chooseData[_clientType](_clientData);        
        };
        /*
        assert("Data is properly mapped to local keys",
            ClientData("ORG",
                { compFullName:1, compShortName:2, FIO:3, INN:4, KPP:5, OGRN:6, OKPO:7, GosRegDate:8, YurAdress:9, 
                  FactAdress:10, GenDirector:11, Buhgalter:12, tel:13, bankName:14, BIK:15, BillOne:16, BillTwo:17 }        
            ),
            { compFullName:1, compShortName:2, FIO:3, INN:4, KPP:5, OGRN:6, OKPO:7, GosRegDate:8, YurAdress:9, 
              FactAdress:10, GenDirector:11, Buhgalter:12, tel:13, bankName:14, BIK:15, BillOne:16, BillTwo:17 }
       );
        */
        const ServerData = (_serverType,_serverData) => {
            return  _serverData[_serverType];
        };
        /*
        assert("Relevant server data is returned by given key",
            ServerData("varOne",{"varOne":"VarOneData","varTwo":"VarTwoData"}),
            "VarOneData"
        );
        */
        console.log("hf return : ", {
            ClientType:ClientType,
            ClientData:ClientData,
            ServerData:ServerData
        });
        return{
            ClientType:ClientType,
            ClientData:ClientData,
            ServerData:ServerData
        }
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
        // INPUT:
    const aa = HFROuter().ClientType(DataMapper().a);
    const bb = HFROuter().ClientData(DataMapper().a,DataMapper().b);
    const cc = HFROuter().ServerData(DataMapper().c,serverData);
    const HeadFoot = (_a,_b,_c) => {
        const HF = {
            ORG: (_b,_c) => [OrgHeader(_b,_c),ClientOrgFooter(_b,_c),ServerFooter(_c)[c]],
            IP:(_b,_c) => [IPHeader(_b,_c),ClientIPFooter(_b,_c),ServerFooter(_c)[c]],
            FL:(_b,_c) => [FLHeader(_b,_c),ClientFLFooter(_b,_c),ServerFooter(_c)[c]],
            "-":(_b,_c) => [FLHeader(_b,_c),ClientFLFooter(_b,_c),ServerFooter(_c)[c]]        
        };
        return HF[_a](_b,_c);
    };
    //const aa = ClientType(a);
    //const bb = ClientData(a,b);
    //const cc = ServerData(c,d);
    return(
        <div>
            {console.log("{HeadFoot(aa,bb,cc)[0]} : ", HeadFoot(aa,bb,cc)[0])}
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
        selectors: _state.dogovorData.selectors,
        formData:_state.dogovorData.formData,
        dogovorData: _state.dogovorData
    });
    const mapDispatchToProps = _dispatch => ({
        onDogovorData: data => _dispatch(actions.dogovorData(data))
    });

    export default connect (
        mapStateToProps,
        mapDispatchToProps
    )(HeadFootOut);

    

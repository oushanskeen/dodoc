
    import React from 'react';
    import store from '../store';
    import {connect} from 'react-redux';
    import {
    dogSampleData,
    formOrgDataSample,
    formIPDataSample,
    formFLDataSample,
    serverData
    } 
    from "./MontajSampleData";  
    import {ClientDataORG,ClientDataIP,ClientDataFL} from './FormMap';
    
    

        const Store = store.getState();
        console.log("store inside MontajAPI : ", Store);
        console.log(Store.dogovorData.selectors === undefined);
        console.log(Store.dogovorData.formData === undefined);
       // const input = undefined;
        
        const input = _store => {
            const Selector = _store.dogovorData.selectors;
            const FormData = _store.dogovorData.formData;
            console.log("who asks conditional input??????? / /???");
            return ((Selector === undefined && FormData === undefined) 
                ? 
                {
                    clientType: "FL",
                    clientData: formFLDataSample,
                    serverType: "varOne"
                } :
                {
                    clientType: (Selector.clientTypeSel === "организация") ? "ORG" : "IP",
                    clientData: FormData,
                    serverType: Selector.serverTypeSel
                } 
            );
        };
        console.log("input store inside Montaj API: ", input(Store));

        const a = input(Store).clientType;
        const b = input(Store).clientData;
        const c = input(Store).serverType;
        const d = serverData;
        

        //  API'ED FORM DATA ------------------------------------------
        // Org data ----------------------------------------
       

        // OUTPUT:

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


                
        const ClientTypeOut = ClientType(a);
        //exportconst ClientDataOut = ClientData(a,b);
        //export const ServerDataOut = ServerData(c,d);
        //export const DogDataOut = DogData(d); 


    

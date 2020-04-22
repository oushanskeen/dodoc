    
import React from 'react';
import {
    dogSampleData,
    formOrgDataSample,
    formIPDataSample,
    formFLDataSample,
    ServerData} 
    from "./MontajSampleData";
import {
    dogData,
    ClientOrgData,
    ClientIPData,
    ClientFLData,} 
    from "./MontajAPI";

//  HEADER ELEMENTS -------------------------------------
    // Org -----------------------------------------------
    export const OrgHeader = p => (
        <div> {ServerData[p.clientType].CompName}, в лице 
            директора {ServerData[p.clientType].FIO}, 
            действующего на основании Устава, с одной 
            стороны, именуемое в дальнейшем {"Поставщик"}
            и {ClientOrgData(p.data).compFullName}, в лице
            генерального директора {ClientOrgData(p.data).
            FIO}, действующего(ей) на основании Устава, именуемое в дальнейшем «Покупатель»,
        </div>
    );
    // IP ---------------------------------------------
    export const IPHeader = p => (
        <div> 
            {ServerData[p.clientType].CompName}, в лице директора {ServerData[p.clientType].FIO},
            действующего на основании Устава, с одной стороны, именуемое в дальнейшем "Поставщик"
            и {ClientIPData(p.data).Name}, в лице генерального директора                
            {ClientIPData(p.data).FIO}, действующего(ей) на основании Устава, именуемое в
            дальнейшем «Покупатель»,
        </div>
        );
        // FL
        export const FLHeader = p => (
            <div> 
                {ServerData[p.clientType].CompName}, в лице директора
                {ServerData[p.clientType].FIO}, действующего 
                на основании Устава, с одной стороны, именуемое в дальнейшем 
                "Поставщик" и {ClientFLData(p.data).lastName}{ClientFLData(p.data).firstName}
                {ClientFLData(p.data).midName}, {ClientFLData(p.data).lastName} серия
                {ClientFLData(p.data).Serial} номер {ClientFLData(p.data).number}, 
                выдан {ClientFLData(p.data).whoGave} {ClientFLData(p.data).whenGave} код
                подразделения {ClientFLData(p.data).codeGave}, именуемый(ая) 
                в дальнейшем «Покупатель»,
            </div>
        );

    // FOOTERS ------------------------------------------------

        // Org ------------------------------------------------
        export const ClientOrgFooter = p => (
            <div>
                Покупатель:{ClientOrgData(p.data).compShortName}<br/>
                ИНН: {ClientOrgData(p.data).INN}<br/>
                КПП: {ClientOrgData(p.data).KPP}<br/>
                ОГРН: {ClientOrgData(p.data).OGRN}<br/>
                Юр.адрес: {ClientOrgData(p.data).YurAdress}<br/>
                Факт.адрес: {ClientOrgData(p.data).FactAdress}<br/>
                Банк: {ClientOrgData(p.data).bankName}<br/>
                БИК: {ClientOrgData(p.data).BIK}<br/>
                р/с: {ClientOrgData(p.data).BillOne}<br/>
                к/с: {ClientOrgData(p.data).BillTwo}<br/>
                <br/>
                подписи<br/>
                <br/>
                {ClientOrgData(p.data).compShortName}<br/>
                <br/>
                _____________/инициалы(Ген. директор {ClientOrgData(p.data).FIO})/<br/>
                <br/>
                место печати (м.п.)<br/>
           </div>
        );
        // IP ------------------------------------------------
        export const ClientIPFooter = p => (
            <div>
                Покупатель: {ClientIPData(p.data).Name}<br/>
                ИНН: {ClientIPData(p.data).INN}<br/>
                ОГРНИП: {ClientIPData(p.data).OGRNIP}<br/>
                Факт.адрес: {ClientIPData(p.data).FactAdress}<br/>
                Банк: {ClientIPData(p.data).bankName}<br/>
                БИК: {ClientIPData(p.data).BIK}<br/>
                р/с: {ClientIPData(p.data).BillOne} <br/>
                к/с: {ClientIPData(p.data).BillTwo}<br/>
                <br/>
                подписи<br/>
                <br/>
                {ClientIPData.Name}<br/>
                <br/>
                _____________/(инициалы {(ClientIPData.FIO)})/<br/>
                <br/>
                _____________________________________________________________________________
            </div>
        );
        // FL ----------------------------------------------------------------------------
        export const ClientFLFooter = p => (
            <div>
                Покупатель:<br/>
                {ClientFLData(p.data).lastName} {ClientFLData(p.data).firstName}
                {ClientFLData(p.data).midName}<br/>
                {ClientFLData(p.data).docType} серия {ClientFLData(p.data).Serial}<br/>
                номер {ClientFLData(p.data).number}<br/>
                выдан {ClientFLData(p.data).whoGave} {ClientFLData(p.data).whenGave} <br/>
                код подразделения {ClientFLData(p.data).codeGave}<br/>
                <br/>
                подписи<br/>
                <br/>
                _____________/(инициалы {ClientFLData(p.data).lastName}
                {ClientFLData(p.data).firstName} <br/>      
                {ClientFLData(p.data).midName})/<br/>
            </div>
        );

        export const setDogType = (_clientType,_serverType,_data) => {
            switch (_serverType){
                case ("Org"):
                    return {
                        head: <OrgHeader clientType={_clientType} data={_data}/>, 
                        foot: <ClientOrgFooter data={_data}/>
                    };
                case ("IP"):
                    return {
                        head: <IPHeader clientType={_clientType} data={_data}/>,
                        foot: <ClientIPFooter data={_data}/>
                    };
                case ("FL"):
                    return {
                        head: <FLHeader clientType={_clientType} data={_data}/>, 
                        foot: <ClientFLFooter data={_data}/>
                    };
                default:
                    return "No information";
            };
        }; 
    

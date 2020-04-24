import React from 'react';

//  HEADER ELEMENTS -------------------------------------
    // Org -----------------------------------------------
    export const OrgHeader = (_clientData,_serverData) => (
        <div> {_serverData.CompName}, в лице 
            директора {_serverData.FIO}, 
            действующего на основании Устава, с одной 
            стороны, именуемое в дальнейшем {"Поставщик"}
            и {_clientData.compFullName}, в лице
            генерального директора {_clientData.
            FIO}, действующего(ей) на основании Устава, именуемое в 
            дальнейшем «Покупатель»,
        </div>
     );
    // IP ---------------------------------------------
    export const IPHeader = (_clientData,_serverData) => (
        <div>  {_serverData.CompName}, в лице директора  {_serverData.FIO},
            действующего на основании Устава, с одной стороны, именуемое в
            дальнейшем "Поставщик" и {_clientData.Name}, в лице генерального
            директора {_clientData.FIO}, действующего(ей) на основании
            Устава, именуемое в дальнейшем «Покупатель»,
        </div>
    );
    // FL
    export const FLHeader = (_clientData,_serverData) => (
        <div> {_serverData.CompName}, в лице директора {_serverData.FIO},   
            действующего на основании Устава, с одной стороны, именуемое в
            дальнейшем "Поставщик" и {_clientData.lastName}
            {_clientData.firstName} {_clientData.midName},              
            {_clientData.lastName} серия {_clientData.Serial} номер
            {_clientData.number}, выдан {_clientData.whoGave} 
            {_clientData.whenGave} код подразделения    
            {_clientData.codeGave}, именуемый(ая) в дальнейшем             
            «Покупатель»,
        </div>
    );
    

    // FOOTERS ------------------------------------------------

        // Org ------------------------------------------------
        export const ClientOrgFooter = (_clientData,_serverData) => (
            <div>
                Покупатель:{_clientData.compShortName}<br/>
                ИНН: {_clientData.INN}<br/>
                КПП: {_clientData.KPP}<br/>
                ОГРН: {_clientData.OGRN}<br/>
                Юр.адрес: {_clientData.YurAdress}<br/>
                Факт.адрес: {_clientData.FactAdress}<br/>
                Банк: {_clientData.bankName}<br/>
                БИК: {_clientData.BIK}<br/>
                р/с: {_clientData.BillOne}<br/>
                к/с: {_clientData.BillTwo}<br/>
                <br/>
                подписи<br/>
                <br/>
                {_clientData.compShortName}<br/>
                <br/>
                _____________/инициалы(Ген. директор {_clientData.FIO})/<br/>
                <br/>
                место печати (м.п.)<br/>
           </div>
        );
        
        // IP ------------------------------------------------
        export const ClientIPFooter = (_clientData,_serverData) => (
            <div>
                Покупатель: {_clientData.Name}<br/>
                ИНН: {_clientData.INN}<br/>
                ОГРНИП: {_clientData.OGRNIP}<br/>
                Факт.адрес: {_clientData.FactAdress}<br/>
                Банк: {_clientData.bankName}<br/>
                БИК: {_clientData.BIK}<br/>
                р/с: {_clientData.BillOne} <br/>
                к/с: {_clientData.BillTwo}<br/>
                <br/>
                подписи<br/>
                <br/>
                {_clientData.Name}<br/>
                <br/>
                _____________/(инициалы {(_clientData.FIO)})/<br/>
                <br/>
                _______________________________________________________
            </div>
        );
        // FL ----------------------------------------------------------------------------
        export const ClientFLFooter = (_clientData,_serverData) => (
            <div>
                Покупатель:<br/>
                {_clientData.lastName} {_clientData.firstName}
                {_clientData.midName}<br/>
                {_clientData.docType} серия {_clientData.Serial}<br/>
                номер {_clientData.number}<br/>
                выдан {_clientData.whoGave} {_clientData.whenGave} <br/>
                код подразделения {_clientData.codeGave}<br/>
                <br/>
                подписи<br/>
                <br/>
                _____________/(инициалы {_clientData.lastName}
                {_clientData.firstName} <br/>      
                {_clientData.midName})/<br/>
            </div>
        );
        export const ServerFooter = _serverData=> {
            return {
                varOne:(        
                    <div>
                        Имя Компании:{_serverData.CompName}<br/>
                        ФИО:{_serverData.FIO}<br/>
                        ИНН: {_serverData.INN}<br/>
                        ОГРН: {_serverData.OGRN}<br/>
                        Юридический адрес: {_serverData.yurAdress}<br/>
                        Банк: {_serverData.bank}<br/>
                        БИК: {_serverData.BIK}<br/>
                        р/с: {_serverData.firstBill}<br/>
                        к/c: {_serverData.secondBill}<br/>
                    </div>),
                varTwo:(
                    <div>
                        Имя Компании:{_serverData.CompName}<br/>
                        ФИО:{_serverData.FIO}<br/>
                        ИНН: {_serverData.INN}<br/>
                        ОГРН: {_serverData.OGRN}<br/>
                        Юридический адрес: {_serverData.yurAdress}<br/>
                        Банк: {_serverData.bank}<br/>
                        БИК: {_serverData.BIK}<br/>
                        р/с: {_serverData.firstBill}<br/>
                        к/c: {_serverData.secondBill}<br/>
                    </div>),
                };
        };
        
  

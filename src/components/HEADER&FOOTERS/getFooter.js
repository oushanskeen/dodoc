import React from 'react'; 

    // FOOTERS ------------------------------------------------

        // Org ------------------------------------------------
        const YLFooter = _data => (
            <div>
                Покупатель:{_data.compShortName}<br/>
                ИНН: {_data.INN}<br/>
                КПП: {_data.KPP}<br/>
                ОГРН: {_data.OGRN}<br/>
                Юр.адрес: {_data.YurAdress}<br/>
                Факт.адрес: {_data.FactAdress}<br/>
                Банк: {_data.bankName}<br/>
                БИК: {_data.BIK}<br/>
                р/с: {_data.BillOne}<br/>
                к/с: {_data.BillTwo}<br/>
                <br/>
                подписи<br/>
                <br/>
                {_data.compShortName}<br/>
                <br/>
                _____________/инициалы(Ген. директор {_data.FIO})/<br/>
                <br/>
                место печати (м.п.)<br/>
           </div>
        );
        
        // IP ------------------------------------------------
        const IPFooter = _data => (
            <div>
                Покупатель: {_data.Name}<br/>
                ИНН: {_data.INN}<br/>
                ОГРНИП: {_data.OGRNIP}<br/>
                Факт.адрес: {_data.FactAdress}<br/>
                Банк: {_data.bankName}<br/>
                БИК: {_data.BIK}<br/>
                р/с: {_data.BillOne} <br/>
                к/с: {_data.BillTwo}<br/>
                <br/>
                подписи<br/>
                <br/>
                {_data.Name}<br/>
                <br/>
                _____________/(инициалы {(_data.FIO)})/<br/>
                <br/>
                _______________________________________________________
            </div>
        );
        // FL ----------------------------------------------------------------------------
        const FLFooter = _data => (
            <div>
                Покупатель:<br/>
                {_data.lastName} {_data.firstName}
                {_data.midName}<br/>
                {_data.docType} серия {_data.Serial}<br/>
                номер {_data.number}<br/>
                выдан {_data.whoGave} {_data.whenGave} <br/>
                код подразделения {_data.codeGave}<br/>
                <br/>
                подписи<br/>
                <br/>
                _____________/(инициалы {_data.lastName}
                {_data.firstName} <br/>      
                {_data.midName})/<br/>
            </div>
        );
        
        export const getFooter = (_data,_holderType) => {
            switch(_holderType){
                case "YL": return YLFooter(_data);
                case "IP": return IPFooter(_data);
                case "FL": return FLFooter(_data)
            };
        };
        

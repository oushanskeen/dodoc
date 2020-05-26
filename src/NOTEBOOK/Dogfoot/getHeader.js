import React from 'react';
  const dogTypeSet = dogtType => {
    switch (dogType){
      case "Поставка":
        return ["Поставщик","Покупатель"];
      case "Проектирование":
        return ["Исполнитель","Заказчик"];
    };
  }; 
//  HEADER ELEMENTS -------------------------------------
    // Org -----------------------------------------------
    const YLHeader = (_clientData,_serverData) => (
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
    const yloh = (data,dogType) => `
        ${data.CompFullName} в лице директора ${data.FIO}, действующего
	на основании Устава, с одной стороны именуемое в дальнейшем
	${dogTypeSet(dogType)}`
    
    const ylah = data => `
      ${data.compFullName}, в лице генерального директора
      ${data.FIO}, действующего(ей) на основании Устава, именуемое
      в дальнейшем ${dogTypeSet(dogType)}
    `;

    // IP ---------------------------------------------
    const IPHeader = (_clientData,_serverData) => (
        <div>  {_serverData.CompName}, в лице директора  
	    {_serverData.FIO}, действующего на основании Устава, с 
	    одной стороны, именуемое в дальнейшем "Поставщик" и 
	    {_clientData.Name}, в лице генерального директора 
	    {_clientData.FIO}, действующего(ей) на основании Устава, 
	    именуемое в дальнейшем «Покупатель»,
        </div>
    );
    const ipoh = (data,dogType)=>`
      {data.CompName}, в лице директора {data.FIO}, действующего
      на основании Устава, с одной стороны, именуемое в дальшейнем
      ${dogTypeSet(dogType)}
    `;
    const ipah = (data,dogType) => `
      и ${data.CompName}, в лице генерального директора 
      ${data.FIO}, действующего(ей) на основании Устава,
      именуемое в дальшейнем ${dogTypeSet(dogType)}
    `;

    // FL
    const FLHeader = (_clientData,_serverData) => (
        <div> {_serverData.CompName}, в лице директора 
	    {_serverData.FIO}, действующего на основании Устава, 
	    с одной стороны, именуемое в
            дальнейшем "Поставщик" и {_clientData.lastName}
            {_clientData.firstName} {_clientData.midName},              
            {_clientData.lastName} серия {_clientData.Serial} номер
            {_clientData.number}, выдан {_clientData.whoGave} 
            {_clientData.whenGave} код подразделения    
            {_clientData.codeGave}, именуемый(ая) в дальнейшем             
            «Покупатель»,
        </div>
    );
    
    export const getHeader = (_clientData,_serverData,_dogType) => {
        switch(_dogType){
            case "YL": return YLHeader(_clientData,_serverData);
            case "IP": return IPHeader(_clientData,_serverData);
            case "FL": return FLHeader(_clientData,_serverData)
        };
    };
    

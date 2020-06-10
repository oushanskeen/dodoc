const YL =
    {
        id:"",
        name:"",
        type:"YL",
        compFullName: "-",
        compShortName: "-",
        INN: "-",
        KPP:"-",
        OGRN:"-",
        OKPO:"-",
        GosRegDate:"-",
        YurAdress:"-",
        FactAdress:"-",
        GenDirector:"-",
        Buhgalter:"-",
        tel:"-",
        bankName:"-",
        BIK:"-",
        RS:"-",
        KS:"-"
    }
const IP= 
    {
        id:"",
        name:"",
        type:"IP",
        Name: "-",
        FIO: "-",
        INN: "-",
        OGRNIP:"-",
        OKPO:"-",
        FactAdress:"-",
        bankName:"-",
        BIK:"-",
        RS:"-",
        KS:"-"
    };
const FL = 
    {
        id:"",
        name:"",
        type:"FL",
        NameInformal: "-",
        lastName: "-",
        firstName: "-",
        midName:"-",
        docType:"-",
        Serial:"-",
        number:"-",
        whoGave:"-",
        whenGave:"-",
        codeGave:"-",
        addressGave:"-"
    };
const formDefaultData = "formDefaultData";
let initStateForNewDogovor= {
      id: "",
      name: "",
      date: "",
      objName: "",
      objId: "",
      agentName: "",
      agentId: "",
      ownerName:"",
      ownerId: "",
      dogovorType: "",
      systems:"",
      price:"",
}; 
let initStateForNewActor = actorType => {
    switch (actorType){
        case "YL":
            return YL;
        case "IP":
            return IP;
        case "FL":
            return FL;
        default:
            return "pardon, have no idea about actor type"    
    };
};
let initStateForNewObject= {
      id:"-",
      name: "-",
      adress: "-",
      contactsFIO: "-",
      workRegime:"-"
}; 
const systemsDataVector = [
  "вентиляция и кондиционирование","отопление",
  "котельная",
  "водоснабжение и канализация",
  "ЭОМ",
  "слаботочные сети",
  "автоматизация"
];
const dogovorTypes = [
  "Договор проектирования",
  "Договор поставки",
];
const companyTypes = ["YL","IP","FL"];


const state = 
{
    hello:"hello",
    initStateForNewDogovor:initStateForNewDogovor,
    initStateForNewObject:initStateForNewObject,
    systemsDataVector:systemsDataVector,
    dogovorTypes:dogovorTypes,
    dogTypes: {YL:YL,IP:IP,FL:FL},
    initStateForNewActor:initStateForNewActor,
    initStateForNewObject:initStateForNewObject,
    companyTypes:companyTypes
};

export {state};

const YL =
    {
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
        BillOne:"-",
        BillTwo:"-"
    }
const IP= 
    {
        Name: "-",
        FIO: "-",
        INN: "-",
        OGRNIP:"-",
        OKPO:"-",
        FactAdress:"-",
        bankName:"-",
        BIK:"-",
        BillOne:"-",
        BillTwo:"-"
    };
const FL = 
    {
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
const systemsDataVector = [
  "вентиляция и кондиционирование",
  "отопление",
  "котельная",
  "водоснабжение и канализация",
  "ЭОМ",
  "слаботочные сети",
  "автоматизация"
];
const dogovorTypes = ["Проектирование","Поставка"];


const state = 
{
    hello:"hello",
    initStateForNewDogovor:initStateForNewDogovor,
    systemsDataVector:systemsDataVector,
    dogovorTypes:dogovorTypes,
    dogTypes: {YL:YL,IP:IP,FL:FL}
};

export {state};

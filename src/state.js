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


const state = 
{
    hello:"hello",
    formData: formDefaultData,
    dogovorData:{},
    dogTypes: {YL:YL,IP:IP,FL:FL}
};

export {state};

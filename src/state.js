const z1 =
{ 
    sampleData:{type:
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
    }
}
const z2 = 
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
const z3 = 
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
    zakazchikTypes: {z1:z1,z2:z2,z3:z3}
};

export {state};

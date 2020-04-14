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

const dialects = {
    basic:
    [
        "имя нашей компании",
        "имя директора нашей компании",
        "имя их компании",
        "имя директора их компании"
    ],
    make:
    [
        "имя подрядчика",
        "имя директора подрядчика",
        "имя звквзчика",
        "имя директора заказчика"
    ],
    sell:
    [
      "имя поставщик",
      "имя директора поставщика",
      "имя покупателя",
      "имя директора покупателя"
    ]
  
};

const state = 
{
    hello:"hello",
    yurlitzas: [ "Добровент", "Доброклад", "Доброход" ],
    dogovorTypes:["проектирование","поставка"],
    currentVars:
    [
        "ourCompanyName",
        "ourDirectorName",
        "theirCompanyName",
        "theirDirectorName"
    ],
    varDialects: dialects,
    formData: formDefaultData,
    zakazchikTypes: {z1:z1,z2:z2,z3:z3}
};

export {state};

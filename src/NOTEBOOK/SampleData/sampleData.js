const sampleData = 
{agentDic:
    {dics:
      [ 
        {
          id:0,
          type:"YL",
          data:
            {
              compFullName:"Общество с ограниченной ответственностью 'Аксинель'",
              compShortName: "ОOO 'Аксинель'",
              FIO:"Царевского Анатолия Михайловича", 
              INN:"7724912950",
              KPP:"772401001",
              OGRN:"1147746259430",
              OKPO:"ORGОКРО",
              GosRegDate:"ORGДАТА ГОС РЕГИСТРАЦИИ",
              YurAdress:"115404, Россия, Москва, Радиальная 6-я улица, дом 7а строение 2, комната 1 эт 2",
              FactAdress:"ORGФАКТИЧЕСКИЙ АДРЕСС",
              GenDirector:"ORGГЕН ДИРЕКТОР",
              Buhgalter:"ORGБУХГАЛТЕР",
              tel:"ORGТЕЛЕФОН",
              bankName:"МОСКОВСКИЙ ФИЛИАЛ АО КБ 'МОДУЛЬБАНК'",
              BIK:"044525092",
              BillOne:"40702810970010127006",
              BillTwo:"80101810645250000092",
              signature: "Царевский.А.М"
            }  
        },
        {
          id:1,
          type:"IP",
          data:
            {
              FullName:"Индивидуальный предприниматель Колыхан Карина Олеговна",
              ShortName: "ИП Колыхан Карина Олеговна",
              FIO:"Колыхан Карина Олеговна",
              INN:"343902925395",
              OGRNIP:"317344300061296",
              OGRNIPDate:"2 мая 2017",
              OKPO:"IPОКРО",
              YurAdress:"Волгоградская область г.Фролово",
              FactAdress:"IPФАКТИЧЕСКИЙ АДРЕСС",
              bankName:"ПАО 'СБЕРБАНК РОССИИ' г.Москва",
              BIK:"044525225",
              BillOne:"40702810970010127006",
              BillTwo:"80101810645250000092",
              signature: "Колыхан.К.О"
            }
        },
        {
          id:2,
          type:"FL",
          data:
            {
              NameInformal:"FLНЕФОРМАЛЬНОЕ ИМЯ",
              lastName:"Иночкин",
              firstName:"Игорь",
              midName:"Владимирович",
              docType:"паспорт",
              Serial:"4519",
              number:"022226",
              whoGave:"ГУ МВД РОССИИ ПО Г.МОСКВЕ",
              whenGave:"25.01.2019",
              codeGave:"770-045",
              addressGave:"FLГДЕ ВЫДАН",
              signature: "Иночкин И.В."
            }
        }
      ]
    },
  
  ownerDic:
    {dics:
      [
        {
          id:0,
          type:"YL",
          data:
            {
              compFullName:"Общество с ограниченной ответственностью 'Умный Климат Инжениринг'",
              compShortName: "ОOO 'Умный Климат Инжениринг'",
              FIO:"Лылова Дмитрия Павловича", 
              INN:"ORGИНН",
              KPP:"ORGКПП",
              OGRN:"ORGОГРН",
              OKPO:"ORGОКРО",
              GosRegDate:"ORGДАТА ГОС РЕГИСТРАЦИИ",
              YurAdress:"ORGЮРИДИЧЕСКИЙ АДРЕСС",
              FactAdress:"ORGФАКТИЧЕСКИЙ АДРЕСС",
              GenDirector:"ORGГЕН ДИРЕКТОР",
              Buhgalter:"ORGБУХГАЛТЕР",
              tel:"ORGТЕЛЕФОН",
              bankName:"ORGИМЯ БАНКА",
              BIK:"ORGБИК",
              BillOne:"ORGРАСЧЁТНЫЙ СЧЁТ",
              BillTwo:"ORGКОРРЕСПОНДЕНДТСКИЙ СЧЁТ"
            }
        },
        {
          id:1,
          type:"IP",
          data:
            {
              Name:"Индивидуальный предприниматель Попов Александр Петрович",
              FIO:"Попов Александр Петрович",
              INN:"IPИНН",
              OGRNIP:"317502700029527",
              OGRNIPDate:"2 мая 2017",
              OKPO:"IPОКРО",
              FactAdress:"IPФАКТИЧЕСКИЙ АДРЕСС",
              bankName:"IPИМЯ БАНКА",
              BIK:"IPБИК",
              BillOne:"IPРАСЧЁТНЫЙ СЧЁТ",
              BillTwo:"IPКОРЕСПОНДЕНТСКИЙ СЧЁТ"
           }
        },
        {
          id:2,
          type:"FL",
          data:
            {
              NameInformal:"FLНЕФОРМАЛЬНОЕ ИМЯ",
              lastName:"Попов",
              firstName:"Александр",
              midName:"Петрович",
              docType:"паспорт",
              Serial:"4512",
              number:"123421",
              whoGave:"ГУ МВД РОССИИ ПО Г.МОСКВЕ",
              whenGave:"25.01.2019",
              codeGave:"770-007",
              addressGave:"FLГДЕ ВЫДАН"
            }
        }
      ]
    }
};
      //const osd = {yl:yl,ip:ip,fl:fl};

      module.exports = sampleData;

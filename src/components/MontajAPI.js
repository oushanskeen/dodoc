    //  API'ED FORM DATA -----------------------------------------------------------------------------------------------------

    export const dogData = _d => {
        return {
            name:_d.name,
            start:_d.start,
            end:_d.end,
            money:_d.money,
            systems:_d.systems 
        };
    };    

    // Org data ---------------------------------------------------------------------------------------------------------
    export const ClientOrgData = _d => {
        return {
            compFullName:_d.compFullName,
            compShortName:_d.compShortName,
            FIO:_d.FIO, 
            INN:_d.INN,
            KPP: _d.KPP,
            OGRN:_d.OGRN,
            OKPO:_d.OKPO,
            GosRegDate:_d.GosRegDate,
            YurAdress:_d.YurAdress,
            FactAdress:_d.FactAdress,
            GenDirector:_d.GenDirector,
            Buhgalter:_d.Buhgalter,
            tel:_d.tel,
            bankName:_d.bankName,
            BIK:_d.BIK,
            BillOne:_d.BillOne,
            BillTwo:_d.BillTwo
        };
    };
    // IP data -----------------------------------------------------------------------
    export const ClientIPData = _d => {
        return {
            Name:_d.Name,
            FIO:_d.FIO,
            INN:_d.INN,
            OGRNIP:_d.OGRNIP,
            OKPO:_d.OKPO,
            FactAdress:_d.FactAdress,
            bankName:_d.bankName,
            BIK:_d.BIK,
            BillOne:_d.BillOne,
            BillTwo:_d.BillTwo
       };
    };
    // FL data ---------------------------------------------------------------------
    export const ClientFLData = _d => {
        return {
            NameInformal:_d.NameInformal,
            lastName:_d.lastName,
            firstName:_d.firstName,
            midName:_d.midName,
            docType:_d.docType,
            Serial:_d.Serial,
            number:_d.number,
            whoGave:_d.whoGave,
            whenGave:_d.whenGave,
            codeGave:_d.codeGave,
            addressGave:_d.addressGave
        };
    };

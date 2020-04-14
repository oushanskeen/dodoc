
    import React from 'react';
    import font from '../css/Roboto_Mono/RobotoMono-Medium.ttf'
    import {
        Page,
        Text,
        View,
        Document,
        StyleSheet,
        PDFDownloadLink,
        Font,
    } from "@react-pdf/renderer";

    // Register font
    Font.register({
      family: 'Roboto Mono',
      src: font
    })

    const styles = StyleSheet.create({
        page: {
	        margin: "2em auto",
            fontFamily: "Roboto Mono",
            display: "flex",
            wordBreak: "break-word",
            border:"1px solid black",
	        hyphens: "auto"
        },
        section: {
            margin: 10,
            padding: 10,
        },
        content: {
            display: "block"
        }
    });

    let sampleDataOne = {type:
        {
            compFullName: " - ",
            compShortName: " - ",
            INN: " - ",
            KPP: " - ",
            OGRN: " - ",
            OKPO: " - ",
            GosRegDate: " - ",
            YurAdress: " - ",
            FactAdress: " - ",
            GenDirector: " - ",
            Buhgalter: " - ",
            tel: " - ",
            bankName: " - ",
            BIK: " - ",
            BillOne: " - ",
            BillTwo: " - ",
        }
    };
    let sampleDataTwo = {type:
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
        }
    };
    let sampleDataThree = {type:
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
        }
    };
    
    const templateOne = (_data = sampleDataOne.type) => {
        return ("Нашакомпания ,в лице директора ФИОдиректора Нашей Компании действующего на основании Устава, с одной стороны, именуемое в дальнейшем 'Поставщик' и " +
        _data.compFullName + " , в лице генерального директора  ФИО второй стороны , действующего(ей) на основании Устава, именуемое в дальнейшем 'Покупатель',РЕКВИЗИТЫ СТОРОН: " + 
        " Покупатель: " + _data.compShortName  +
        " ИНН: " + _data.INN +
        " КПП: " + _data.KPP +
        " ОГРН: " + _data.OGRN + 
        " Юр.адрес: " + _data.YurAdress +
        " Факт.адрес: " + _data.FactAdress +
        " Банк: " +  _data.bankName +
        " БИК: " +  _data.BIK +
        " р/с: " +  _data.BillOne +
        " к/с: " +  _data.BillTwo +
        " ")
    };
    const templateTwo = (_data = sampleDataTwo.type) => {
        return("Наша компания, в лице директора ФИОдиректора нашей компании, действующего на основании Устава, с одной стороны, именуемое в дальнейшем 'Поставщик' и " + _data.Name + " , в лице генерального директора " + _data.FIO + ", действующего(ей) на основании Устава, именуемое в дальнейшем 'Покупатель', РЕКВИЗИТЫ СТОРОН: Покупатель: " + 
_data.Name + " ИНН: " + _data.INN + " ОГРНИП: " + _data.OGRNIP + " Факт.адрес: " +  _data.FactAdress + " Банк: " + _data.bankName +
" БИК: " +  _data.BIK + " р/с: " + _data.BillOne + " к/с: " +  _data.BillTwo + " подписи " + _data.Name + " _/инициалы(ФИО)/ " + _data.FIO + ""
        )
    };
    const templateThree = (_data = sampleDataTwo.type) => {
        return("Нашакомпания, в лице директора ФИОдиректора нашей компании, действующего на основании Устава, с одной стороны, именуемое в дальнейшем 'Поставщик' и " + _data.lastName + " " + _data.firstName + " " + _data.midName + " , " + _data.docType + " серия " + _data.Serial + " номер " +  _data.number + " , выдан " +  _data.whoGave + " " +  _data.whenGave + " код подразделения " +  _data.codeGave + " , именуемый(ая) в дальнейшем 'Покупатель', РЕКВИЗИТЫ СТОРОН: Покупатель: "  + _data.lastName + " " + _data.firstName + " " + _data.midName + " , " + _data.docType + " серия " + _data.Serial + " номер " +  _data.number + " , выдан " +  _data.whoGave + " " +  _data.whenGave + " код подразделения " +  _data.codeGave + " подписи _/инициалы(ФИО)/"
        );
    };

    const zakazchik = {
        one:{ template: templateOne, data: sampleDataOne },
        two:{ template: templateTwo, data: sampleDataTwo },
        three:{ template: templateThree, data: sampleDataThree }
    };

    const data_to_text = (_data,_store) => {
        console.log("data_to_text on load : ", _store);
        const hold = Object.keys(JSON.parse(_data))[0];
        switch (hold) {
            case 'zakazchikTypeOneData':
                return JSON.stringify(zakazchik.one.template(JSON.parse(_data)[hold]));
            case 'zakazchikTypeTwoData':
                return JSON.stringify(zakazchik.two.template(JSON.parse(_data)[hold]));
            case 'zakazchikTypeThreeData':
                return JSON.stringify(zakazchik.three.template(JSON.parse(_data)[hold]));
            default:
                return "whatever";
        }
    };

    const PdfDocument = _props => (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.content}>
                        {_props.text}
                    </Text>
                </View>
            </Page>
        </Document>
    );

    const BeautyText = (_props) => (
      <div>
        <PdfDocument text={data_to_text(_props.text,_props.store)}/>
        <PDFDownloadLink 
            document={<PdfDocument 
                text={data_to_text(_props.text,_props.store)}/>
            } 
            fileName="somename.pdf"
        >
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Забери PDF если считаешь что он ок.')}
        </PDFDownloadLink>
      </div>
    );

    export default BeautyText;

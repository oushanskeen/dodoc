
    import React, {useState} from 'react';
    import '../css/latex.css';
    import { PDFViewer } from '@react-pdf/renderer';
    import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

    // Create styles
    const styles = StyleSheet.create({
      page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
      }
    });
  
    const Beauty = () => (
        <PDFViewer>
        <View style={style.section}>
            <p>{`
                {нашакомпания}, в лице директора {ФИОдиректора
                c нашей компании}, действующего на основании
                Устава, с одной стороны, именуемое в            дальнейшем 
"Поставщик" и {Полноеназваниеорганизации}, в лице 
                генерального директора {ФИО}, действующего(ей) на основании 
                Устава, именуемое в дальнейшем «Покупатель»,
                `}
            </p>
            <p><br/>   
                РЕКВИЗИТЫ СТОРОН:<br/>
                Покупатель:<br/>
                {`Краткое название организации`}<br/>
                ИНН: {`ИНН`}<br/>
                КПП: {`КПП`}<br/>
                ОГРН: {`ОГРН`}<br/>
                Юр.адрес: {`Юридическийадрес`}<br/>
                Факт.адрес: {`Фактическийадрес`}<br/>
                Банк: {`Наименование банка`}<br/>
                БИК: {`БИК`}<br/>
                р/с: {`Расчетныйсчёт`}<br/>
                к/с: {`Корр.счёт`}<br/>
                подписи<br/>

                
            </p>
            <p><br/>
            <br/>
            {`Краткое название организации`}<br/>
            <br/>
            _/{`инициалы(Ген. директор (ФИО)`}/<br/>
            <br/>
            место печати (м.п.)<br/>
            </p>    
        </div>
        </PDFViewer>
    );

    export default Beauty;


    import React, {useState} from 'react';
    //import '../css/latex.css';
    //import Pdf from "react-to-pdf";
    import font from '../css/Roboto_Mono/RobotoMono-Medium.ttf'

    import {
        Page,
        Text,
        View,
        Document,
        StyleSheet,
        Image,
        PDFDownloadLink,
        Font,
        BlobProvider
    } from "@react-pdf/renderer";
    //import { StyleSheet, Font } from '@react-pdf/renderer'

    // Register font
    Font.register({
      family: 'Roboto Mono',
      src: font
    })

    // Reference font
    //const styles = StyleSheet.create({
    //  title: {
    //    fontFamily: 'Roboto'
    //  }
    //})
    //import { PDFDownloadLink } from "@react-pdf/renderer";

    const styles = StyleSheet.create({
        page: {
            //minWidth: "43.75em",
	        margin: "2em auto",
            fontFamily: "Roboto Mono",
            display: "flex",
            wordBreak: "break-word",
            //backgroundColor: "lightGrey",
            border:"1px solid black",
	        hyphens: "auto"
        },
        section: {
            margin: 10,
            padding: 10,
            //textAlign: "start",
            //border:"1px solid red"
        },
        content: {
            display: "block",
            //border:"1px solid grey"
        }
    });
    //

    const inputText = " Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a."

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
/*
    const Downloader = () => ( 
        <div>
            <PDFDownloadLink 
                document={<PdfDocument />} 
                fileName="somename.pdf"
            >
                {
                    ({ blob, url, loading, error }) => (loading 
                        ? 'Loading document...' 
                        : 'Download now!')}
            </PDFDownloadLink>
        </div>
    );

    const BeautyText = () => (
        <div>
            <PdfDocument/>
            <Downloader/>
        </div>
    );\
*/
/*
    const MyDoc = () => (
      <Document>
        <Page>
            <View>
                <Text>
                    {" Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a. Ut turpis mi, hendrerit rutrum nibh eget, porttitor feugiat ligula. Nullam tempus facilisis laoreet. Donec ac est ut diam auctor vestibulum ac ut mi. Aenean ut est massa. Ut eleifend auctor neque, ut ultrices lacus vestibulum vitae. Ut eleifend diam quis orci finibus tristique. Aenean mattis vel libero sit amet auctor. Nam ut felis magna. Nunc ullamcorper quam eget iaculis facilisis. Maecenas consectetur  hendrerit lectus, eget dictum enim venenatis a."}
                </Text>
            </View>
        </Page>
      </Document>
    )
*/
    const BeautyText = _props => (
      <div>
        <PdfDocument text={_props.text}/>
        <PDFDownloadLink document={<PdfDocument text={_props.text}/>} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Забери PDF если считаешь что он ок.')}
        </PDFDownloadLink>
      </div>
    )

    export default BeautyText;


    import React,{useState,useEffect} from 'react';
    //import store from '../store';
    import {connect} from 'react-redux';
    import * as actions from '../../actions';
    import {
    dogSampleData,
    formOrgDataSample,
    formIPDataSample,
    formFLDataSample,
    serverData
    } 
    from "./MontajSampleData";  
    
    const MontajDefault = ({dogovorData,onDogovorData}) => { 
            // INIT
        const [selection, setSelection] = useState({
            objNameSel:"Lipki",
            dogTypeSel:"PROJ",
            sysTypeSel:"WHO KNOWS",
            servTypeSel:"varTwo",
            clientTypeSel:"IP"    
        });
        const [formData,setFormData] = useState(formOrgDataSample);
        const [hub,setHub] = useState({"":""});
        const output = {...dogovorData,selectors:{...selection,hub},formData:formData};
        //useEffect(()=>onDogovorData(output));

    return(null)
    };

    const mapStateToProps = _state => ({
        //dogovorData: _state.dogovorData
    });
    const mapDispatchToProps = _dispatch => ({
        onDogovorData: data => _dispatch(actions.dogovorData(data))
    });

    export default connect (
        mapStateToProps,
        mapDispatchToProps
    )(MontajDefault);

    
 

    

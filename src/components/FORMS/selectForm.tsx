
/* tslint: disable */
  import React, {useState,useEffect} from 'react';
  //import {
  //  GlobalStyle,Container,Grid,AreaBox,Text,
  //  TextBox,Button,ParamBox,naked,
  //  NavbarDropdown,NavbarDropdownContent,link
  //} from '../../css/style.js';
  import FormOneSimp from "./FormOneSimp";
  import FormTwoSimp from "./FormTwoSimp";
  import FormThreeSimp from "./FormThreeSimp";
  import FormObj from "./FormObj";
  import FormDog from "./FormDog";

  // SelectForm :: formaName -> fornmType -> (DogovorTypesList,FormByType,FormSetByName)
export type FormName = "ownerDic" | "agentDic" | "objDic" | "dogDic";
type FormType = "YL" | "FL" | "IP" | "def" | string;
 const getOwnerDic = (_formName: FormName, _id: number):Object => {
  return {
    ownerDic:{
      YL: < FormOneSimp 
            formName={_formName} 
            ownerId={_id}
          />,
      IP: < FormTwoSimp 
            formName={_formName} 
            ownerId={_id}
          />,
      FL: < FormThreeSimp 
            formName={_formName} 
            ownerId={_id}
          />
    },
  }
};
export type SelectForm = (
  formName?: FormName,
  formType?: FormType,
  id?: number | undefined
) => {
  types?: Array<string>,
  form?: JSX.Element,
  formDic?: Object
};
  export const selectForm = (
    _formName?: FormName,
    _formType: FormType ="def",
    _id: number| undefined = undefined):SelectForm => {
        //console.log("selectForm input: ", formName,formType,id)
        type FormsLib = {
          ownerDic: Object,
          agentDic: Object,
          objDic: Object,
          dogDic: Object
        };
        const formsLib:FormsLib = {
            ownerDic:{
                YL:<FormOneSimp 
                     formName={_formName} 
                     ownerId={_id}
                   />,
                IP:<FormTwoSimp 
                     formName={_formName} 
                     ownerId={_id}
                   />,
                FL:<FormThreeSimp 
                     formName={_formName} 
                     ownerId={_id}
                   />
            },
            agentDic:{
                YL:<FormOneSimp 
                    formName={_formName}
                    agentId={_id}
                   />,
                IP:<FormTwoSimp 
                     formName={_formName} 
                     agentId={_id}
                   />,
                FL:<FormThreeSimp 
                     formName={_formName} 
                     agentId={_id}
                   />
            },
            objDic:{
                def:<FormObj objectId={_id}/>       
            },
            dogDic:{
                def:<FormDog dogovorId={_id}/>        
            }
        };
        return (
            { 
              types:Object.keys(formsLib[_formName]),
              form:formsLib[_formName][_formType],
              formDic:formsLib[_formName]
            }
        );
    };

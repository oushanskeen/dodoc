       
  import React, {useState,useEffect} from 'react';
  //import {
  //  GlobalStyle,Container,Grid,AreaBox,Text,
  //  TextBox,Button,ParamBox,naked,
  //  NavbarDropdown,NavbarDropdownContent,link
  //} from '../../css/style.js';
  import FormOneSimp from "./FormOneSimp";
  import FormTwoSimp from "./FormTwoSimp";
  import FormThreeSimp from "./FormThreeSimp";

  // SelectForm :: formaName -> fornmType -> (DogovorTypesList,FormByType,FormSetByName)
  export const selectForm = (formName,formType="def") => {
        const formsLib = {
            ownerDic:{
                YL:<FormOneSimp />,
                IP:<FormTwoSimp />,
                FL:<FormThreeSimp />
            },
            agentDic:{
                YL:<FormOneSimp />,
                IP:<FormTwoSimp />,
                FL:<FormThreeSimp />
            },
        };
        return (
            { 
              types:Object.keys(formsLib[formName]),
              form:formsLib[formName][formType],
              formDic:formsLib[formName]
            }
        );
    };

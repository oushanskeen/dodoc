       
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
  export const selectForm = (
    formName,
    formType="def",
    id=undefined) => {
        console.log("selectForm input: ", formName,formType,id)
        const formsLib = {
            ownerDic:{
                YL:<FormOneSimp 
                     formName={formName} 
                     ownerId={id}
                   />,
                IP:<FormTwoSimp 
                     formName={formName} 
                     ownerId={id}
                   />,
                FL:<FormThreeSimp 
                     formName={formName} 
                     ownerId={id}
                   />
            },
            agentDic:{
                YL:<FormOneSimp 
                    formName={formName}
                    agentId={id}
                   />,
                IP:<FormTwoSimp 
                     formName={formName} 
                     agentId={id}
                   />,
                FL:<FormThreeSimp 
                     formName={formName} 
                     agentId={id}
                   />
            },
            objDic:{
                def:<FormObj objectId={id}/>       
            },
            dogDic:{
                def:<FormDog dogovorId={id}/>        
            }
        };
        return (
            { 
              types:Object.keys(formsLib[formName]),
              form:formsLib[formName][formType],
              formDic:formsLib[formName]
            }
        );
    };

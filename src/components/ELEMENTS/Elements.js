    import React, {useState,useEffect} from 'react'; 
    import {selectForm} from "../FORMS/selectForm"; 
    
    // ShowHideButton :: ... -> content -> HidableDiv
    export const ShowHideButton = ({header="header",name=["show","hide"],content="content"}) => {
    const [showHide,setShowHide] = useState(false);
    return (
        <div>
            <span>{header}{" "}</span>
            <button onClick={()=>setShowHide(!showHide)}> 
                {showHide === false ? name[0] : name[1]} 
	        </button><br/> 
            <div>
                {showHide === false ? "" : content}
            </div>
        </div>
    );
  };
   
   // ShowDictionaryArticles :: dictionary -> (content ->(e -> div e)-> HidableDiv) -> DictToHidableDiv
   export const ShowDictionaryArticleData = ({dictionary}) => (
    dictionary.map(owner => 
      <ShowHideButton 
        header={owner.name} 
        name={["open","close"]} 
        content={
             Object.entries(owner)
                .map(record => <div>{record[0]} : {record[1]}</div>)
        }
      />
   )          
  );
  
  // Selector :: selectForm -> dictName -> FormSelector
  export const Selector = ({selectForm,dictionaryName}) => {
      const [select,setSelect] = useState("");
      return (
        <div>
          <select onChange={e => setSelect(e.target.value)}>
            <option value="-">-------</option>
            {Object.entries(selectForm(dictionaryName,select).formDic)
	          .map(e => <option value={e[0]}>{e[0]}</option>)}
          </select>
          <div>        
            {select==="" ? "" : <div> {selectForm(dictionaryName,select).form} </div> }
          </div>
        </div>
      );
    };

  // CreateDictionaryArticle :: dictName -> selectForm -> HidableDivWithFormSelector
  export const CreateDictionaryArticle = ({dictionaryName,selectForm}) => {
    return (
        <ShowHideButton 
            header={""} 
            name={["создать договор","скрыть"]} 
            content={<Selector selectForm={selectForm} dictionaryName={dictionaryName}/>}/>
    );
  };

  // DicitonaryIO :: state -> dicName -> HidableDivWithFormSelector+DictMappedToHidableDiv
  export const DictionaryIO = ({state,dictionaryName}) => (
    <div>
        <ShowDictionaryArticleData dictionary={state[dictionaryName]}/>
        <CreateDictionaryArticle dictionaryName={dictionaryName} selectForm={selectForm}/>
    </div>
  );

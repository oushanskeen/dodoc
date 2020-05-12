import React from 'react';
import {Input} from '../../css/style.js';
export const ObjectSelect = ({importData,formData,updateFormData}) => (
      <label> objName : 
        <select
          id="objName"
          value= {formData.objName}
          onChange={e => updateFormData(e)}
          placeholder=" objName "
          type="text"
          name="objName"
          required
          maxlength="120"
        ><br/>
        <option>------------</option>
	    {importData.objects.map(e => 
	      <option value={e}>{e}</option>)}
	    </select><br/>
      </label>
    );
export const AgentSelect = ({importData,formData,updateFormData}) => (
          <label> agentName :
           <select
             id="agentName"
             value= {formData.agentName}
             onChange={e => updateFormData(e)}
             name="agentName"
             required
           >
             <option>------------</option>
             {importData.agents.map(e => <option value={e}>{e}</option>)}
           </select><br/>
         </label>   
    );
export const OwnerSelect = ({importData,formData,updateFormData}) => (
                 <label> ownerName :
           <select
             id="ownerName"
             value= {formData.ownerName}
             onChange={e => updateFormData(e)}
             placeholder=" ownerName"
             name="ownerName"
             required
             minlength="10"
             maxlength="10"
           >
           <option>------------</option>
           {importData.owners.map(e => <option value={e}>{e}</option>)}
           </select><br/>
         </label>
    );
export const DogovorTypeSelect = ({importData,formData,updateFormData}) => (
        <label> dogovorType : 
            <select
              id="dogovorType"
              value= {formData.dogovorType}
              onChange={e => updateFormData(e)}
              placeholder=" dogovorType "
              type="text"
              name="dogovorType"
              required
              maxlength="120"
            ><br/>
            <option>------------</option>
	        {importData.dogovorTypes.map(e => 
	         <option value={e}>{e}</option>)}
	        </select><br/>
          </label>
    );
export const SystemsSelect = ({importData,formData,updateFormData}) => (
        <label> systems :
            {importData.systemsDataVector.map(e => 
                (<div>                    
                    <input
                        value={formData.systems}
                        name="systems"
                        type="checkbox"
                        onChange={e => updateFormData(e)}
                    /><label>{e}</label>
                </div>)
             )}<br/> 
        </label>
    ); 
export const PriceInput = ({formData,updateFormData}) => (
                 <label> price : <br/>
           <Input
             id="price"
             value= {formData.price}
             onChange={e => updateFormData(e)}
             placeholder=" price "
             type="text"
             name="price"
             required
           /><br/>
         </label>
    );
export const SubmitButton = ({handleSubmit}) => (<button onClick={handleSubmit}>Submit</button>);

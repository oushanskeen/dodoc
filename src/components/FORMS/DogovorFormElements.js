import React from "react";
import { Input, Checkbox, Select } from "@rebass/forms";
import { Button } from 'rebass';

export const ObjectSelect = ({ importData, formData, updateFormData }) => (
  <label>
    {" "}
    objName :
    <Select
      id="objName"
      value={formData.objName}
      onChange={e => updateFormData(e)}
      placeholder=" objName "
      type="text"
      name="objName"
      required
      maxlength="120"
    >
      <br />
      <option>------------</option>
      {importData.objects().map(e => (
        <option value={e}>{e}</option>
      ))}
    </Select>
    <br />
  </label>
);
export const AgentSelect = ({ importData, formData, updateFormData }) => (
  <label>
    {" "}
    agentName :
    <Select
      id="agentName"
      value={formData.agentName}
      onChange={e => updateFormData(e)}
      name="agentName"
      required
    >
      <option>------------</option>
      {importData.agents().map(e => (
        <option value={e}>{e}</option>
      ))}
    </Select>
    <br />
  </label>
);
export const OwnerSelect = ({ importData, formData, updateFormData }) => (
  <label>
    {" "}
    ownerName :
    <Select
      id="ownerName"
      value={formData.ownerName}
      onChange={e => updateFormData(e)}
      placeholder=" ownerName"
      name="ownerName"
      required
      minlength="10"
      maxlength="10"
    >
      <option>------------</option>
      {importData.owners().map(e => (
        <option value={e}>{e}</option>
      ))}
    </Select>
    <br />
  </label>
);
export const DogovorTypeSelect = ({ importData, formData, updateFormData }) => (
  <label>
    {" "}
    dogovorType :
    <Select
      id="dogovorType"
      value={formData.dogovorType}
      onChange={e => updateFormData(e)}
      placeholder=" dogovorType "
      type="text"
      name="dogovorType"
      required
      maxlength="120"
    >
      <br />
      <option>------------</option>
      {importData.dogovorTypes().map(e => (
        <option value={e}>{e}</option>
      ))}
    </Select>
    <br />
  </label>
);
const delDoub = (string, val) => {
  //const magic = (string,val) => {
  const stroke = string.split(",");
  return stroke.includes(val)
    ? stroke.filter(e => e !== val).join()
    : stroke.concat(val).join();
  //};
};
export const SystemsSelect = ({ importData, formData, updateFormData }) => {
  const handleChange = event => {
    return {
      target: {
        name: event.target.name,
        value: delDoub(formData.systems, event.target.value)
      }
    };
  };
  return (
    <label>
      {" "}
      systems :
      {importData.systemsDataVector().map((e, i) => (
        <div>
          <input
            checked={formData.systems.split(",").includes(e) ? "yes" : ""}
            value={e}
            type="checkbox"
            name="systems"
            onChange={e => updateFormData(handleChange(e))}
          />
          <label for={e}>{e}</label>
        </div>
      ))}
      <br />
    </label>
  );
};
export const PriceInput = ({ formData, updateFormData }) => (
  <label>
    {" "}
    price : <br />
    <Input
      id="price"
      value={formData.price}
      onChange={e => updateFormData(e)}
      placeholder=" price "
      type="text"
      name="price"
      required
    />
    <br />
  </label>
);
export const SubmitButton = ({ handleSubmit }) => (
  <Button bg='two' onClick={handleSubmit}>Submit</Button>
);

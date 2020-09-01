import React from "react";
import {Select} from "@rebass/forms";
//import {Button} from "rebass";
//import {DicBar} from "../BeautyList";

const Selector = ({dogovors, onSelect}) => (
  <Select onChange={event => onSelect(event.target.value)}>
    <option value="-"> choose your dogovor </option>
    {Object.entries(dogovors).map(dogovor => 
      <option value={dogovor[0]}>
        {dogovor[1]}
      </option>)
    }
  </Select>

);

export default Selector;

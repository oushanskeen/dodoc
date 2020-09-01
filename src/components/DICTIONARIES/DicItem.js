import React from "react";
import {Button} from "rebass";
import {DicBar} from "../BeautyList";

const DicItem = ({dicItem:{type, id, name, state}, onWatchDetailsItem, onEditItem, onDeleteItem}) => (
  <DicBar
     barName={name}
     buttonsBar={
       <>
       <Button bg={"grey"}  width={"30%"} onClick={() => onWatchDetailsItem(type,id)}> details </Button>
  
      <Button bg={"grey"} width={"30%"} 
       onClick={() => onEditItem(type,id)}>edit
      </Button>
      <Button bg={"grey"} width={"30%"}
       onClick={() => onDeleteItem(type,id)} >delete</Button>
       </>
     }
  />
);

export default DicItem;

import React from "react";
import DicItem from "./DicItem";
import {DicBar} from "../BeautyList"
const DicItemList = ({
  loadStarted,
  loadFailed,
  items, onWatchDetailsItem, onEditItem, onDeleteItem}) => {
  const events = {
    onWatchDetailsItem,
    onEditItem,
    onDeleteItem
  };
  if (loadStarted){
    return <div className="dic-item">wait...</div>
  };
  if (loadFailed){
    return <div className="dic-item">something wrong</div>
  };
  if (items.length === 0){
    return <DicBar barName={"empty"} className="dic-item" />
  };  
  return (items.map(item => (
      <DicItem key={item.id} dicItem={item} {...events}/>
  )))
};

export default DicItemList;

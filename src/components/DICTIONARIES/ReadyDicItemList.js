import React from "react";
import ReadyDicItem  from "./ReadyDicItem";

const ReadyDicItemList = ({
  loadStarted,
  loadFailed,
  items,
  onSelectReadyDicItem, 
  onDeleteReadyDicItem}) => {
  const events = {
    onSelectReadyDicItem,
    onDeleteReadyDicItem
  };
  if (loadStarted){
    return <div>wait ... </div>
  };
  if (loadFailed){
    return <div>something wrong ...</div>
  };
  if (items.length === 0){
    return <div>empty</div>
  };
  return (items.map(item => (
    <ReadyDicItem key={item.id} dic={item} {...events}/>
   // <div>{JSON.stringify(item)}</div>
  )))

};

export default ReadyDicItemList;

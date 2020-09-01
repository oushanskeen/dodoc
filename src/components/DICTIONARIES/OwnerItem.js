import React from "react";

const DicItem = ({dicItem:{type, id, name, state}, onWatchDetailsItem, onEditItem, onDeleteItem}) => (
    <div className="dic-item">
      {name}
      <button onClick={() => onWatchDetailsItem(id)}> DETAILS </button>
      <button onClick={() => onEditItem(id)}> EDIT </button>
      <button onClick={() => onDeleteItem(id)} > DELETE </button>
    </div>
);

export default DicItem;

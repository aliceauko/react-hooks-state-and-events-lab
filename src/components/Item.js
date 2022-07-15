import React , {useState}from "react";

function Item({ name, category }) {

  const [isAdd, setIsAdd] =useState(false);
  function handleIsAdd(){
    setIsAdd((isAdd) => !isAdd)
  }
  return (
    <li className={isAdd ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAdd ? "remove" : "add"} onClick={handleIsAdd}>{isAdd ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;

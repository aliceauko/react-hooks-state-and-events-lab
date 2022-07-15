import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const[selectedCategory, setCategory ] = useState("All");
  function handleCategory(event){
    setCategory(event.target.value);

  }

  const newList = items.filter((item) =>{
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

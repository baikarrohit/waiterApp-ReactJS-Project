import React from "react";
import TableItem from "./TableItem";


const TableList = (props) => {
  console.log(props.items)
  return (
    <ul>
      {props.items.map((item) => (
        <TableItem
          id={item.id}
          price={item.price}
          name={item.name}
          category={item.category}
        />
      ))}
    </ul>
  );
};

export default TableList;

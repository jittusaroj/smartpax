import { React, useEffect, useState } from "react";

function ColumnType(props) {

    return (
        <>
          <a onClick={(e) => props.addNewColumn(props.type)} className="plus-right1" >
           <span>{props.type.toUpperCase()}</span>
          </a>
       
    </>
  );
}
export default ColumnType;

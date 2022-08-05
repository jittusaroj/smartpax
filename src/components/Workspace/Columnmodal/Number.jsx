import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../../utils/services";

function Number(props) {
  return (
    <>
      <a onClick={(e) => props.addNewColumn("Number")} className="plus-right1">
        <span>Number</span>
      </a>
    </>
  );
}
export default Number;

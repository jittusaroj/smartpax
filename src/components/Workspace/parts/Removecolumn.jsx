import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../../utils/services";
import { FaEllipsisH, FaTrash } from "react-icons/fa";

function Removecolumn(props) {

    const deleteGroup = () => {
        axios
          .delete(
            process.env.REACT_APP_LOCAL_API + "/group/" + props.group_data.id,
            {},
            {
              "Content-Type": "application/json",
            }
          )
          .then((data) => {
            notify("Deleted successfully", "success");
          });
      };
    
 
  return (
    <>
     <span>
        <div className="dropdown-sec1 mt-2">
    <div className="dropdown column-icon ">
              <span
                href="#"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaEllipsisH />
              </span>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
               

                <li>
                  <a className="dropdown-item" href="#" onClick={deleteGroup} >
                    <FaTrash/> Delete Column
                  </a>
                </li>
              
              </ul>
            </div>
          </div>
        </span>
   
    </>
  );
  }
export default Removecolumn;

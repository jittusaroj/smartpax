import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../utils/services";
import Row from "./parts/Row";
import Column from "./parts/Column";

function Workspacetable() {
 

  return (
    <>
      <div className="overflow-scroll1 penicillium-section">
        {/* <!--head section--> */}
        <Column/>
        {/* <!--head section-->
          <!--body-section--> */}
        <div id="sortable">
          <Row/>
          <Row/>
          <Row/>
          <Row/>

          
        </div>
        {/* <!--body-section-->
                                 <!--last column--> */}

        {/* <div   className="d-flex">
                                    <div   className="dropdown-sec">
                                    </div>
                                   

                                     <div   className="body-section blue-section my-2" style={{width:'100%'}}>
                                             <div   className=" last-head" style={{width:'100%'}}>
                                       
                                                <Form.Control type="text" className="form-control" placeholder="+ Add item" />
                                             </div>
                                          </div>
                                          <button   className="btn custum-add-button btn-primary text-white ms-2">Add</button>
                                       
                                 </div> */}

        {/* <!--last column-->
                                 <!--table section design--> */}
      </div>
    </>
  );
}
export default Workspacetable;

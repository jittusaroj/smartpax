import { React, useEffect, useState } from "react";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from 'react-bootstrap/Modal';

function Invitemodal() {
   


  return (
    <>
 
 <div className="modal fade " id="invite_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" >
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalLabel">Board Members</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div className="modal-body">
<div className="work-body-section">
<div className="row">
<div className="col-md-12">
<input type="text" className="form-control" name=""/>
</div>
</div>

<div className="invite-text">
<div className="row">
<div className="col-md-8 col-8">
<div className="d-flex">
<span className="name-icon mt-2"> K   </span> 
<span className="ms-4">krishna</span>
</div>
</div>
<div className="col-md-4 col-4">
<div className="float-right">
<a className="">

</a>
<a className="crose-icon"><i className="fa fa-times" style={{color:"black"}}></i></a>
</div>
</div>
</div>
</div>


</div>
</div>




</div>
</div>
</div>

    </>
  );
}
export default Invitemodal;

import React from 'react';
import {useState} from 'react';





function Invite ()  {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    return (
        <>

<form>
     <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Invite with link</label>
  <span class="d-flex">
  <input type="link" class="form-control" id="exampleFormControlInput1" placeholder="Https://binplus.in" /> 
  <button class="btn btn-primary ms-1">Copy</button>
  </span>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Invite with email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your  E-mail Address" /> 
  <small>You can only invite people with an @qmslab.com email domain</small>
</div>

<div class="mb-3">
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">Member</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">Viewer(Readonly)</label>
</div>
<div class="form-check form-check-inline">
 <a class="invite-free"> FREE</a>
</div>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Invite to specific team (optional)</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Team Name" /> 
 
</div>

<div class="float-right">
    <button class="btn btn-primary">Invite</button>
</div>
                                         </form>
                                          <br/> <br/>      
                                       
                                        <div class="modal-footer justify-content-center bg-gray mt-4" >
                                       <span>You can also import your contacts from: 
                                       <img src="gmail-dark-bg.svg" class="mx-2" />
                                       <img src="outlook.svg" class="mx-2" /> 
                                         </span>
                                        </div>



         
        </>
      );
    }
    export default Invite 
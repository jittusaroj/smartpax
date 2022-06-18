import {React,useEffect,useState} from 'react';
import axios from "axios";
import { Form , Button} from 'react-bootstrap';



function Personaltab (props)  {
  var url = process.env.REACT_APP_LOCAL_API;
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [skype, setSkype] = useState('');
  const [location, setLocation] = useState('');
  const [birthday, setBirthday] = useState('');
  const [worka, setWorka] = useState('');
  const [timezone, setTimezone] = useState('');


  useEffect(()=>{

    setTitle(props.data.title);
    setPhone(props.data.phone);
    setEmail(props.data.email);
    setSkype(props.data.skype);
    setLocation(props.data.location);
    setBirthday(props.data.dob);
    setWorka(props.data.work_anniversary);
    setTimezone(props.data.timezone);

}, [
  props.data.title,
  props.data.phone,
  props.data.email,
  props.data.skype,
  props.data.location,
  props.data.dob,
  props.data.work_anniversary,
  props.data.timezone,
]) 

   const updateProfile = (e) => {
      axios.put(url + '/users/' + props.data.id, {
        title: title,
        phone: phone,
        email: email,
        skype: skype,
        location: location,
        dob: birthday,
        work_anniversary: worka,
        timezone: timezone,
      }, {
        'Content-Type': 'application/json',
      })
        .then(user => {
          console.log(user);
          return title;
          //  notify('Successfully updated', 'success')
        });

  }



 
    return (
        <>
        <section class="tab-pane fade show active" id="personal_info" role="tabpanel" aria-labelledby="home-tab">
                                       <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                                <h5>Overview </h5>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-user"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_title"><span className='fw-bolder'>Title:</span> <span id="title">{props.data.title?props.data.title:'N/A'} </span> </a>
                                                          <i class="bx bx-copy-alt ms-5 copy text-blue fs-5" data-clipboard-target="#title"></i>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-envelope"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_email"><span  className='fw-bolder'>Email:</span>{props.data.email?props.data.email:'N/A'}</a>
                                                           <i class="bx bx-copy-alt ms-5 copy text-blue fs-5" data-clipboard-target="#"></i>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-phone"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_mobile"><span  className='fw-bolder'>Mobile number:</span> {props.data.phone?props.data.phone:'N/A'} </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-skype"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_skype"><span  className='fw-bolder'>Skype: </span>{props.data.skype?props.data.skype:'N/A'} </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-map"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_location"><span className='fw-bolder'>Location: </span>{props.data.location?props.data.location:'N/A'} </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-clock-o"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_timezone"><span className='fw-bolder'>Timezone: </span> {props.data.timezone?props.data.timezone:'N/A'}</a>
                                                           <i class="bx bx-copy-alt ms-5 copy text-blue fs-5" data-clipboard-target="#"></i>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-gift"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_birthday"><span className='fw-bolder'>Birthday: </span> {props.data.dob?props.data.dob:'N/A'}</a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-calendar"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_workanniversary"><span className='fw-bolder'>Work Anniversary: </span> {props.data.work_anniversary?props.data.work_anniversary:'N/A'}</a>
                                                        </div>
                                                </div>
                                                <hr/>
                                                <p>Nothing to show here : Joining teams helps you keep track on projects you're interested in, and lets people know what you're about. Explore all teams</p>
                                           </div>
                                       <div class="col-md-3"></div>
                                   </div>
                                  </section> 


                                  {/* <!--modals-->
           <!--info modal--> */}
           <div class="modal fade" id="add_title" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog profile-modal">
                <div class="modal-content">
                  <div class="modal-header border-top-blue border-bottom-0">
                    <h5 class="modal-title" id="exampleModalLabel"> Title</h5>
                    <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  
        <div class="modal-body">
                  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit" onClick={(e) => updateProfile()}>
    Submit
  </Button>
</Form>
</div>
                </div>
              </div>
            </div>
            {/* <!--info_modal-->
           <!--email modal--> */}
           <div class="modal fade" id="add_email" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog profile-modal">
                <div class="modal-content">
                  <div class="modal-header border-top-blue border-bottom-0">
                    <h5 class="modal-title" id="exampleModalLabel"> Email</h5>
                    <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                 

                  <div class="modal-body">
                  <Form>
                  <Form.Group className="mb-2 row" controlId="formBasicEmail">
    <Form.Label className='col-sm-5'>Current Email</Form.Label>
    <Form.Text className='col-sm-7  fs-5 color-black' >
    {props.data.email} 
                                    </Form.Text>
    
  </Form.Group>
  <Form.Group className="mb-2 row" controlId="formBasicEmail">
    <Form.Label className='col-sm-5'>New  Email</Form.Label>
    <Form.Text className='col-sm-7' >
    <Form.Control  type="email" onChange={(e) => setEmail(e.target.value)} value={email}  />
    </Form.Text>
  
    
  </Form.Group>
  <Form.Group className="mb-2 row" controlId="formBasicEmail">
    <Form.Label className='col-sm-5'>Password</Form.Label>
    <Form.Text className='col-sm-7' >
    <Form.Control  type="password" placeholder="Enter Password" />
    </Form.Text>
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit" onClick={(e) => updateProfile()}>
  Change Email Address
  </Button>
</Form>
</div>
                </div>
              </div>
            </div>
            {/* <!--email-->
           <!--mobile modal--> */}
           <div class="modal fade" id="add_mobile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog profile-modal">
                <div class="modal-content">
                  <div class="modal-header border-top-blue border-bottom-0">
                    <h5 class="modal-title" id="exampleModalLabel"> Email</h5>
                    <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                

                  
                  <div class="modal-body">
                  <Form>
                 
  {/* <Form.Group className="mb-2 row" controlId="formBasicEmail">
    <Form.Label className='col-sm-5'>Phone</Form.Label>
    <Form.Text className='col-sm-7' >
    <Form.Control  type="number" placeholder="Enter Phone No." />
    </Form.Text>
  
    
  </Form.Group> */}
  
  <Form.Group className="mb-2 row" controlId="formBasicEmail">
    <Form.Label className='col-sm-5'>Mobile</Form.Label>
    <Form.Text className='col-sm-7' >
    <Form.Control  type="number" onChange={(e) => setPhone(e.target.value)} value={phone} />
    </Form.Text>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Send me App download link" />
  </Form.Group>

    
  <Button variant="primary float-right" type="submit" onClick={(e) => updateProfile()}>
 Save
  </Button>
</Form>
</div>
                </div>
              </div>
            </div>
            {/* <!--mobile modal-->
             <!--skype modal--> */}
               <div class="modal fade" id="add_skype" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> Skype</h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" onChange={(e) => setSkype(e.target.value)} value={skype} />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit" onClick={(e) => updateProfile()}>
   Save
  </Button>
</Form>
</div>
                    </div>
                  </div>
                </div>
            {/* <!--skype-->
             <!--location modal--> */}
               <div class="modal fade" id="add_location" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> Location</h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" onChange={(e) => setLocation(e.target.value)} value={location} />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit" onClick={(e) => updateProfile()}>
   Save
  </Button>
</Form>
</div>
                    </div>
                  </div>
                </div>
            {/* <!--location-->
             <!--timezone modal--> */}
               <div class="modal fade" id="add_timezone" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> Time Zone</h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Select aria-label="Default select example" onChange={(e) => setTimezone(e.target.value)} value={timezone}>
  <option>(GMT-12:00) International Date Line West</option>
  <option value="1">(GMT-11:00) American Samoa</option>
  <option value="2">(GMT-11:00) American Samoa</option>
  <option value="3">(GMT-11:00) American Samoa</option>
</Form.Select>
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit" onClick={(e) => updateProfile()}>
   Save
  </Button>
</Form>
</div>
                    </div>
                  </div>
                </div>
            {/* <!--timezone-->
             <!--birthday modal--> */}
               <div class="modal fade" id="add_birthday" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> Birthday </h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                     
                      <div class="modal-body">
                  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="date" onChange={(e) => setBirthday(e.target.value)} value={birthday} />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit" onClick={(e) => updateProfile()}>
   Save
  </Button>
</Form>
</div>
                    </div>
                  </div>
                </div>
            {/* <!--birthday-->
             <!--work anniversary modal--> */}
               <div class="modal fade" id="add_workanniversary" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> When did you join smartpax </h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      

                      <div class="modal-body">
                  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="date" onChange={(e) => setWorka(e.target.value)} value={worka}/>
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit" onClick={(e) => updateProfile()}>
   Save
  </Button>
</Form>
</div>
                    </div>
                  </div>
                </div>
            {/* <!--work anniversary--> */}
          {/* <!--modals--> */}
  
  
  </>
  );
  }
  export default Personaltab ;
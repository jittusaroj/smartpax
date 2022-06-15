import React from 'react';
import { Form , Button} from 'react-bootstrap';



function Personaltab ()  {
 
    return (
        <>
        <section class="tab-pane fade show active" id="personal_info" role="tabpanel" aria-labelledby="home-tab">
                                       <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                                <h5>Overview</h5>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-user"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_title"><span className='fw-bolder'>Title:</span> <span id="title">add a title </span> </a>
                                                          <i class="bx bx-copy-alt ms-5 copy text-blue fs-5" data-clipboard-target="#title"></i>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-envelope"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_email"><span  className='fw-bolder'>Email:</span> user@gmail.com </a>
                                                           <i class="bx bx-copy-alt ms-5 copy text-blue fs-5" data-clipboard-target="#"></i>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-phone"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_mobile"><span  className='fw-bolder'>Mobile number:</span> +9999999999 </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-skype"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_skype"><span  className='fw-bolder'>Skype: </span>Add a skype number </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-map"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_location"><span className='fw-bolder'>Location: </span>Add your location </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-clock-o"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_timezone"><span className='fw-bolder'>Timezone: </span> (GMT+01:00) Berlin</a>
                                                           <i class="bx bx-copy-alt ms-5 copy text-blue fs-5" data-clipboard-target="#"></i>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-gift"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_birthday"><span className='fw-bolder'>Birthday: </span> Add your birth date</a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-calendar"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_workanniversary"><span className='fw-bolder'>Work Anniversary: </span> Add your work anniversary</a>
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
    
    <Form.Control type="text" placeholder="Enter Title" />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit">
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
                                        user@gmail.com
                                    </Form.Text>
    
  </Form.Group>
  <Form.Group className="mb-2 row" controlId="formBasicEmail">
    <Form.Label className='col-sm-5'>New  Email</Form.Label>
    <Form.Text className='col-sm-7' >
    <Form.Control  type="email" placeholder="New email" />
    </Form.Text>
  
    
  </Form.Group>
  <Form.Group className="mb-2 row" controlId="formBasicEmail">
    <Form.Label className='col-sm-5'>Password</Form.Label>
    <Form.Text className='col-sm-7' >
    <Form.Control  type="password" placeholder="Enter Password" />
    </Form.Text>
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit">
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
                 
  <Form.Group className="mb-2 row" controlId="formBasicEmail">
    <Form.Label className='col-sm-5'>Phone</Form.Label>
    <Form.Text className='col-sm-7' >
    <Form.Control  type="number" placeholder="Enter Phone No." />
    </Form.Text>
  
    
  </Form.Group>
  <Form.Group className="mb-2 row" controlId="formBasicEmail">
    <Form.Label className='col-sm-5'>Mobile</Form.Label>
    <Form.Text className='col-sm-7' >
    <Form.Control  type="number" placeholder="Enter Mobile No." />
    </Form.Text>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Send me App download link" />
  </Form.Group>

  
  <Button variant="primary float-right" type="submit">
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
    
    <Form.Control type="text" placeholder="" />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit">
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
    
    <Form.Control type="text" placeholder="" />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit">
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
    
    <Form.Control type="time" placeholder="" />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit">
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
    
    <Form.Control type="date" placeholder="" />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit">
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
    
    <Form.Control type="date" placeholder="" />
    
  </Form.Group>

  
  <Button variant="primary float-right" type="submit">
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
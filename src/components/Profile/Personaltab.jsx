import React from 'react';


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
                                                           <a data-bs-toggle="modal" data-bs-target="#add_title"><span>Title</span> add a title </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-envelope"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_email"><span>Email</span> user@gmail.com </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-phone"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_mobile"><span>Mobile number</span> +9999999999 </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-skype"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_skype"><span>Skype </span>Add a skype number </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-map"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_location"><span>Location </span>Add your location </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-clock-o"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_timezone"><span>Timezone </span> (GMT+01:00) Berlin</a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-gift"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_birthday"><span>Birthday </span> Add your birth date</a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-calendar"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_workanniversary"><span>Work Anniversary </span> Add your work anniversary</a>
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
                  <form action="" method="">
                          <div class="modal-body">
                           <input type="text" class="form-control" name="" value=""/>
                          </div>
                          <div class="modal-footer borde-top-0">
                            {/* <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>--> */}
                            <button type="button" class="btn btn-primary">Save</button>
                          </div>
                  </form>
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
                  <form action="" method="">
                          <div class="modal-body">
                              <div class="row">
                                  <div class="col-md-5 col-5">
                                      <label class="mb-2">Current Email</label>
                                  </div>
                                  <div class="col-md-7 col-7">
                                    <div class="mb-2">
                                        user@gmail.com
                                    </div>
                                  </div>
                                  <div class="col-md-5">
                                     <label class="mb-2">New  Email</label>
                                  </div>
                                  <div class="col-md-7">
                                      <input type="email" class="form-control" name="" value="" placeholder="current email"/>
                                  </div>
                                  <div class="col-md-5">
                                     <label class="mb-2">Current Password</label>
                                  </div>
                                  <div class="col-md-7">
                                      <input type="password" class="form-control" name="" value="" placeholder=" "/>
                                  </div>
                              </div>
                           
                          </div>
                          <div class="modal-footer borde-top-0">
                            {/* <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>--> */}
                            <button type="button" class="btn btn-primary">Change email address</button>
                          </div>
                  </form>
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
                  <form action="" method="">
                          <div class="modal-body">
                              <div class="row">
                                  <div class="col-md-5">
                                      <label class="mb-2">Mobile</label>
                                  </div>
                                 <div class="col-md-7">
                                      <input type="number" class="form-control" name="" value="" />
                                  </div>
                                  <div class="col-md-5">
                                     <label class="mb-2">Mobile</label>
                                  </div>
                                  <div class="col-md-7">
                                      <input type="number" class="form-control" name="" value=""/>
                                  </div>
                                  <div class="col-md-12">
                                       <div class="form-check mt-2">
                                        <input class="form-check-input" type="checkbox" id="app_link" />
                                        <label class="form-check-label" for="app_link">
                                          Send me app download link
                                        </label>
                                      </div>
                                  </div>
                              </div>
                           
                          </div>
                          <div class="modal-footer borde-top-0">
                            <button type="button" class="btn btn-primary">Save</button>
                          </div>
                  </form>
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
                      <form action="" method="">
                              <div class="modal-body">
                               <input class="form-control" name="" value="" type="text" />
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/* <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>--> */}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
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
                      <form action="" method="">
                              <div class="modal-body">
                               <input class="form-control" name="" value="" type="text" />
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/* <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>--> */}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
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
                      <form action="" method="">
                              <div class="modal-body">
                               <input type="time" class="form-control" name="" value=""  />
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/* <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>--> */}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
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
                      <form action="" method="">
                              <div class="modal-body">
                               <input type="date" class="form-control" name="" value=""  />
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/* <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>--> */}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
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
                      <form action="" method="">
                              <div class="modal-body">
                               <input type="date" class="form-control" name="" value="" />
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/* <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>--> */}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
                    </div>
                  </div>
                </div>
            {/* <!--work anniversary--> */}
          {/* <!--modals--> */}
  
  
  </>
  );
  }
  export default Personaltab ;
import React from 'react';
// import {Form } from 'react-bootstrap';


function Password ()  {
    return (
        <>
          <section class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="contact-tab">
                                       <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                              <h5 class="mt-2">Change Password</h5>
                                              <form method="" action="">
                                              <div class="row mt-3">
                                                      <div class="col-md-4">
                                                          <label class="mb-2 mt-2">Current Password</label>
                                                      </div>
                                                      <div class="col-md-8">
                                                          <input type="password" class="form-control mb-3" name="" />
                                                      </div>
                                                      <div class="col-md-4">
                                                          <label class="mb-2 mt-2">New Password</label>
                                                      </div>
                                                      <div class="col-md-8">
                                                          <input type="password" class="form-control mb-3" name="" />
                                                      </div>
                                                      <div class="col-md-4">
                                                          <label class="mb-2 mt-2">Confirm Password</label>
                                                      </div>
                                                      <div class="col-md-8">
                                                          <input type="password" class="form-control mb-3" name="" />
                                                      </div>
                                                      <div class="col-md-12">
                                                         <div style={{float:'right'}}>
                                                              Forgot password ? <a>Resend password via mail</a>
                                                         </div>
                                                      </div>
                                                  </div>
                                                  <hr/>
                                                  <button type="submit" class="btn btn-primary mb-2" style={{float:'right'}}>Save</button>
                                              </form>
                                              </div>
                                               <div class="col-md-3"></div>
                                           </div>
                                  </section>
  
  
  
  </>
  );
  }
  export default Password ;
import React from 'react';


function Workstatus ()  {
    return (
        <>
         <section class="tab-pane fade" id="working_status" role="tabpanel" aria-labelledby="profile-tab">
                                         <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                            <h5>Update your working status</h5>
                                            <p>Let everyone know your status </p>
                                            <div class="status-option">
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="in_office" />
                                                      <label class="form-check-label" for="in_office">
                                                        In the office
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="working_form_home" />
                                                      <label class="form-check-label" for="working_form_home">
                                                        Working from home
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="Out_sick" />
                                                      <label class="form-check-label" for="Out_sick">
                                                       Out sick
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="on_break" />
                                                      <label class="form-check-label" for="on_break">
                                                       On break
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="out_off_office" />
                                                      <label class="form-check-label" for="out_off_office">
                                                       Out of office
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="Out_sick" />
                                                      <label class="form-check-label" for="Out_sick">
                                                       Out Sick
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="working_outside" />
                                                      <label class="form-check-label" for="working_outside">
                                                         Working outside
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="Fimaly_time" />
                                                      <label class="form-check-label" for="Fimaly_time">
                                                         Fimaly time
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="do_not_distrub" />
                                                      <label class="form-check-label" for="do_not_distrub">
                                                        Do not distrub
                                                      </label>
                                                  </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <input type="date" class="form-control mt-3 mb-3" name="" />
                                                </div>
                                                <div class="col-md-6"></div>
                                                <div class="col-md-8 mt-2 mb-3">
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="checkbox" value="" id="disable_notifivation" />
                                                      <label class="form-check-label" for="disable_notifivation" >
                                                        Disable email and mobile notifications while not in the office
                                                      </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-8 mt-2 mb-3">
                                                    <h6>User Activity Indication Control</h6>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="checkbox" value="" id="user_activity" />
                                                      <label class="form-check-label" for="user_activity">
                                                         User Activity Indication Control
                                                      </label>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                           <div class="col-md-3"></div>
                                       </div>
                                    </section>
  
  
  
  </>
  );
  }
  export default Workstatus ;
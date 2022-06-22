import React from 'react';
import axios from "axios";
import { notify } from "../../utils/services";


function Workstatus (props)  {

  var url = process.env.REACT_APP_LOCAL_API;

  const updateProfile = (status) => {
        //  props.data.status = status;
        //  console.log(status);

        axios.put(url + '/users/' + props.data.id, {
          working_status: status
         
        }, {
          'Content-Type': 'application/json',
        })
          .then(data => {
            console.log(data);
            window.location.reload();  

             notify('Settings updated', 'success')

          });
  }
    return (
        <>
         <section class="tab-pane fade" id="working_status" role="tabpanel" aria-labelledby="profile-tab">
                                         <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                            <h5>Update your working status</h5>
                                            <p>Let everyone know your status </p>
                                            <div class="status-option">
                                                  <div class="form-check work-form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="in_office" checked={ (props.data.working_status == 'in_office')? 'true':false } onClick={(e) => updateProfile('in_office')} />
                                                      <label class="form-check-label" for="in_office">
                                                        In the office
                                                      </label>
                                                  </div>
                                                  <div class="form-check work-form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="working_form_home" checked={ (props.data.working_status == 'working_form_home')? 'true':false } onClick={(e) => updateProfile('working_form_home')}/>
                                                      <label class="form-check-label" for="working_form_home">
                                                        Working from home
                                                      </label>
                                                  </div>
                                                    <div class="form-check work-form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="Out_sick" checked={ (props.data.working_status == 'Out_sick')? 'true':false } onClick={(e) => updateProfile('Out_sick')} />
                                                      <label class="form-check-label" for="Out_sick">
                                                       Out sick
                                                      </label>
                                                  </div>
                                                  <div class="form-check work-form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="on_break" checked={ (props.data.working_status == 'on_break')? 'true':false } onClick={(e) => updateProfile('on_break')} />
                                                      <label class="form-check-label" for="on_break">
                                                       On break
                                                      </label>
                                                  </div>
                                                  <div class="form-check work-form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="out_off_office" checked={ (props.data.working_status == 'out_off_office')? 'true':false } onClick={(e) => updateProfile('out_off_office')} />
                                                      <label class="form-check-label" for="out_off_office">
                                                       Out of office
                                                      </label>
                                                  </div>
                                                  
                                                  <div class="form-check work-form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="working_outside" checked={ (props.data.working_status == 'working_outside')? 'true':false } onClick={(e) => updateProfile('working_outside')} />
                                                      <label class="form-check-label" for="working_outside">
                                                         Working outside
                                                      </label>
                                                  </div>
                                                  <div class="form-check work-form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="Fimaly_time" checked={ (props.data.working_status == 'Fimaly_time')? 'true':false } onClick={(e) => updateProfile('Fimaly_time')} />
                                                      <label class="form-check-label" for="Fimaly_time">
                                                         Family time
                                                      </label>
                                                  </div>
                                                  <div class="form-check work-form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="do_not_distrub" checked={ (props.data.working_status == 'do_not_distrub')? 'true':false } onClick={(e) => updateProfile('do_not_distrub')} />
                                                      <label class="form-check-label" for="do_not_distrub">
                                                        Do not distrub - { (props.data.working_status == 'do_not_distrub')? 'true':false }
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
                                                    <br/><br/>
                                                </div>
                                            </div>
                                            </div>
                                         
                                       </div>
                                    </section>
  
  
  
  </>
  );
  }
  export default Workstatus ;
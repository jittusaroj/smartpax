import React from 'react';
import axios from "axios";
import { notify } from "../../utils/services";


function Preference (props)  {

  var url = process.env.REACT_APP_LOCAL_API;

  const updateProfile = (type,status) => {
        //  props.data.status = status;
        //  console.log(status);
         var at,ad;
         if(type == 1){
          at = status;
         }
         if(type == 2){
          ad = status;
         }

        axios.put(url + '/users/' + props.data.id, {
          time_format: at,
          date_format: ad

         
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
          <section class="tab-pane fade" id="Preferences" role="tabpanel" aria-labelledby="contact-tab">
                                       <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                             <div class="row">
                                             <div class="col-md-6">
                                              <h6 class="mt-3">Time Format</h6>
                                              <form>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="time_format" id="time_format" checked={ (props.data.time_format == '12 hours 12:30 PM')?'checked':false } onClick={(e) => updateProfile(1,'12 hours 12:30 PM')} />
                                                      <label class="form-check-label" for="time_format">
                                                        12 hours 12:30 PM
                                                      </label>
                                                    </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="time_format" id="time_format1" checked={ (props.data.time_format == '24 hours 12:30 PM')?'checked':false } onClick={(e) => updateProfile(1,'24 hours 12:30 PM')} />
                                                      <label class="form-check-label" for="time_format1">
                                                        24 hours 12:30 PM
                                                      </label>
                                                    </div>
                                              </form>
                                              </div>
                                              <div class="col-md-6">
                                              <h6 class="mt-3">Date Format</h6>
                                              <form>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="date_format" id="date" checked={ (props.data.date_format == 'May 25 2022')?'checked':false } onClick={(e) => updateProfile(2,'May 25 2022')} />
                                                      <label class="form-check-label" for="date">
                                                         May 25 2022
                                                      </label>
                                                    </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="date_format" id="date1" checked={ (props.data.date_format == '25 May 2022')?'checked':false } onClick={(e) => updateProfile(2,'25 May 2022')} />
                                                      <label class="form-check-label" for="date1">
                                                        25 May 2022
                                                      </label>
                                                    </div>
                                              </form>
                                              </div>
                                              </div>
                                          </div>
                                         
                                       </div>
                                  </section>
  
  
  </>
  );
  }
  export default Preference ;
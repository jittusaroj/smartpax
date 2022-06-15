import React from 'react';


function Preference ()  {
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
                                                      <input class="form-check-input" type="radio" name="time_format" id="time_format"/>
                                                      <label class="form-check-label" for="time_format">
                                                        12 hours 12:30 PM
                                                      </label>
                                                    </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="time_format" id="time_format1"/>
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
                                                      <input class="form-check-input" type="radio" name="date_format" id="date" />
                                                      <label class="form-check-label" for="date">
                                                         May 25 2022
                                                      </label>
                                                    </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="date_format" id="date1" />
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
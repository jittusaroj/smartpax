import React from 'react';


function Notification ()  {
  
    return (
        <>



          <section class="tab-pane fade" id="Notifications" role="tabpanel" aria-labelledby="contact-tab">
                                            <div class="row">
                                               <div class="col-md-3"></div>
                                               <div class="col-md-6">
                                                   <h5>Manage your notification settings</h5>
                                                   <p>We may still send you important notifications about your account and content outside of your preferred notification settings.</p>
                                                   <div class="border p-2 br-8 mb-3 shadow-sm">
                                                       <div class="row">
                                                           <div class="col-md-2 col-2 text-center">
                                                               <i class="bx bx-desktop mt-2" style={{fontSize:'28px'}}></i>
                                                           </div>
                                                           <div class="col-md-7 col-10">
                                                               <h6>Desktop notifications</h6>
                                                               <p className='f-12'>Receive notifications directly on my Windows</p>
                                                           </div>
                                                           <div class="col-md-3 col-12">
                                                               <button class="btn btn-primary btn-sm mt-2 btn-padding" style={{ float:'right'}}>Enable </button>
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
  export default Notification ;
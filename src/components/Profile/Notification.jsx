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
                                                   <div class="border p-2 mb-3 shadow-sm">
                                                       <div class="row">
                                                           <div class="col-md-2 col-2 text-center">
                                                               <i class="fa fa-file mt-2" style={{fontSize:'25px'}}></i>
                                                           </div>
                                                           <div class="col-md-6 col-10">
                                                               <h6>Desktop notifications</h6>
                                                               <p>Receive notifications directly on my Windows</p>
                                                           </div>
                                                           <div class="col-md-4 col-12">
                                                               <button class="btn btn-primary btn-sm mt-2" style={{ float:'right'}}>Enable desktop setting</button>
                                                           </div>
                                                       </div>
                                                   </div>
                                                       <a class="text-black" data-bs-toggle="collapse" href="#email_notifiction" role="button" aria-expanded="false" aria-controls="email_notifiction">
                                                                <div class="border p-2 shadow-sm">
                                                                   <div class="row">
                                                                       <div class="col-md-2 col-2 text-center">
                                                                           <i class="fa fa-envelope mt-2" style={{fontSize:'25px'}}></i>
                                                                       </div>
                                                                       <div class="col-md-6 col-8">
                                                                           <h6>Email notifications</h6>
                                                                           <p>Send me notification via email</p>
                                                                       </div>
                                                                       <div class="col-md-4 col-2">
                                                                           <div class="mt-2 collapse-right" style={{float:'right'}}><i class="fa fa-chevron-down"></i></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                       </a>
                                                        <div class="collapse multi-collapse" id="email_notifiction">
                                                              <div class="card card-body">
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="assign_me" checked />
                                                                      <label class="form-check-label" for="assign_me">
                                                                        Assigns me to an Item
                                                                      </label>
                                                                    </div>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="mentions" checked />
                                                                      <label class="form-check-label" for="mentions">
                                                                         Mentions me in a post or reply
                                                                      </label>
                                                                    </div>
                                                                    <hr/>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="update" checked />
                                                                      <label class="form-check-label" for="update">
                                                                         Writes an update on an Item I’m the owner of
                                                                      </label>
                                                                    </div>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="subscribed" checked />
                                                                      <label class="form-check-label" for="subscribed">
                                                                         Writes an update on an Item I’m subscribed to
                                                                      </label>
                                                                    </div>
                                                                    <hr/>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="Replies" checked />
                                                                      <label class="form-check-label" for="Replies">
                                                                         Replies or likes a conversation I’m a part of
                                                                      </label>
                                                                    </div>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="my_update" checked />
                                                                      <label class="form-check-label" for="my_update">
                                                                        Replies to my update
                                                                      </label>
                                                                    </div>
                                                              </div>
                                                      </div>
                                                           <a class="text-black" data-bs-toggle="collapse" href="#slack_notification" role="button" aria-expanded="false" aria-controls="slack_notification">
                                                                    <div class="border p-2 mt-3 shadow-sm">
                                                                       <div class="row">
                                                                           <div class="col-md-2 col-2 text-center">
                                                                              <img src="slack-2x.png" style={{height:'40px'}} />
                                                                           </div>
                                                                           <div class="col-md-6 col-8">
                                                                               <h6>Slack notifications</h6>
                                                                               <p>Get a Slack notification when someone assigns or mentions me in an update</p>
                                                                           </div>
                                                                           <div class="col-md-4 col-2">
                                                                               <div class="mt-2 collapse-right" style={{float:'right'}}><i class="fa fa-chevron-down"></i></div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                           </a>
                                                            <div class="collapse multi-collapse" id="slack_notification">
                                                                  <div class="card card-body">
                                                                       <button class="btn btn-primary btn-sm mt-2 mb-2" style={{width:'200px'}}>Enable slack notification</button>
                                                                       <p>Examples :</p>
                                                                       {/* <img src="assets/images/slack-notification-example-2x.png" class="w-100 mb-2" /> */}
                                                                       <p class="mb-3">You can unsubscribe easily by going to the monday.com app in Slack.</p>
                                                                       <p>To ensure all notifications are delivered successfully to Slack, make sure your team is using the same email address both in Slack and in monday.com</p>
                                                                  </div>
                                                          </div>
                                                          
                                                           <a class="text-black" data-bs-toggle="collapse" href="#in_smart" role="button" aria-expanded="false" aria-controls="in_smart">
                                                                <div class="border p-2 mt-3 shadow-sm">
                                                                   <div class="row">
                                                                       <div class="col-md-2 col-2 text-center">
                                                                           <i class="fa fa-bell mt-2" style={{fontSize:'25px'}}></i>
                                                                       </div>
                                                                       <div class="col-md-6 col-8">
                                                                           <h6>In Smart</h6>
                                                                           <p>Send me notification on smartpax when someone...</p>
                                                                       </div>
                                                                       <div class="col-md-4 col-2">
                                                                           <div class="mt-2 collapse-right" style={{float:'right'}}><i class="fa fa-chevron-down"></i></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                       </a>
                                                            <div class="collapse multi-collapse" id="in_smart">
                                                                  <div class="card card-body">
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="likes" checked />
                                                                          <label class="form-check-label" for="likes">
                                                                             Likes my update
                                                                          </label>
                                                                        </div>
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="on_reply" checked/>
                                                                          <label class="form-check-label" for="on_reply">
                                                                            Replies to my update
                                                                          </label>
                                                                        </div>
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="conversation" checked/>
                                                                          <label class="form-check-label" for="conversation">
                                                                              Replies or likes a conversation I’m a part of
                                                                          </label>
                                                                        </div>
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="on_subscribed" checked/>
                                                                          <label class="form-check-label" for="on_subscribed">
                                                                             Subscribes me to a Board/Item/Team
                                                                          </label>
                                                                        </div>
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="Writes" checked/>
                                                                          <label class="form-check-label" for="Writes">
                                                                             Writes an update on an Item I’m subscribed to
                                                                          </label>
                                                                        </div>
                                                                      <br/>
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
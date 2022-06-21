import {React,useEffect,useState} from 'react';
import axios from "axios";

import '../Css/Main.css';
import Footer from'./Footer';
import Sidebar from '../components/Sidebar'
import Personaltab from'../components/Profile/Personaltab';
import Workstatus from'../components/Profile/Workstatus';
import Password from'../components/Profile/Password';
import Preference from '../components/Profile/Preference';
import Notification from '../components/Profile/Notification';
import Sessionhistory from '../components/Profile/Sessionhistory';
import {Dropdown, Form } from 'react-bootstrap';
import { notify } from "../utils/services";



function Profile ()  {
  //let { networkStatus } = useNavigator();
 // let { userAgent } = useNavigator();
 
      var url = process.env.REACT_APP_LOCAL_API;

  const data = JSON.parse(localStorage.getItem('user'));
  const [udata, setUdata] = useState([]);

  const [name, setName] = useState('')


  useEffect(()=>{
    
    // if (userAgent) {
    //   console.log("userAgent", userAgent);
    // }

      axios.get(url+'/users/'+data.id,{   
            'Content-Type': 'application/json',
        })
              .then(user => {
                  console.log(user);

                  setUdata(user.data);
                  setName(user.data.name)
                  return udata;

              })

            }, []) 



            const updateProfile = (e) => {
              if(e.key === 'Enter'){              

                axios.put(url+'/users/'+udata.id,{
                 name:name
                  },{   
                  'Content-Type': 'application/json',
                 })
                    .then(user => {
                        console.log(user);  
                        notify('Successfully updated', 'success')

      
                    })

              }
            }

            const [uploadFile, setUploadFile] = useState('');

            const submitFile = (event) => {
              event.preventDefault();
          
              const data = new FormData();
              data.append("avatar", uploadFile);
          console.log(data);
              axios
              .post(url+'/users/upload/avatar/'+udata.id, data, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                })
                .then((data) => {
                  console.log(data);  
                        notify('Avatar Successfully updated', 'success')
                        window.location.reload();
                })
                .catch((error) => {
                  // error response
                });
            };

            const removeAvatar = (event) => {
              
          
              const data = new FormData();
              data.append("avatar", uploadFile);
          console.log(data);
              axios
              .post(url+'/users/remove/avatar/'+udata.id, data, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                })
                .then((data) => {
                  console.log(data);  
                        notify('Avatar Successfully removed', 'success')
                        window.location.reload();
                })
                .catch((error) => {
                  // error response
                });
            };

    return (
        <>
         <div classNameName="wrapper">
         
         <Sidebar/>
   <div class="page-wrapper" >
          <div class="page-content p-0">
            <div class="bg-blue profile-head">
                <div class="edit-file">
                       <div class="profile-section">
                         {/* <span> V</span>  */}
                         <img src={ (udata.avatar)?process.env.REACT_APP_LOCAL_API+'/users/media/'+udata.avatar:'blank-profile.png' } alt="profile" className='profile-img-width'/>

                        </div>
                        

                        <div class="change-profile-option">
                        <Dropdown >

                        <Dropdown.Toggle  id="dropdown-basic" className="btn-toggle"  >
                        <div class="icon-margin color-black" >
                                     <center>
                                     <i class="fa fa-pencil"></i> 
                                      <br/>
                                      Change Profile Pic
                                     </center>
                                    
                                  
                                 </div>
  </Dropdown.Toggle>
                             

                             <Dropdown.Menu>
    <Dropdown.Item  className="color-black" data-bs-toggle="modal" data-bs-target="#update_profile">Upload profile picture</Dropdown.Item>
    <Dropdown.Item href="#" onClick={(e) => removeAvatar()} className="color-black">Remove profile picture</Dropdown.Item>
  
  </Dropdown.Menu>
                              
</Dropdown>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        {/* <input type="text" class="form-control name-input"  value="Krishna" /> */}
                        <Form>
    
    <input type="text" onChange={(e) => setName(e.target.value)} value={name} onKeyPress={(e) => updateProfile(e)} className='name-input'  />
    

</Form>
                    </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="profile-tabs">
                              <ul class="nav nav-tabs" id="myTab" role="tablist">
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#personal_info" type="button" role="tab" aria-controls="home" aria-selected="true">Personal info</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#working_status" type="button" role="tab" aria-controls="profile" aria-selected="false">Working Status</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#password" type="button" role="tab" aria-controls="contact" aria-selected="false">Password</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Preferences" type="button" role="tab" aria-controls="contact" aria-selected="false">Preferences</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Notifications" type="button" role="tab" aria-controls="contact" aria-selected="false">Notifications</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Session_history" type="button" role="tab" aria-controls="contact" aria-selected="false">Session history</button>
                                  </li>
                              </ul>
                        </div>
                    </div>
                  
                </div>
               
            </div>

            <div class="tab-content mt-4 mx-5 height" id="myTabContent">
                             
                                  <Personaltab data={udata}/>
                                  
                                   <Workstatus data={udata}/>
                                  

                                    <Password data={udata}  />

                                    <Preference data={udata} />

                                    <Notification data={udata}  />

                                    <Sessionhistory data={udata} />
                                   
                 
                 
            
            
            
            
            </div>

              </div>      
                  <Footer/>
          </div> 

          </div>

          <div class="modal fade" id="update_profile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog profile-modal">
                <div class="modal-content">
                  <div class="modal-header border-top-blue border-bottom-0">
                    <h5 class="modal-title" id="exampleModalLabel"> Update Profile Photo</h5>
                    <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form onSubmit={submitFile}>
                          <div class="modal-body">
                          {/* <div className="name-first-word">
                                      K
                                  </div> */}
                                  
                                 
                                    <label for="profile_img" class="update_image_label btn btn-primary">Upload image</label>
                                    <input type="file" name="avatar" id="profile_img" value="" class="update_profile_img" onChange={(e) => setUploadFile(e.target.files[0])} />
                                
                              
                                </div>
                          <div class="modal-footer borde-top-0">
                       
                            <button type="submit" class="btn btn-primary">Save</button>
                          </div>
                  </form>
                </div>
              </div>
            </div>
          
  
  
  </>
  );
  }
  export default Profile 
import {React,useEffect,useState} from 'react';
import axios from "axios";
import { notify } from "../../utils/services";


function Password (props)  {
    var url = process.env.REACT_APP_LOCAL_API;
    const [cpwd, setCpwd] = useState('');
    const [npwd, setNpwd] = useState('');

    useEffect(()=>{

      //  setCpwd(props.data.password); 
    
    }, [
      props.data.password 
    ]) 

    const updateProfile = (e) => {

        if(props.data.password != cpwd){
           notify('current password does not match', 'error')
           return false
        }

        axios.put(url + '/users/' + props.data.id, {
          password: npwd
         
        }, {
          'Content-Type': 'application/json',
        })
          .then(data => {
            console.log(data);
            window.location.reload();  

             notify('Password Successfully updated', 'success')

          });
  
    }
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
                                                          <input type="password" class="form-control mb-3" name="cpwd" onChange={(e) => setCpwd(e.target.value)} required/>
                                                      </div>
                                                      <div class="col-md-4">
                                                          <label class="mb-2 mt-2">New Password</label>
                                                      </div>
                                                      <div class="col-md-8">
                                                          <input type="password" class="form-control mb-3" name="npwd" onChange={(e) => setNpwd(e.target.value)} required/>
                                                      </div>
                                                      <div class="col-md-4">
                                                          <label class="mb-2 mt-2">Confirm Password</label>
                                                      </div>
                                                      <div class="col-md-8">
                                                          <input type="password" class="form-control mb-3" name="" required/>
                                                      </div>
                                                      <div class="col-md-12">
                                                         <div style={{float:'right'}}>
                                                              Forgot password ? <a>Resend password via mail</a>
                                                         </div>
                                                      </div>
                                                  </div>
                                                  <hr/>
                                                  <button type="button" onClick={(e) => updateProfile()} class="btn btn-primary mb-2" style={{float:'right'}}>Save</button>
                                              </form>
                                              </div>
                                               <div class="col-md-3"></div>
                                           </div>
                                  </section>
  
  
  
  </>
  );
  }
  export default Password ;
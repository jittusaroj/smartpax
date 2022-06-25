import {React,useEffect,useState} from 'react';
import axios from "axios";
import { notify } from "../../utils/services";
import { Form } from 'react-bootstrap';

// import '../Css/Workspace.css';





function Worspacemodal ()  {

  
   const data = JSON.parse(localStorage.getItem('user'));
   const [name, setName] = useState('')
   const [status, setStatus] = useState('')
 
 
 const saveData = () => {

     axios.post(process.env.REACT_APP_LOCAL_API+'/workspace/save',{
      name:name,
      isActive:status,
      user_id:data.id
      
       },{   
       'Content-Type': 'application/json',
      })
         .then(data => {
             console.log(data);  
             notify('Successfully updated', 'success')
             window.location.reload();

 
 
         })
 
 }
   
    return (
        <>
        <div class="modal fade" id="column-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered modal-right-fixed">
                  <div class="modal-content">
                     <div class="modal-header b-0">
                        <h6 class="modal-title" id="exampleModalLabel">Essentials</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body essen-section">
                        <div class="row">
                           <div class="col-md-6 col-6">
                              <span class="essen-icon bg-light-gn">
                              <img src="status.svg" alt="status" />
                              </span>
                              Status
                           </div>
                           <div class="col-md-6 col-6">
                              <span class="essen-icon" style={{background:'rgb(247, 72, 117)'}}>
                              {/* <img src="assets/images/essen/dropdown.svg"> */}
                              </span>
                              Dropdown
                           </div>
                           <div class="col-md-6 col-6">
                              <span class="essen-icon"  style={{background:'rgb(0, 169, 255)'}}>
                              <img src="text.svg" alt='text'/>
                              </span>
                              Text
                           </div>
                           <div class="col-md-6 col-6">
                              <span class="essen-icon"  style={{background:'rgb(0, 207, 244)'}}>
                              {/* <img src="assets/images/essen/date.svg"> */}
                              </span>
                              Date
                           </div>
                           <div class="col-md-6 col-6">
                              <span class="essen-icon bg-light-gn"  style={{background:'rgb(255, 204, 0)'}}>
                              {/* <img src="assets/images/essen/person.svg"> */}
                              </span>
                              Person
                           </div>
                           <div class="col-md-6 col-6">
                              <span class="essen-icon bg-light-gn"  style={{background:'rgb(255, 204, 0)'}}>
                              {/* <img src="assets/images/essen/numeric.svg"> */}
                              </span>
                              Numbers
                           </div>
                           <div class="row">
                              <div class="col-md-12">
                                 <br/>
                                 <h6>Super Useful</h6>
                                 <br/>
                              </div>
                              <div class="col-md-6 col-6">
                                 <span class="essen-icon" style={{background:'rgb(0, 169, 255)'}}>
                                 {/* <img src="assets/images/essen/subitem.svg"> */}
                                 </span>
                                 Subitems
                              </div>
                              <div class="col-md-6 col-6">
                                 <span class="essen-icon"  style={{background:'rgb(163, 88, 223)'}}>
                                 {/* <img src="assets/images/essen/timeline.svg"> */}
                                 </span>
                                 Timeline
                              </div>
                              <div class="col-md-6 col-6">
                                 <span class="essen-icon" style={{background:'rgb(0, 169, 255)'}}>
                                 {/* <img src="assets/images/essen/subitem.svg"> */}
                                 </span>
                                 Subitems
                              </div>
                              <div class="col-md-6 col-6">
                                 <span class="essen-icon"  style={{background:'rgb(163, 88, 223)'}}>
                                 {/* <img src="assets/images/essen/timeline.svg"> */}
                                 </span>
                                 Timeline
                              </div>
                              <div class="col-md-6 col-6">
                                 <span class="essen-icon" style={{background:'rgb(0, 169, 255)'}}>
                                 {/* <img src="assets/images/essen/subitem.svg"> */}
                                 </span>
                                 Subitems
                              </div>
                              <div class="col-md-6 col-6">
                                 <span class="essen-icon"  style={{background:'rgb(163, 88, 223)'}}>
                                 {/* <img src="assets/images/essen/timeline.svg"> */}
                                 </span>
                                 Timeline
                              </div>
                              <div class="col-md-6 col-6">
                                 <span class="essen-icon" style={{background:'rgb(0, 169, 255)'}}>
                                 {/* <img src="assets/images/essen/subitem.svg"> */}
                                 </span>
                                 Subitems
                              </div>
                              <div class="col-md-6 col-6">
                                 <span class="essen-icon"  style={{background:'rgb(163, 88, 223)'}}>
                                 {/* <img src="assets/images/essen/timeline.svg"> */}
                                 </span>
                                 Timeline
                              </div>
                           </div>
                        </div>
                     </div>
                    
                  </div>
               </div>
            </div>

            {/* Workspace Modal */}



            <div class="modal fade border-0" id="addworkspace" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered modal-right-fixed">
                  <div class="modal-content">
                     <div class="modal-header b-0">
                        <h6 class="modal-title" id="exampleModalLabel">ADD  WORKSPACE</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body essen-section">
                        <center>
                          <div className='box' style={{height:'100px', width:'100px', borderRadius:'15px',background:'#ff9800'}}>
                            <span style={{ color:'white', fontSize:'60px'}}>N</span>
                          </div>
                        
                        </center> 
                        

                        <Form.Label>Workspace Name</Form.Label>
                        <Form.Control type="text" placeholder="Workspace Name" onChange={(e) => setName(e.target.value)} />

                        <p className='mt-4'>Privacy</p>
                        {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-2 mt-2">
     
<Form.Check inline
       
        label="Open"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
        value="1"
        onChange={(e) => setStatus(e.target.value)}
      />
      <Form.Check inline
       
        label="Closed"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
        value="2"
        onChange={(e) => setStatus(e.target.value)}
        
      />
     

      
    </div>
  ))}

                        <p>Every team member in the account can join.</p>

                        <div className='float-right'>
                           <span className='me-4' data-bs-dismiss="modal" aria-label="Close">Cancel</span>
                           <button className='btn btn-primary' onClick={saveData}>Create Workspace</button>
                        </div>
                    
                       
                     </div>
                    
                  </div>
               </div>
            </div>

        </>

);
}
export default Worspacemodal